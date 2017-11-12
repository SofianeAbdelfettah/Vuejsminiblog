<template>
<div>
  <div class="uk-child-width-1-4 uk-grid-small uk-text-center" uk-grid style="margin-left: 10px;margin-right: 25px;">
      <div class="post uk-card uk-card-primary uk-card-hover uk-card-body uk-light" v-for="item in getposts">
        <h1 class="uk-article-title"><a class="uk-link-reset" href="">{{item.title}}</a></h1>
        <p class="uk-article-meta">Auteur {{item.author}} on {{item.createdAt}}</p>
        <p>{{item.body}}</p>
    </div>
  </div>
</div>
</template>

<script>
// import materialize from 'materialize'
export default {
  created () {
    this.$store.dispatch('posts/Getall')
  },
  computed: {
    getposts () {
      console.log(this.$store)
      return this.$store.state.posts.posts
    }
  }
}
</script>

<style>
.post {
  margin-left: 20px;
  margin-top: 20px;
}

body {
  margin: 0;
}
</style>
