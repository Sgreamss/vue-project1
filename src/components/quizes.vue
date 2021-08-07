<template>
  <div>
      <h1>PEKO</h1>
      <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in info" :key="index">
          <td >{{ index.Title }}</td>
          <p></p>
          <td >{{ index.Description }}</td>
          <div>
            <button @click="Enter">ท้าทาย!</button>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
   data() {
    return {
      info:null,
    }
  },
  
 async mounted() {
    await fetch("http://localhost:1337/quizzes")
      .then((res) => res.json())
      .then((data) => {
        this.info = data;
      });

 }
}
</script>

<style></style>