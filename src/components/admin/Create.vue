<template>
  <div class="main">
    <nav class="navbar navbar-expand-lg navbar-dark nav fsize" style="font-family: 'Acme', sans-serif;">
      <div class="container-fluid">
        <img src="../../assets/logo250.png" width="80px" height="80px" alt="logo">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/admin">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/creator">Create</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/board">Score board</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="/editReward">Reward</a>
            </li> -->
            <button class="pushableE">
              <span class="frontE" style="font-family: 'Acme', sans-serif;" @click="exit">EXIT</span>
            </button>
            <button class="pushableS submitBtn">
              <span class="frontS" style="font-family: 'Acme', sans-serif;" @click="submit">SUBMIT</span>
            </button>
          </ul>
        </div>
      </div>
    </nav>
      <div class="row" style="min-height: 100vh">
        <div class="col-2">
          <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 100%; height: 100%;">
            <label class="form-label">Topic</label>
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="topic">
              <option v-for="topic in topics" :key="topic.id" :value="topic.id">{{ topic.title }}</option>
            </select>
            <br>
            <div class="mb-3" v-if="topic == -1">
              <label class="form-label">New Topic</label>
              <input type="text" class="form-control" placeholder="Enter a topic title" v-model="newTopic">
            </div>
          </div>
        </div>
        <div class="col">
          <div class="addBlock">
            <h3>Question ({{ questions.length }})</h3>
            <button class="pushableA">
              <span class="frontA" style="font-family: 'Acme', sans-serif;" @click="setQuestion">ADD</span>
            </button>
            <div class="libBlock">
              <div class="item" v-for="i in questions.length" :key="i">
                  <div class="bf">
                      <div class="ifont">
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label">Question {{i}}</label>
                          <input type="text" class="form-control"  v-model="questions[i-1].questionText">
                        </div>
                      </div>
                  </div>
                  <div class="titleBlock">
                    <div class="mb-3">
                      <label for="formGroupExampleInput" class="form-label">Answer 1 (Correct Answer)</label>
                      <input type="text" class="form-control" v-model="questions[i-1].answerOptions[0].answerText">
                    </div>
                    <div class="mb-3">
                      <label for="formGroupExampleInput" class="form-label">Answer 2</label>
                      <input type="text" class="form-control" v-model="questions[i-1].answerOptions[1].answerText" >
                    </div>
                    <div class="mb-3">
                      <label for="formGroupExampleInput" class="form-label">Answer 3</label>
                      <input type="text" class="form-control" v-model="questions[i-1].answerOptions[2].answerText" >
                    </div>
                    <div class="mb-3">
                      <label for="formGroupExampleInput" class="form-label">Answer 4</label>
                      <input type="text" class="form-control" v-model="questions[i-1].answerOptions[3].answerText" >
                    </div>
                  </div>
              </div>

              <div class="item">
                  <div class="bf">
                      <div class="ifont">
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label">Question {{questions.length + 1}}</label>
                          <input type="text" class="form-control" placeholder="Enter a question" v-model="form.questionText">
                        </div>
                      </div>
                  </div>
                  <div class="titleBlock">
                    <div class="mb-3">
                      <label for="formGroupExampleInput" class="form-label">Answer 1 (Correct Answer)</label>
                      <input type="text" class="form-control" placeholder="Enter a Answer" v-model="form.answerText1">
                    </div>
                    <div class="mb-3">
                      <label for="formGroupExampleInput" class="form-label">Answer 2</label>
                      <input type="text" class="form-control" placeholder="Enter a Answer" v-model="form.answerText2">
                    </div>
                    <div class="mb-3">
                      <label for="formGroupExampleInput" class="form-label">Answer 3</label>
                      <input type="text" class="form-control" placeholder="Enter a Answer" v-model="form.answerText3">
                    </div>
                    <div class="mb-3">
                      <label for="formGroupExampleInput" class="form-label">Answer 4</label>
                      <input type="text" class="form-control" placeholder="Enter a Answer" v-model="form.answerText4">
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Topic from '../../store/Topic'
import Question from '../../store/Question'
import User from '../../store/User'
export default {
  data() {
    return {
      topics: [],
      users: [],
      questions: [],
      newTopic: '',
      topic: -1,
      form: {
        questionText: '',
        answerText1: '',
        answerText2: '',
        answerText3: '',
        answerText4: '',
      }
    }
  },

  created() {
    this.fetchTopic()
    this.fetchUser()
  },

  methods:{
    clearForm(){
      this.form = {
        questionText: '',
        answerText1: '',
        answerText2: '',
        answerText3: '',
        answerText4: '',
      }
    },

    async fetchTopic(){
      await Topic.dispatch("fetchTopic")
      this.topics = Topic.getters.topics
      this.topics[Topic.getters.topics.length] = {
        title: "New Topic",
        id: -1
      }
    },
    async fetchUser(){
      await User.dispatch("fetchUser")
      this.users = User.getters.users
    },

    addTopic(topic) {
      if(topic!=''){
        let payload = {
          title: topic,
        }
        Topic.dispatch('addTopic', payload)
      }
      else {
          this.$swal("Submit failed","please fill topic data returning to main menu","error")
      }
    },

    setQuestion() {
      let payload = {
        questionText: this.form.questionText,
        answerOptions: [
          {
            answerText: this.form.answerText1,
            isCorrect: true
          },
          {
            answerText: this.form.answerText2,
          },
          {
            answerText: this.form.answerText3,
          },
          {
            answerText: this.form.answerText4,
          },
        ]
      }
      this.questions.push(payload)
      this.clearForm()
    },

    async submit() {   
      if (this.topic == -1) {
        this.addTopic(this.newTopic)
        await this.fetchTopic()
        for (let topic of this.topics) {
          if (topic.title == this.newTopic) {
            this.topic = topic.id
          }
        }
      }
      console.log(this.questions);
      console.log(this.topic);
      
      if((this.form.questionText!='')&&(this.form.answerText1!='')&&(this.form.answerText2!='')&&(this.form.answerText3!='')&&(this.form.answerText4!='')){
        for (let i = 0; i < this.questions.length; i++) {
          this.questions[i].topic = {
            id: this.topic
          }
          Question.dispatch('addQuestion', this.questions[i])
        }
        this.$router.push('/admin')
      }
      else{
          this.$swal("Submit failed","please fill all the data","error")
      }
    },

    exit(){
      this.$router.push('/admin')
    },
  },
}
</script>

