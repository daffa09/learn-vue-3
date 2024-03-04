<template>
  <div>
    <div>Ini berasal dari component 3</div>
    <div> {{ providedAuthor }} </div>
  </div>
</template>

<script>
export default {
  inject: ['providedAuthor']
}
</script>
