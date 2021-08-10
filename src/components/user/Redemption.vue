<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark nav fsize" style="font-family: 'Acme', sans-serif;">
      <div class="container-fluid">
        <img src="../../assets/logo250.png" width="80px" height="80px" alt="logo">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/main">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile">History</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/rewards">Redeem</a>
            </li>
            <button class="pushable" type="submit" @click="logout">
              <span class="front" style="font-family: 'Acme', sans-serif;">LOG OUT</span>
            </button>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      <table class="table my-3">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Point</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reward in rewards" :key="reward.id">
      
            <td>{{ reward.name }}</td>
            <td>{{ reward.point }}</td>
            <td>
              <button class="btn btn-success"  @click="getReward(reward.point,users.point,reward.name,users.username)">แลก</button>
            </td>
          </tr>
          <h2>total point : {{users.point}}</h2>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import User from '../../store/User'
import AuthService from '@/services/AuthService'
import Reward from '../../store/Reward'
export default {
  data(){
    return{
      userRole: JSON.parse(localStorage.getItem('auth-login')).user.role.name,
      rewards:null,
      me:null,
      selected:-1,
      userId: JSON.parse(localStorage.getItem('auth-login')).user.id,
      users : null,
      byId:null,
    }
  },
  
  
  created() {
    this.fetchReward()
    this.getStorage()
    this.fetchUser()
  },
  

  methods:{
    async fetchReward(){
      await Reward.dispatch("fetchReward")
      this.rewards = Reward.getters.rewards
    },
    async fetchUser(){
      await User.dispatch("fetchUserByID",JSON.parse(localStorage.getItem('auth-login')).user.id)
      this.users = User.getters.users
    },
  
    getStorage(){
      this.me = JSON.parse(localStorage.getItem('auth-login'));
    },
    submit(){

    },
    async getReward(id,points,name,usernames) {
    
      //console.log(user.user.username);
      let Int1 = parseInt(points)
      let Int2 = parseInt(id)
      if(Int1 < Int2){
        this.$swal("Not enough point","Please check you point","error")
        return;
      }
      let setpoint = {
        point: Int1-Int2
      }
      let setHistory = {
            "name" : name,
            "username": usernames
        }
      console.log(setpoint)
      axios.put("http://localhost:1337/users/" + JSON.parse(localStorage.getItem('auth-login')).user.id, setpoint)
      axios.post("http://localhost:1337/histories/",setHistory )

      this.fetchUser()
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

.styled-table {
    margin: 25px 0;
    min-width: 400px;
    margin-left: auto;
    margin-right: auto;
}
.nav{
    background-color: #5E17EB;
    position: sticky;
    top: 0;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 15%);
}
.fhead{
    font-size: 40px;
}
.fsize{
    font-size: 25px;
}
.bsize{
    width: 150px;
}
.header{
    display: inline-block;
    white-space: nowrap;
    line-height: 70px;
    padding: 1px 9px 0;
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