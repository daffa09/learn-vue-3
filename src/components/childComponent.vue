<template>
  <div>
    <h3>Ini Adalah Child Component</h3>
      <div>{{ text }}</div>

    <br><br><br>
    <!-- jadi ini akan muncul jika di import ke parent, lalu saat button ini di klik akan mengirim emits -->
    <!-- dimana jika emits tersebut di panggil sebagai parameter pada parent nya, si parent akan melakukan sesuatu dan juga bisa mengirim data nya dari child ke parent -->
    <button @click="onPress()">Click Dari Child</button>
  </div>
</template>

<script>
export default {
props: {
    text:{
      type: String,
      default: ''
    }
  },

  // emits berfungsi untuk mengirimkan data dari child ke parent
emits: ["child-click"],
methods:{
  onClick(){
    console.log('click saya!!');
  },
  onPress(){
    this.$emit('child-click', 'value');
  }
}
}
</script>

<style>

</style>