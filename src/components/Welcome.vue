<template>
  <div class="app">
    <div class="container">
    <button type="button" class="pushable signUpBtn" v-on:click="signUp">
      <span class="front" style="font-family: 'Acme', sans-serif;">
        Sign Up
      </span>
    </button>
    <button type="button" class="pushable signInBtn" v-on:click="signIn">
      <span class="front" style="font-family: 'Acme', sans-serif;">
        Sign In
      </span>
    </button>
    <img alt="Vue logo" src="../assets/logo1000.png" width="500" height="400">
    <h1 style="font-family: 'Acme', sans-serif;">Welcome to Quick Quiz</h1>
    <p style="font-family: 'Acme', sans-serif;">
      for playing quiz games with limited time
    </p>

  </div>

  </div>
</template>

<script>
export default {
  methods: {
    signUp() {
      window.location = "/signUp"
    },
    signIn() {
      window.location = "/signIn"
    }
  }
}
</script>

<style>
.app {
  text-align: center;
  color: wheat;
  background-color: #5E17EB;
  height: 100vh;
}

.signUpBtn{
  position: absolute;
  top: 20px;
  right: 140px;
}

.signInBtn{
  position: absolute;
  top: 20px;
  right: 20px;
}
.pushable {
    background: hsl(340deg 100% 32%);
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    background-color: #DC7C41;
}
.front {
    display: block;
    padding: 8px 20px;
    border-radius: 12px;
    font-size: 1.25rem;
    background: hsl(345deg 100% 47%);
    color: white;
    transform: translateY(-6px);
    background-color: #FF914D;
}

  .pushable:active .front {
    transform: translateY(-2px);
  }

</style>
