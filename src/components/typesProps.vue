<template>
  <div>
    <div> {{ message }} </div>
    <div> {{ number}} </div>
  </div>
</template>

<script>
export default {
  // jadi props ini adalah tempat untuk menampung data yang di lempar dari parent component, dan juga bisa di atur config nya
  props:{
    message:String,
    number:{
      type:Number,
      default:0
    }
  }

}
</script>