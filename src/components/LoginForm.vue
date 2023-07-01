<template>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
    >
      <el-form-item label="" prop="username">
        <el-input placeholder="请输入用户名" autoComplete="on" style="position: relative" v-model="ruleForm.username">
          <template #prefix>
            <el-icon class="el-input__icon"><UserFilled /></el-icon>
          </template>
        </el-input>
      </el-form-item>
    
      <el-form-item label="" prop="password">
        <el-input
            placeholder="请输入密码"
            autoComplete="on"
            v-model="ruleForm.password"
            :type="passwordType"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><GoodsFilled /></el-icon>
          </template>
          <template #suffix>
            <div class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
            </div>
          </template>
        </el-input>
      </el-form-item>
    
      <el-form-item style="width: 100%">
        <el-button
            :loading="loading"
            class="login-btn"
            type="success"
            @click="submitForm(ruleFormRef)"
        >登录</el-button
        >
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button
            :loading="loading"
            class="signup-btn"
            type="success"
            @click="signup"
        >注册</el-button
        >
      </el-form-item>
    
    </el-form>
    </template>
    
    <script setup lang="ts">
    import axios from 'axios'
    import { ref, reactive } from 'vue'
    import { useRoute, useRouter } from "vue-router"
    import { FormInstance, useGetDerivedNamespace } from 'element-plus'
    import { ElNotification } from "element-plus";
    import { useUserStore } from '../stores/modules/user'
    const router = useRouter()
    const ruleFormRef = ref<FormInstance>()
    const passwordType = ref('password')
    const loading = ref(false)
    const useStore = useUserStore()
    const rules = reactive({
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    })
    // 表单数据
    const ruleForm = reactive({
      username: '',
      password: '',
    })
    // 显示密码图标
    const showPwd = () => {
      passwordType.value = passwordType.value === 'password'?'':'password'
    }
    const signup = () => {
      router.push({
        path: '/SignUp',
      })
      ElNotification({
        title: '正在跳转',
        message: "成功跳转至 CET注册界面",
        type: "success",
        duration: 3000
      })
    }
    // const userStore = useUserStore()
    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.validate(async(valid) => {
        if (valid) {
            await axios.get(
              'api/user/login',{
                params:{
                  name    :ruleForm.username,
                  pwd     :ruleForm.password,
                }
              }
            )
            .then(res =>{
              console.log(res.data.id)
              if(res.data.type==="student"){
                ElNotification({
                    title: '登录成功',
                    message: "欢迎登录 学生信息管理系统",
                    type: "success",
                    duration: 3000
                })
                router.push({
                  path: '/StudentHome',
                  query: {
                    id: res.data.id
                  }
                })
              }
              else if(res.data.type==='teacher'){
                router.push({
                  path: '/TeacherHome',
                  query: {
                    id: res.data.id
                  }
                })
                ElNotification({
                    title: '登录成功',
                    message: "欢迎登录 教师阅卷系统",
                    type: "success",
                    duration: 3000
                })
              }
              else {
                ElNotification({
                    title: '登录失败',
                    message: "账号或密码错误",
                    type: "error",
                    duration: 3000
                })
              }
            })
            .catch(error=>(
              ElNotification({
                  title: '登录失败',
                  message: error.code,
                  type: "error",
                  duration: 3000
              })
            )
          )
        } 
        else {
          console.log('error submit!')
          loading.value = false
          return false
        }
      })
    }
    </script>
    
    <style scoped>
    .login-btn{
      margin-top: 20px;
      width: 100%; height: 47px;
      border-radius: 10px;
    }
    .signup-btn{
      margin-top: 10px;
      width: 100%; height: 47px;
      border-radius: 10px;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      cursor: pointer;
      user-select: none;
    }
    ::v-deep(.svg-icon){
      vertical-align: 0;
    }
    </style>