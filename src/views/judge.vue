<template>
    <div class="bkgd">
        <div class="container">
            <div class="card">
                <div class="title">题目信息</div>
                    <div class="content">
                        {{ exam}}
                    </div>
                </div>
                <div class="card">
                    <div class="title">学生的作答信息</div>
                        <div class="content">
                            {{ this.paper.answer}}
                        </div>
                    </div>
                    <div class="card">
                        <div class="title">教师给分及评价输入区</div>
                            <div class="content">
                                <div>
                                    <label for="score">分数：</label>
<<<<<<< HEAD
                                    <input type="number" id="score" name="score" min="0" max="100"  v-model="this.score"/>
=======
                                    <input type="number" id="score" name="score" min="0" max="100" v-model="this.score"/>
>>>>>>> 14b258dbb26c13b7a6e96b7ba6e640a0ffc58136
                                </div>
                                <div>
                                    <label for="comment">评价：</label>
                                    <textarea id="comment" name="comment" rows="18" cols="30"></textarea>
                                </div>
                                <div class="button-container">
                                    <button class="submit" @click="clickHandler">提交&刷新</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       

</template>
  
  <script>
import { onMounted } from 'vue';
import axios from "axios";
import { ElNotification } from "element-plus";
  export default {
    data: function () {
    return {
      score:0,
      exam_id:1,
<<<<<<< HEAD
      paper_id:-1,
      exam:"Please write a letter to your friend LiHua",
      ans:"学生作答情况",
      paper: [],
    }},
    mounted () {
      this.searchParams = new URLSearchParams(window.location.search)
      this.exam_id = this.searchParams.get("id")
      axios.get('/api/sign_up/finished?id=1', {
      }).then(res => {
        let exams = res.data
        console.log("exams:",exams)
        for (let [i, exam] of exams.entries()) {
          console.log("userId",exam.userId)
          axios.get(('/api/take_exam?uid=' + exam.userId + '&eid=1'), {
          }).then(res => {
            this.paper[i] = res.data
            console.log(i,this.paper)
          }).catch(err => {
            alert('出错了：' + err.code)
          })
        }
        console.log(this.paper)
      }).catch(err => {
      alert('出错了：' + err.code)
      })
    },
    methods:{
      
      clickHandler () {
        if(this.paper_id!=-1){
          console.log('userId:',this.paper[this.paper_id][1].userId,'questionId:',this.paper[this.paper_id][1].questionId,'score:',this.score)
          axios.put('/api/grade', {
          userId: this.paper[this.paper_id][1].userId,
          questionId: this.paper[this.paper_id][1].questionId,
          score:this.score,

        }).then(res => {
          
          if(res.data==='success'){
            ElNotification({
            title: '提交成功',
            message: "即将刷新下一份试卷",
            type: "success",
            duration: 3000
            })
          }
          else if(res.data==='failure'){
            ElNotification({
            title: '提交失败',
            message: "请重新提交",
            type: "error",
            duration: 3000
            })
          }
        }).catch(err => {
          // alert('出错了：' + err.code)
          //alert("意外错误")
        }) 
        }
        this.paper_id=this.paper_id+1
        this.ans=this.paper[this.paper_id][1].answer
=======
      paper_id:0,
      exam:"",
      paper: {},
    }},
    mounted () {
      axios.get(('api/take_exam?uid=3' + '&eid=1'), {
          }).then(res => {
            this.paper = res.data[res.data.length-1]
            console.log(this.paper.questionId)
          }).catch(err => {
            alert('出错了：' + err.code)
          })
    },
    methods:{
      clickHandler () {
        axios.put('/api/grade', {
          userId: 3,
          questionId: this.paper.questionId,
          score:this.score
        }).then(res => {
          window.location.href="/TeacherHome"
        }).catch(err => {
          // alert('出错了：' + err.code)
          //alert("意外错误")
        })
        // window.location.href="/TeacherHome"
>>>>>>> 14b258dbb26c13b7a6e96b7ba6e640a0ffc58136
      }
    }
  };
  </script>
  
  <style scoped>
  .bkgd{
    background-color: #ffffff;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    background-image: url("../assets/login_bg.svg");
    justify-content: center;
    align-items: center;
    padding: 5px 5px;
    box-sizing: border-box;
  }
  .container {
    height: 100%;
    width: 140%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(228, 228, 228, 0.384);
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .card {
    width: 350px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 660px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  
  .content {
    padding: 20px;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
  }
  
  .submit {
    width: 100px;
    height: 40px;
    border-radius: 20px;
    background-color: rgb(139, 139, 218);
  }
  </style>