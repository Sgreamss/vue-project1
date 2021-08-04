<template>
  <div>
    <div class="icon">
      <img src="../assets/logo250.png">
    </div>
    <div class="block">
      <div class="insideBlock">
        <div class="line">
          <p class="fsize" style="font-family: 'Acme', sans-serif;">CREATE YOUR ACCOUNT</p>
          <div class="blockInput">
            <label class="label">
            <input name="email" type="text" class="input" placeholder="email" style="font-family: 'Acme', sans-serif;">
            </label>
          </div>
          <div class="blockInput">
            <label class="label">
            <input  name="username" type="text" class="input" placeholder="username" style="font-family: 'Acme', sans-serif;">
            </label>
          </div>
          <div class="blockInput">
            <label class="label">
            <input  name="password" type="password" class="input" placeholder="password" style="font-family: 'Acme', sans-serif;">
            </label>
          </div>
          <div class="blockInput">
            <label class="label">
            <input  name="confirm" type="confirmPassword" class="input" placeholder="confirm password" style="font-family: 'Acme', sans-serif;">
            </label>
          </div>
          <div class="blockButton">
            <button class="pushable" type="submit">
              <span class="front" style="font-family: 'Acme', sans-serif;">SUBMIT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="blockAcc">
      <p class="haveAcc" style="font-family: 'Acme', sans-serif;">
        Already have an account?
        <a href="/signIn">Sign In</a>
      </p>
    </div>
  </div>
</template>


<script>
export default {

}
</script>

<style scoped>
.input {
  width: 100%;
}
.icon{
    display: flex;
    justify-content: center;
}
.block{
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  max-width: 450px;
}
.insideBlock{
    background-color: white;
    border: 2px solid #FF914D;
    border-radius: 6px;
    margin: 0 0 10px;
    padding: 16px 0;
}
.h1 {
  text-align: center;
  margin-bottom: 20px;
}
.line{
  margin: 0 40px 6px;
}
.fsize{
  color: #5E17EB;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
}
.blockInput{
    align-items: center;
    background: white;
    border: 2px solid #FF914D;
    border-radius: 4px;
    display: block;
    font-size: 14px;
    margin-bottom: 20px;
}
.label{
    display: flex;
    height: 36px;
    -webkit-box-flex: 1;
    flex: 1 0 0;
    padding: 0;
    position: relative;
    margin: 0;
    min-width: 0;
}
.span{
    color: rgba(var(--f52,142,142,142),1);
    font-size: 12px;
    height: 36px;
    left: 8px;
    line-height: 36px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
    text-overflow: ellipsis;
}
.input{
    background: white;
    border: 0;
    margin: 0;
    outline: 0;
    overflow: hidden;
    padding: 9px 0 7px 8px;
    text-overflow: ellipsis;
}
.blockButton {
  text-align: center;
}
.pushable {

    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    background-color: #DC7C41;
    width: 100%;
}
.front {
    display: block;
    padding: 8px 20px;
    border-radius: 12px;

    color: white ;
    transform: translateY(-6px);
    background-color: #FF914D;  
}

.pushable:active .front {
  transform: translateY(-2px);
}

.blockAcc{
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 450px;
  padding: 10px 0;
  border: 2px solid #FF914D;
  border-radius: 4px;
}

.haveAcc{
  color: #5E17EB;
  font-size: 16px;
  margin: 15px;
  text-align: center;
}
</style>