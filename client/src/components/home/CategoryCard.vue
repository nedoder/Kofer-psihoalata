<template>
  <router-link tag="a"  :to="{path: 'education?category=' + items.id}" exact>
    <div class="single-category">
      <div class="image-wrap">
        <img :src="$imagePath + items.image" alt="Category image"/>
      </div>
      <div class="card-footer">
        <p>{{items.category}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: ["items"],
}
</script>
