<template>
<div class="uk-container uk-text-center">
  <br>
  <div class="uk-margin">
    <div class="uk-inline">
      <ul class="uk-subnav uk-subnav-pill" uk-switcher="connect: .switcher-container">
        <li><a href="#">Inscription</a></li>
        <li><a href="#">Connexion</a></li>
      </ul>
  </div>
</div>
  <h4>Container 1</h4>

  <ul class="uk-switcher switcher-container uk-margin">
    <li>
      <div class="uk-margin">
        <div class="uk-inline">
          <span class="uk-form-icon" uk-icon="icon: user"></span>
          <input v-model="insc.username" class="uk-input" placeholder="username" type="text">
        </div>
      </div>
      <div class="uk-margin">
        <div class="uk-inline">
          <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: mail"></span>
          <input v-model="insc.age" class="uk-input" placeholder="age" type="number">
        </div>
      </div>
      <div class="uk-margin">
        <div class="uk-inline">
          <span class="uk-form-icon" uk-icon="icon: lock"></span>
          <input v-model="insc.password" class="uk-input" placeholder="password" type="password">
        </div>
      </div>
      <button class="uk-button uk-button-default" v-on:click="test()">Button</button>
    </li>
    <li>
      <div class="uk-margin">
        <div class="uk-inline">
          <span class="uk-form-icon" uk-icon="icon: user"></span>
          <input v-model="login.username" class="uk-input" placeholder="username" type="text">
        </div>
      </div>
      <div class="uk-margin">
        <div class="uk-inline">
          <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
          <input v-model="login.password" class="uk-input" placeholder="password" type="password">
        </div>
      </div>
      <button class="uk-button uk-button-default" v-on:click="connect()">Button</button>
    </li>
  </ul>


</div>
</template>

<script>
// import materialize from 'materialize'
export default {
  data () {
    return {
      login: {
        username: '',
        password: ''
      },
      insc: {
        username: '',
        password: '',
        age: ''
      }
    }
  },
  methods: {
    test () {
      console.log(this.$store)
      this.$store.dispatch('connect/test')
    },
    connect () {
      this.$store.dispatch('connect/Login', this.login).then(response => {
        this.$router.push('/')
      }, error => {
        console.error(error)
      })
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}

body {
  margin: 0;
}
</style>
