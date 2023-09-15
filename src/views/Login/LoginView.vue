<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useLoginStore } from '@/store/loginStore'

const loginStore = useLoginStore()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    phone: '',
    pass: '',
    rember: false
})

const validatePass = (rule: any, value: any, callback: any) => {
    const isChineseCharacters = value && value.match(/[^\x00-\xff]/gi)
    const regNoSpace = /^[^\s]*$/
    const noSapce = regNoSpace.test(value)
    if (isChineseCharacters) {
        callback('请勿输入中文符号!')
    } else if (!noSapce) {
        callback('请勿输入空格!')
    } else {
        callback()
    }
}

const rules = reactive<FormRules>({
    phone: [
        {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
        },
        {
            min: 11,
            max: 11,
            message: '手机号码长度有误!',
            trigger: 'change'
        }
    ],
    pass: [
        {
            required: true,
            message: '请输入密码'
        },
        {
            validator: validatePass,
            trigger: 'blur'
        }
    ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    const success = await formEl.validate()
    if (success) loginStore.loginUser(ruleForm)
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
const rememberUser = (value: boolean) => {
    if (value) {
        localStorage.setItem('rememberUser', JSON.stringify(ruleForm))
    } else {
        localStorage.setItem('rememberUser', '')
    }
}
onMounted(() => {
    const localData: any =
        localStorage.getItem('rememberUser') &&
        JSON.parse(localStorage.getItem('rememberUser') as any)
    if (!localData) return
    ruleForm.phone = localData.phone
    ruleForm.rember = localData.rember
})
</script>

<template>
    <div class="login">
        <div class="login_form">
            <h2>用户登录</h2>
            <el-form
                :model="ruleForm"
                :rules="rules"
                label-width="80px"
                label-position="right"
                ref="ruleFormRef"
                class="demo-ruleForm"
            >
                <el-form-item label="手机号码" prop="phone">
                    <el-input v-model="ruleForm.phone" clearable />
                </el-form-item>

                <el-form-item label="密码" prop="pass">
                    <el-input
                        v-model="ruleForm.pass"
                        type="password"
                        autocomplete="off"
                        clearable
                    />
                </el-form-item>

                <el-form-item label="" prop="type">
                    <el-checkbox
                        v-model="ruleForm.rember"
                        label="7天内记住用户名"
                        name="rember"
                        @change="rememberUser"
                    />
                </el-form-item>

                <el-form-item label-width="125">
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        立即登录
                    </el-button>
                    <el-button @click="resetForm(ruleFormRef)">
                        重置
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style scoped lang="scss">
.login {
    width: 100%;
    height: 100%;
    @include flex-setting(center, center);
    // @include background-item('@/assets/img/bg.jpg', cover, no-repeat, center);
    .login_form {
        padding: 50px;
        border-radius: 10px;
        background-color: aliceblue;
        h2 {
            text-align: center;
            margin-bottom: 40px;
        }
        .demo-ruleForm {
            width: 400px;
        }
    }
}
</style>
