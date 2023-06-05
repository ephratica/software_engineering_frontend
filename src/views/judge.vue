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
                                    <input type="number" id="score" name="score" min="0" max="100" v-model="this.score"/>
                                </div>
                                <div>
                                    <label for="comment">评价：</label>
                                    <textarea id="comment" name="comment" rows="18" cols="30"></textarea>
                                </div>
                                <div class="button-container">
                                    <button class="submit" @click="clickHandler">提交</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       

</template>
  
  <script>
import { onMounted } from 'vue';
import axios from "axios";
  export default {
    data: function () {
    return {
      score:0,
      exam_id:1,
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