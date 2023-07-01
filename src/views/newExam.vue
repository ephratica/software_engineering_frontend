<template>
    <div class="bg-image">
      <div class="container mt-5">
        <div class="card shadow bg-blur">
          <div class="card-header">
            <h1 class="card-title">发布试题</h1>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <h2>第一道选择题</h2>
              <div class="mb-3">
                <label for="question1" class="form-label">题目：</label>
                <input v-model="question1" id="question1" type="text" class="form-control form-control-lg" required>
              </div>
              <div class="mb-3">
                <label for="optionA1" class="form-label">选项A：</label>
                <input v-model="optionA1" id="optionA1" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="optionB1" class="form-label">选项B：</label>
                <input v-model="optionB1" id="optionB1" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="optionC1" class="form-label">选项C：</label>
                <input v-model="optionC1" id="optionC1" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="optionD1" class="form-label">选项D：</label>
                <input v-model="optionD1" id="optionD1" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="answer1" class="form-label">答案：</label>
                <select v-model="answer1" id="answer1" class="form-select" required>
                  <option value="">请选择答案</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>
  
              <h2>第二道选择题</h2>
              <div class="mb-3">
                <label for="question2" class="form-label">题目：</label>
                <input v-model="question2" id="question2" type="text" class="form-control form-control-lg" required>
              </div>
              <div class="mb-3">
                <label for="optionA2" class="form-label">选项A：</label>
                <input v-model="optionA2" id="optionA2" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="optionB2" class="form-label">选项B：</label>
                <input v-model="optionB2" id="optionB2" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="optionC2" class="form-label">选项C：</label>
                <input v-model="optionC2" id="optionC2" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="optionD2" class="form-label">选项D：</label>
                <input v-model="optionD2" id="optionD2" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="answer2" class="form-label">答案：</label>
                <select v-model="answer2" id="answer2" class="form-select" required>
                  <option value="">请选择答案</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>
  
              <h2>大题</h2>
              <div class="mb-3">
                <label for="question3" class="form-label">题目：</label>
                <input v-model="question3" id="question3" type="text" class="form-control form-control-lg" required>
              </div>
              <div class="mb-3">
                <label for="answer3" class="form-label">答案：</label>
                <textarea v-model="answer3" id="answer3" class="form-control" rows="5" required></textarea>
              </div>
  
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary btn-lg">发布试题</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PublishQuestion",
    data() {
      return {
        question1: "",
        optionA1: "",
        optionB1: "",
        optionC1: "",
        optionD1: "",
        answer1: "",
        question2: "",
        optionA2: "",
        optionB2: "",
        optionC2: "",
        optionD2: "",
        answer2: "",
        question3: "",
        answer3: "",
      };
    },
    methods: {
      submitForm() {
        // TODO: 发布试题逻辑
      },
    },
  };
  </script>
  
  <style scoped>
  .bg-image {
    /* background-image: url('../assets/img/OIP.jpg'); */
    background-size: cover;
    background-position: center;
    /* background-attachment: fixed; 添加固定背景位置 */
    height: 1000vh;
  }
  
  .container {
    max-width: 800px;
  }
  
  .card {
    border: none;
  }
  
  .card-header {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
  }
  
  .bg-blur {
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
  }
  
  .form-label {
    font-weight: bold;
  }
  
  @media (max-width: 576px) {
    .card-title {
      font-size: 2rem;
    }
  }
  </style>