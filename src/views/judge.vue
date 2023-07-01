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
                            {{ this.ans}}
                        </div>
                    </div>
                    <div class="card">
                        <div class="title">教师给分及评价输入区</div>
                            <div class="content">
                                <div>
                                    <label for="score">分数：</label>
                                    <input type="number" id="score" name="score" min="0" max={{maxScore}}  v-model="this.score"/>
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
      maxScore:100,
      score:0,
      exam_id:1,
      paper_id:-1,
      exam:"题目",
      ans:"学生作答情况",
      paper: [],
      answer_list: []
    }},
    mounted () {
      this.searchParams = new URLSearchParams(window.location.search)
      this.exam_id = this.searchParams.get("exam_id")
      axios.get('/api/sign_up/finished?id='+this.exam_id, {
      }).then(res => {
        let exams = res.data
        console.log("exams:",exams)
        for (let [i, exam] of exams.entries()) {
          console.log("userId",exam.userId)
          axios.get(('/api/take_exam?uid=' + exam.userId + '&eid='+this.exam_id), {
          }).then(res => {
            this.paper[i] = res.data
            console.log(i,res.data)
          }).catch(err => {
            alert('出错了：' + err.code)
          })
        }
        console.log(this.paper) //paper中存放所有参加本场考试的学生的试卷
      }).catch(err => {
      alert('出错了：' + err.code)
      })
      axios.get(('/api/exam/content?id='+this.exam_id), {
      }).then(res => {
        this.answer_list = res.data
        console.log("exam:",this.answer_list[this.answer_list.length-1])
      }).catch(err => {
        alert('出错了：' + err.code)
      })
    },
    methods:{
      
      clickHandler () {
        if(this.score<0||this.score>this.maxScore){
            ElNotification({
            title: '提交失败',
            message: "分数超出规定范围",
            type: "error",
            duration: 3000
            })
        }
        else{
          if(this.paper_id!=-1){
          
          console.log('userId:',this.paper[this.paper_id][1].userId,'questionId:',this.paper[this.paper_id][this.answer_list.length-1].questionId,'score:',this.score)
          axios.put('/api/grade', {
          userId: this.paper[this.paper_id][1].userId,
          questionId: this.paper[this.paper_id][this.answer_list.length-1].questionId,
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
        this.ans=this.paper[this.paper_id][this.answer_list.length-1].answer
        this.exam = this.answer_list[this.answer_list.length-1].desc
        this.maxScore = this.answer_list[this.answer_list.length-1].maxScore
        this.exam = this.exam +"\n [Max Score:"+this.maxScore+"]"
        console.log("ans:",this.ans)
        console.log("maxScore:",this.maxScore)
        }
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