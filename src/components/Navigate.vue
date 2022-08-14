<template>
  <div class="d-flex justify-center">
    <nav class="d-flex">
        <router-link to="/">
          <h2 class="title">Home</h2>
          </router-link>
           <span class="mx-2 color"> | </span>
        <router-link to="/favoris">
          <h2 class="title">Favoris</h2>
          </router-link> 
    </nav>    
       
  </div>

</template>

<script lang="js">
export default {
    name: "components-navigate",

}
</script>

<style>
.color {
    color: rgb(243, 247, 12);
}
.title {
    color: rgb(44, 196, 238);
}
</style>