<template>
  <v-app>
    <v-main>
      <v-app-bar color="primary">
        <v-spacer></v-spacer>
        <router-link v-for="item in items" :key="item.text" :to="item.router">
            <v-btn color="dark">{{item.text}}</v-btn>
        </router-link>
        <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
      </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import {useTheme} from 'vuetify'

export default {
  name: 'App',

  setup(){
    const theme = useTheme();

    return {
      theme,
      toggleTheme:() => theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'myCustomDarkTheme' 
    }
  },

  data: () => ({
    items: [
        {text: 'A propos', router: "/"},
        {text: 'Expérience', router: "/experience"},
        {text: 'Contact', router: "/contact"},
        ]
  }),


}
</script>
