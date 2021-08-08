<template>
  <div>
    <nav class="nav fsize" style="font-family: 'Acme', sans-serif;">
        <div v-for="top in topics" :key="top.id" class="fsize">
            <div v-if="top.id == 2">
                <div v-for="quiz in top.questions" :key="quiz.id"> 
                    <h1 v-if="quiz.id == 2">{{ quiz.questionText }}</h1>
                </div>
            </div>
        </div>
    </nav>
    <div v-for="top in topics" :key="top.id" class="fsize">
        <div v-if="top.id == 2">
            <div v-for="quiz in top.questions" :key="quiz.id">
                <div v-if="quiz.id == 2">
                    <div v-for="image in quiz.image" :key="image.id">
                        <div v-if="image.id == 1">
                            <img :src="getImage(image)"  alt="" class="img">    
                        </div>
                    </div>
                    <div v-for="ans in quiz.answerOptions" :key="ans.id">
                      <button class="pushable" type="submit">
                        <span class="front" style="font-family: 'Acme', sans-serif;">{{ (quiz.answerOptions.indexOf(ans) + '.' + ans.answerText + " ")}}</span>
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
import Topic from '../services/Topic'
export default {
  data() {
    return {
      topics: []
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

    getImage(image){
        return "http://localhost:1337" + image.formats.medium.url
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
    background-color: white;
    position: sticky;
    top: 0;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 15%);
    height: 12vh;
}
.fsize{
    margin-top: 2vh;
    font-size: 25px;
    text-align: center;
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
.menuBlock{
    margin: 0 1%;
    text-align: center;
}
.item{
  width: 15.5%;
  display: inline-block;
  margin: 15px 0;
}
.img{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.pushable {
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    background-color: #DC7C41;
    width: 20%;
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