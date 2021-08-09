<template>
  <div class="bg">
    <nav class="navbar navbar-expand-lg navbar-dark nav fsize" style="font-family: 'Acme', sans-serif;">
      <div class="container-fluid">
        <img src="../assets/logo250.png" width="80px" height="80px" alt="logo">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/main">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile">Profile</a>
            </li>
            <button class="pushable" type="submit" @click="logout">
              <span class="front" style="font-family: 'Acme', sans-serif;">LOG OUT</span>
            </button>
          </ul>
        </div>
      </div>
    </nav>

    <div>
      <div v-for="question in topic.questions" :key="question.id">
          <h1>
            {{question.questionText}}
          </h1>
            <div class="form-check" v-for="ans in question.answerOptions" :key="ans.id">
                <input class="form-check-input" type="radio" :name="question.id" :value="ans.id" v-model="question.selectedAnswer">
                <label class="form-check-label" for="exampleRadios1">{{ans.answerText}}</label>
            </div>
      </div>
    </div>

    <button class="pushableS">
        <span class="frontS" style="font-family: 'Acme', sans-serif;" @click="submit">SUBMIT</span>
    </button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
import Topic from '../store/Topic'
// import User from '../store/User'


export default {
  data() {
    return {
      topic: [],
      user: []
    }
  },

  created() {
    this.fetchTopic()
  },

  methods:{
    async fetchTopic(){
      await Topic.dispatch("fetchTopicById", localStorage.TopicId)
      this.topic = Topic.getters.topics
    },

    submit(){
      let score = 0;
      for(let question of this.topic.questions){
        let correctedId = -1
        for(let answer of question.answerOptions){
          if(answer.isCorrect){
            correctedId = answer.id
          }
        }
        if(question.selectedAnswer == correctedId){
          score += 1
        }
        console.log(score);
      }
      let payload = {
        point: score
      }
      AuthService.update( JSON.parse(localStorage.getItem('auth-login')).user.id, payload)
    },

    logout(){
      this.$swal("You really wanna leave?",":(",{ icon:"warning",buttons:{cancel:"Nooo",Yes:true}, }).then(
        (logout) =>{
          if(logout){
            AuthService.logout()
            
            this.$swal("Logout Success","You can comeback anytime :)","success")
            this.$router.push('/')
          }
        })
    },
  }

}
</script>

<style scoped lang="scss">
.nav{
    background-color: #5E17EB;
    position: sticky;
    top: 0;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 15%);
}
.bg{
  background-color: #EEEEEE;
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
.libBlock{
    border-radius: 4px;
    background-color: white;
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
.start{
    width: initial;
    margin: 0 0.5rem;
    border: 0px;
    cursor: pointer;
    vertical-align: bottom;
    background: #5E17EB;
    color: rgb(255, 255, 255);
    border-radius: 4px;
    font-size: 15px;
    text-align: center;
    height: 32px;
    padding: 0px 16px 4px;
    line-height: 32px;
    min-width: 80px
}

.pushableS {
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    background-color: #DC7C41;
    width: 8%;


    
}
.frontS {
    display: block;
    padding: 8px 20px;
    border-radius: 12px;
    font-size: 1.25rem;
    color: white ;
    transform: translateY(-6px);
    background-color: #FF914D;  
}

.pushable {
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    background-color: #DC7C41;
    width: 8%;
    position: absolute;
    top: 30%;
    right: 10px;
    
}
.front {
    display: block;
    padding: 8px 20px;
    border-radius: 12px;
    font-size: 1.25rem;
    color: white ;
    transform: translateY(-6px);
    background-color: #FF914D;  
}

.pushable:active .front
.pushableS:active .frontS {
  transform: translateY(-2px);
}

</style>