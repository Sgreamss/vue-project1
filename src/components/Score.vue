<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark nav fsize" style="font-family: 'Acme', sans-serif;">
      <div class="container-fluid">
        <img src="../assets/logo250.png" width="80px" height="80px" alt="logo">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" :href="me.user.id === 2 ? '/admin' : '/main'">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/board">Score Board</a>
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
    <table class="styled-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(n, index) in users" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ n.username }}</td>
          <td>{{ n.point }}</td>
          <div class="change_color" >
            <td v-if="me.user.username === n.username">{{ "-----YOU ARE HERE!!!-----" }}</td>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
import User from '@/services/User'
export default {
  data(){
    return{
      users:null,
      me:null
    }
  },
  created() {
    this.fetchUser()
    this.fetchStorage()
  },

  methods:{
    async fetchUser(){
      await User.dispatch("fetchUser")
      this.users = User.getters.users
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
.change_color{
  color:red
}
.styled-table {
    margin: 25px 0;
    min-width: 400px;
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

.pushable:active .front {
  transform: translateY(-2px);
}

</style>