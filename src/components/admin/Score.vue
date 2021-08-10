<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark nav fsize" style="font-family: 'Acme', sans-serif;">
      <div class="container-fluid">
        <img src="../../assets/logo250.png" width="80px" height="80px" alt="logo">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/admin">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/creator">Create</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/board">Score Board</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/editReward">Reward</a>
            </li>
            <button class="pushable" type="submit" @click="logout">
              <span class="front" style="font-family: 'Acme', sans-serif;">LOG OUT</span>
            </button>
          </ul>
        </div>
      </div>
    </nav>
    <div>
    <table class="styled-table" style="font-family: 'Acme', sans-serif;">
      <thead>
        <tr>
            <th>
              <button class="btn btn-primary" type="submit" @click="descending()">🔼</button>
            </th>
            <th>
              <button class="btn btn-primary" type="submit" @click="ascending()">🔽</button>
            </th>
            <th class="fhead">Username</th>
            <th class="fhead">Score</th>
        </tr>
      </thead>
      <tbody v-for="(n, index) in users" :key="index">
        <tr v-if="n.role.name !== 'Admin'">
            <td></td>
            <td></td>
            <td>{{ n.username }}</td>
            <td>{{ n.point }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
import User from '../../store/User'
export default {
  data(){
    return{
      users:null,
      me:null
    }
  },
  created() {
    this.fetchUser()
    this.fetchDescending()
    this.fetchAscending()
    this.fetchStorage()
  },

  methods:{
    async fetchUser(){
      await User.dispatch("fetchUser")
      this.users = User.getters.users
    },

    async fetchDescending(){
      await User.dispatch("fetchUser")
      this.users = User.getters.users.sort(this.comparePoint2)
    },

    async fetchAscending(){
      await User.dispatch("fetchUser")
      this.users = User.getters.users.sort(this.comparePoint)
    },
    
    descending(){
      this.fetchDescending()
    },

    ascending(){
      this.fetchAscending()
    },

    comparePoint(a, b){
      return a.point-b.point;
    },
    
    comparePoint2(a, b){
      return a.point-b.point * -1
    },

    fetchStorage(){
      this.me = JSON.parse(localStorage.getItem('auth-login'));
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