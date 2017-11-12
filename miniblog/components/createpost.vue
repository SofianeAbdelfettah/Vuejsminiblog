<template>
  <p uk-margin>
      <a class="uk-button uk-button-default" href="#modal-group-1" uk-toggle>Modal 1</a>
      <a class="uk-button uk-button-default" href="#modal-group-2" uk-toggle>Modal 2</a>
  </p>
  <div id="modal-group-1" uk-modal>
      <div class="uk-modal-dialog">
          <button class="uk-modal-close-default" type="button" uk-close></button>
          <div class="uk-modal-header">
              <h2 class="uk-modal-title">Headline 1</h2>
          </div>
          <div class="uk-modal-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="uk-modal-footer uk-text-right">
              <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
              <a href="#modal-group-2" class="uk-button uk-button-primary" uk-toggle>Next</a>
          </div>
      </div>
  </div>
</template>

<script>
// import materialize from 'materialize'
export default {
  data(){

  }
  methods: {
    create () {
      this.$store.dispatch('posts/create', this.login).then(response => {
        this.$router.push('/')
      }, error => {
        console.error(error)
      })
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
