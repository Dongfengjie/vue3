import axios from 'axios';
import { router } from '@/router';
import { ElMessage } from 'element-plus'
import { getCookie, setCookie, removeCookie } from './cookie';

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};
// 创建axios
const service = axios.create({
    timeout: 600000,
    baseURL: import.meta.env.VITE_APP_DOMAIN_URL, // url = base url + request url ?
})

// 请求拦截
service.interceptors.request.use(
    (config) => {
        const userToken = getCookie('userToken');
        if (userToken) {
            config.headers.authorization = userToken
        }
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        let res = { ...response.data }
        const { headers } = response
        const userToken = getCookie('userToken');
        const responseToken = headers?.authorization
        // 更新token
        if (userToken && responseToken && responseToken !== userToken) {
            setCookie('userToken', responseToken)
        }

        if (res.rspCode !== '00000000') {
            ElMessage({
                showClose: true,
                center: true,
                message: res.rspDesc || 'Oops, this is a error message',
                type: 'error',
            })
        }
        return res;
    },
    (error) => {
        const userToken = getCookie('userToken');
        const status = error.response.status;
        const url = error.response.config.url;
        const rspDesc = error.response.data.rspDesc;
        const statusText = error.response.statusText;
        const errortext = codeMessage[status] || statusText;
        const errorMsg = rspDesc ? `请求错误 ${status}: ${rspDesc}` : `请求错误 ${status}: ${url}, ${errortext}`;

        if (status === 401 || status === 403) {
            const unLogin = getCookie('unLogin');
            if (unLogin && unLogin !== 'REQUEST-401') {
                ElMessage.error('未登录或登录已过期，请重新登录。');
            } else {
                ElMessage.error(errorMsg + '请重新登录。');
            }
            // 删除用户token
            removeCookie('userToken');
            // 记录这笔请球为 401状态
            setCookie('unLogin', 'REQUEST-401');
            return
        }

        ElMessage({
            showClose: true,
            center: true,
            message: errorMsg,
            type: 'error',
        })
        if (status <= 504 && status >= 500) {
            if (userToken) {
                router.push('/500');
                return;
            }
            return;
        }
        if (status >= 404 && status < 422) {
            if (userToken) {
                router.push('/404');
            }
        }
        return Promise.reject(error);

    }
)

export default service;

console.log(service.timeout);