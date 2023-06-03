<template>
    <div class="bkgd">
        <div class="container">
            <div class="card">
                <div class="title">题目信息</div>
                    <div class="content">
                        We ran a study in which ， in 0 ne group ， we showed people their
                        mcome on a monthly basis. ln another group ， we showed peopl e
                        their income on a weekly basis. And what we found was th at
                        people whO saw their income on a weekly basis were able tO
                        budget better throughout the month. NOW, ， it's important tO know
                        that we didn't change how much money people were recewing,
                        we 」 ust changed the enuronment in wh ic h they understood their
                        mcome. And environmental cues like this h ave an impact.
                    </div>
                </div>
                <div class="card">
                    <div class="title">学生的作答信息</div>
                        <div class="content">
                            We ran a study in which ， in 0 ne group ， we showed people their
                            mcome on a monthly basis. ln another group ， we showed peopl e
                            their income on a weekly basis. And what we found was th at
                            people whO saw their income on a weekly basis were able tO
                            budget better throughout the month. NOW, ， it's important tO know
                            that we didn't change how much money people were recewing,
                            we 」 ust changed the enuronment in wh ic h they understood their
                            mcome. And environmental cues like this h ave an impact.
                        </div>
                    </div>
                    <div class="card">
                        <div class="title">教师给分及评价输入区</div>
                            <div class="content">
                                <div>
                                    <label for="score">分数：</label>
                                    <input type="number" id="score" name="score" min="0" max="100" />
                                </div>
                                <div>
                                    <label for="comment">评价：</label>
                                    <textarea id="comment" name="comment" rows="18" cols="30"></textarea>
                                </div>
                                <div class="button-container">
                                    <button class="submit">提交</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       

</template>
  
  <script>
  export default {
    // vue3 逻辑
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