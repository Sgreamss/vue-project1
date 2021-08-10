<template>
  <div class="bg">
        <nav class="navbar navbar-expand-lg navbar-dark nav fsize" style="font-family: 'Acme', sans-serif;">
        <div class="container-fluid">
            <img src="../../assets/logo250.png" width="80px" height="80px" alt="logo">
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/admin">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" href="/creator">Create</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/board">Score board</a>
                </li>
                <!-- <li class="nav-item">
                  <a class="nav-link" href="/editReward">Reward</a>
                </li> -->
                <button class="pushable" type="submit" @click="logout">
                <span class="front" style="font-family: 'Acme', sans-serif;">LOG OUT</span>
                </button>
            </ul>
            </div>
        </div>
        </nav>
        <div v-for="qs in topic.questions" :key="qs.id">
            <div class="libBlock">
              <div class="item">
                  <div class="bf">
                      <div class="ifont">
                            {{ qs.questionText }}
                      </div>
                  </div>
                  <div class="but">
                        <button class="edit" type="edit" style="font-family: 'Acme', sans-serif;" @click="deleteQuestion(qs)">
                          DELETE
                        </button>
                    </div>
                  <div class="titleBlock">
                    {{topic.title}}
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AuthService from '@/services/AuthService'
import Topic from '../../store/Topic'
import Question from '../../store/Question'
export default {
  data() {
    return {
      topic: [],
    }
  },

  created() {
    this.fetchTopic()
  },

  methods:{
    async fetchTopic(){
      await Topic.dispatch("fetchTopicById", localStorage.TopicId)
      this.topic = Topic.getters.topics
      this.fetchTopic()
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

    async deleteQuestion(question){
      await Question.dispatch('deleteQuestion', question)
      console.log(this.form);
    }
  },
}
</script>

<style scoped>
.bg{
  background-color: #EEEEEE;
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
.pushable {
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    background-color: #DC7C41;
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


.pushable:active .front {
  transform: translateY(-2px);
}

.edit{
    width: initial;
    margin: 0 0.5rem;
    border: 0px;
    cursor: pointer;
    vertical-align: bottom;
    color: rgb(255, 255, 255);
    border-radius: 4px;
    font-size: 15px;
    text-align: center;
    height: 32px;
    padding: 0px 16px 4px;
    line-height: 32px;
    min-width: 80px;
    background: #5E17EB;
}


</style>