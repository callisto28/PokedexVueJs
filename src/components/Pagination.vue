<template>
 <div class="paginator-container">
    <div class="round-ball orange">
       {{ page5 }}{{ page10 }} {{ page15 }} {{ page20 }} {{pageAll}}
    </div>
   
  </div>
  
</template>

<script lang="js">

import { defineComponent } from "vue";
export default defineComponent({
    name: "Pagination-component",  
  props: {
    pageAll:{
      type: Number,
    },
    page5: {
      required: false,
      type: Number,
    },
    page10: {
      required: false,
      type: Number,
    },
    page15: {
      required: false,
      type: Number,
    },
    page20: {
      required: false,
      type: Number,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.paginator-container {
  width: 100%;
  display: flex;  
  justify-content: center;
  margin: 16px 0;
  font-size: 20px;
  gap: 1rem;
  .round-ball {
    cursor: pointer;    
    width: 48px;
    height: 48px;
    display: flex;    
    align-items: center;
    justify-content: center;
    border: 2px solid #000;
    font-weight: 700;
    border-radius: 100%;
    color: rgb(245, 234, 234);
    
  }
}
</style>