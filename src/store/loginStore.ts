import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import router from '@/router'

interface UserInfo {
    phone: string
    pass: string
    rember: boolean
}

export const useLoginStore = defineStore('login', {
    state: () => ({
        originUserInfo: {
            phone: '13298011165',
            pass: '123456',
            rember: undefined
        },
        otherUserInfo: {
            phone: '15500000001',
            pass: '123456',
            rember: undefined
        }
    }),

    actions: {
        // async registerUser(login, password) {
        //     try {
        //         this.userData = await api.post({ login, password })
        //     } catch (error) {
        //         return error
        //     }
        // }
        loginUser(params: UserInfo) {
            const { phone, pass, rember } = params
            console.log(phone)
            console.log(pass)
            if (
                (phone === this.originUserInfo.phone &&
                    pass === this.originUserInfo.pass) ||
                (phone === this.otherUserInfo.phone &&
                    pass === this.otherUserInfo.pass)
            ) {
                ElMessage.success('登陆成功')
                router.push('/home');
            } else {
                ElMessage.error('用户名/密码错误！')
            }
        }
    }
})
