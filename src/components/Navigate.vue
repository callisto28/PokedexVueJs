<template>
  <div class="d-flex justify-center">
    <nav class="d-flex">
        <router-link to="/" class="router">
          <h2 class="title">Home</h2>
          </router-link>
           <span class="mx-2 color"> | </span>
        <router-link to="/favoris" class="router">
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
.router {
  text-decoration: none;
  
}
.color {
    color: rgb(243, 247, 12);
}
.title {
    color: rgb(222, 214, 58);
}
</style>