<template>
  <div>
    <div>Title</div>
    <slot :data="title"/>
    <div>Content</div>
    <!-- penamaan data2 -->
    <slot name="slotDua" :data2="content"/>
    <div>Footer</div>
    <slot name="slotTiga" :data="footer"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:"Ini adalah title",
      content: "Ini adalah content",
      footer: "Ini adalah footer",
    }
  }
}
</script>