<template>
  <div class="bg">
    <nav class="navbar navbar-expand-lg navbar-dark nav fsize" style="font-family: 'Acme', sans-serif;">
      <div class="container-fluid">
        <img src="../../assets/logo250.png" width="80px" height="80px" alt="logo">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/main">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile">History</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/rewards">Redeem</a>
            </li>
            <button class="pushable" type="submit" @click="logout">
              <span class="front" style="font-family: 'Acme', sans-serif;">LOG OUT</span>
            </button>
          </ul>
        </div>
      </div>
    </nav>
    <div>
    <h1 class="hFont" style="font-family: 'Acme', sans-serif;" >
      CHOOSE THE TOPIC OF THE QUESTIONS
    </h1>
    <div class="libBlock" v-for="tp in topics" :key="tp.id">
      <div class="item">
          <div class="bf">
              <div class="ifont">
                    {{ tp.questions.length }} Questions
              </div>
          </div>
          <div class="but" id="topic">
              <button class="start" type="start" @click="start(tp.id)" style="font-family: 'Acme', sans-serif;">
                START
              </button>
          </div>
          <div class="titleBlock">
              {{tp.title}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
import Topic from '../../store/Topic'
export default {
  data() {
    return {
      topics: [],
    }
  },


  created() {
    this.fetchTopic()
  },

  methods:{
    async fetchTopic(){
      await Topic.dispatch("fetchTopic")
      this.topics = Topic.getters.topics
    },

    fetchStorage(){
      this.users = JSON.parse(localStorage.getItem('auth-login'));
    },

    async start(id){
      localStorage.TopicId = id;
      this.$router.push('/quiz')
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
  },
}
</script>

<style scoped>
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
.pushable {
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    background-color: #DC7C41;
    width: 120px;
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

</style>