<style scoped>
.main{
    display: block;
    overflow-y: hidden;
    overflow-x: hidden;
    background-color: #EEEEEE;
    min-height: 100vh;
}
.nav{
    background-color: #5E17EB;
    position: sticky;
    top: 0;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 15%);
}
.fsize{
    font-size: 25px;
}
.hFont{
    line-height: 3em;
    text-align: center;
    color: #5E17EB;
}
.header{
    display: inline-block;
    white-space: nowrap;
    line-height: 70px;
    padding: 1px 9px 0;
}
.addBlock{
    padding: 2rem 1rem 0px;
    overflow-y: auto;
}
.libBlock{
    border-radius: 4px;
    background: white;
    border: 2px solid rgb(255, 255, 255);
    margin: 1rem 0px 0px;
    box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px 0px;
    box-sizing: border-box;
    width: 100%;
}
.item{
    display: flex;
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
}
.bf{
    justify-content: space-between;
    display: flex;
}
.ifont{
    display: flex;
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
}.titleBlock{
    background-color: rgb(242, 242, 242);
    color: rgb(110, 110, 110);
    margin-left: 2px;
    padding: 3px;
    margin-top: 2px;
    display: flex;
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}
.but{
    flex-flow: row-reverse wrap;
    display: flex;
}

.pushableE {
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    width: 7%;
    position: absolute;
    top: 30%;
    right: 140px;
    background: #7c1b1b ;
}
.frontE {
    display: block;
    padding: 8px 20px;
    border-radius: 12px;
    font-size: 1.25rem;
    color: white;
    transform: translateY(-6px);
    background: #FD3C3C ;
}

.pushableE:active .frontE,
.pushableA:active .frontA,
.pushableS:active .frontS {
    transform: translateY(-2px);
}

.pushableA {
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    width: 100px;
    right: 20px;
    top: 120px;
    position: absolute;
    background: #30A340  ;
}
.frontA {
    display: block;
    padding: 8px 20px;
    border-radius: 12px;
    font-size: 1.25rem;
    color: white;
    transform: translateY(-6px);
    background: #3BCE4E ;
}

.pushableS {
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    width: 100px;
    background: #30A340  ;
    right: 10px;
    top: 30%;
    position: absolute;
}

.frontS {
    display: block;
    padding: 8px 20px;
    border-radius: 12px;
    font-size: 1.25rem;
    color: white;
    transform: translateY(-6px);
    background:  #3BCE4E ;
}

</style>