
<template>
  <div class="bkgd">
    <div class="container">
      <div class="card">
        <div class="title">题目信息</div>
        <div class="content">
          {{ exam }}
        </div>
      </div>
      <div class="card">
        <div class="title">学生的作答信息</div>
        <div class="content">
          {{ this.ans }}
        </div>
      </div>
      <div class="card">
        <div class="title">教师给分及评价输入区</div>
        <div class="content">
          <div>
            <label for="score">分数：</label>
            <input type="number" id="score" name="score" min="0" max={{maxScore}} v-model="this.score" />
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
import { useRouter } from 'vue-router'
import axios from "axios";
import { ElNotification } from "element-plus";
export default {
  setup(){
    const router = useRouter()
  },
  data: function () {
    return {
      maxScore: 100,
      score: 0,
      paper_id: -1,
      exam: "题目",
      ans: "学生作答情况",
      studentId: 0,
      papers: [],
    }
  },
  mounted() {
    this.searchParams = new URLSearchParams(window.location.search)
    this.exam_id = this.searchParams.get("exam_id")
    axios.get('/api/take_exam/big_question?eid=' + this.exam_id, {
    }).then(res => {
      this.papers = res.data
      console.log("papers:", this.papers)
    }).catch(err => {
      alert('出错了：' + err.code)
    })
  },
  methods: {
    clickHandler() {
      if (this.paper_id >= this.papers.length) {
        ElNotification({
          title: '恭喜您',
          message: "您已完成所有试卷的评阅",
          type: "success",
          duration: 3000
        })
        this.$router.push('/TeacherHome')
      }
      if (this.score < 0 || this.score > this.maxScore) {
        ElNotification({
          title: '提交失败',
          message: "分数超出规定范围",
          type: "error",
          duration: 3000
        })
      }
      else {
        if (this.paper_id != -1) {
          console.log('userId:', this.papers[this.paper_id].user_id, 'questionId:', this.papers[this.paper_id].id, 'score:', this.score)
          axios.put('/api/grade', {
            userId: this.papers[this.paper_id].user_id,
            questionId: this.papers[this.paper_id].id,
            score: this.score,

          }).then(res => {

            if (res.data === 'success') {
              ElNotification({
                title: '提交成功',
                message: "即将刷新下一份试卷",
                type: "success",
                duration: 3000
              })
            }
            else if (res.data === 'failure') {
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
        if (this.paper_id < this.papers.length) {
          this.paper_id = this.paper_id + 1
          this.ans = this.papers[this.paper_id].answer
          this.exam = this.papers[this.paper_id].desc
          this.maxScore = Number(this.papers[this.paper_id].max_score)
          this.exam = this.exam + "\n [Max Score:" + this.papers[this.paper_id].max_score + "]"
          console.log("ans:", this.ans)
          console.log("maxScore:", this.maxScore)
        }
      }
    }
  }
};
</script>
  
<style scoped>
.bkgd {
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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