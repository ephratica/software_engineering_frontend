<script setup>
import { Edit, Share , Delete , Search , Upload } from '@element-plus/icons-vue'
</script>
<template>
    <div>
      <!-- 面包屑导航区域 -->
   
    <!-- 卡片视图区域 -->
    <el-card>
      
      <!-- 用户列表区域  -->
      <el-table :data="userlist" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="考试科目" prop="CET"></el-table-column>
        <el-table-column label="所属学校" prop="school"></el-table-column>
        <el-table-column label="考生号码" prop="stu_num"></el-table-column>
        
        <el-table-column label="操作" width="180px">
          <template v-slot="scope">
            <!-- 修改按钮 -->
          <el-button type="primary" v-model="scope.row.Id" size="medium"><el-icon><edit /></el-icon></el-button>
          
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    </div>
  </template>
   
  <script >
  
  export default {
    data () {
      return {
        // 获取用户列表的参数对象
        queryInfo: {
          query: '', // 查询参数
          pagenum: 1, // 当前页码
          pagesize: 2 // 每页显示条数
        },
        // 用户列表
        userlist: [
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },{
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },{
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
          {
            username: "你好",
            CET: "CET6",
            school: "内裤大学",
            stu_num: 1145141919810
          },
        ],
        // 总数据条数
        total: 6
      }
    },
    created () {
      //this.getUserList()
    },
    methods: {
    //   async getUserList () {
    //     const { data: res } = await this.$http.get('users', {
    //       params: this.queryInfo
    //     })
    //     if (res.meta.status !== 200) return this.$message.error('获取用户列表失败')
    //     this.userlist = res.data.users
    //     this.total = res.data.total
    //     console.log(res)
    //   }
    }
  }
  </script>
   
  <style lang="less" scoped>

  </style>