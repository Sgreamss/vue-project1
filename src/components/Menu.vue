<template>
  <div>
      <nav class="nav">
          welcome
        <img src="../assets/logo250.png" width="100" height="100" style="margin-top: -10px">
        <button class="pushable" type="submit">
            <span class="front" style="font-family: 'Acme', sans-serif;">log out</span>
        </button>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav{
    background-color: #5E17EB;
    height: 10%;
}
.pushable {
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    background-color: #DC7C41;
    width: 7%;
    position: absolute;
    top: 25px;
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