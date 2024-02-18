<template>
  <v-container class="fill-height">
    <v-container>
      <v-row align="center">
        <v-col cols="12" align="center">
          valerianbaillet@gmail.com <br/>
          <v-btn href="https://github.com/jorianvb" icon="mdi-github" />
          <v-btn
            href="https://www.linkedin.com/in/val%C3%A9rian-baillet-047861108/"
            icon="mdi-linkedin"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "ContactComponent",
  setup(){
    document.title = "Mes contacts"
    return {}
  },
  data: () => ({}),
};
</script>
