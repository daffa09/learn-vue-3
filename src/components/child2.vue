<template>
  <div>
    <!-- lalu inputan ini akan mengambil data dari parent, dan juga jika ada update nilai berdasarkan input, akan dikirim kembali ke parent menggunakan event -->
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
  <!-- ini adalah cara simple nya dan juga menggunakan fungsi computed -->
    <input v-model="value">
  </div>
</template>

<script>
export default {
  // modelValue adalah props yang di terima dari parent nya
  props:["modelValue"],
  computed:{
    value:{
      get(){
        return this.modelValue
      },
      set(value){
        this.$emit('update:modelValue', value)
      }
    }
  }

}
</script>

<style>

</style>