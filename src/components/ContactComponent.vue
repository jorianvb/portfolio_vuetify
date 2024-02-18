<template>
  <v-container class="fill-height">
    <v-container>
      <v-row justify="center">
        <h1>N'hésitez pas à me contacter</h1>
      </v-row>
      <v-row align="center">
        <v-col cols="12" align="center">
          <v-btn variant="text" target="_blank" href="mailto:valerianbaillet@gmail.com">
            Par mail : valerianbaillet@gmail.com
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center">
          <v-col align="center">

          <p>Ou sur mes réseaux</p>
          </v-col>

      </v-row>
      <v-row align="center">
          <v-col align="center">
            <v-btn href="https://github.com/jorianvb" target="_blank" icon="mdi-github" class='me-3'/>
            <v-btn
              target="_blank"
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
