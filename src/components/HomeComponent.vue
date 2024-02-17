<template>
  <h1>Bienvenue !</h1>

  <v-container>
    <v-row justify="center">
      <p>
        Je m'appelle Valérian, j'ai 29 ans et je suis développeur spécialisé en
        ingénieurie des systèmes d'informations. Ce projet à pour but de me
        présenter à vous, et pour moi de découvrir le monde fabuleux de Vue3.
        <br />
        Sur ce site, vous allez découvrir mes compétences, mon parcours et mes
        futures projets. N'hésitez pas à me contacter !
      </p>
    </v-row>
  </v-container>

  <h2>Mes qualités</h2>
  <v-container>
    <v-row>
      <v-col align="center" v-for="quality in qualities" :key="quality.name" sm-4
        ><v-icon :icon="quality.icon" color="primary" /> <br />
        <p>{{ quality.name }}</p>
        <p>{{ quality.description }}</p>
      </v-col>
    </v-row>
  </v-container>

  
  <h2>Mes technologies</h2>
  <v-container>
  <template v-for="technology in technologies" :key="technology.name">
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-progress-circular
          v-bind="props"
          class="ma-7"
          size="120"
          width="10"
          color="primary"
          :model-value="technology.percent"
        >
          <div v-if="!isHovering">
            {{ technology.name }}
          </div>
          <div v-if="isHovering ">
            <span>{{ technology.percent }}%</span>
          </div>
        </v-progress-circular>
      </template>
    </v-hover>
  </template>
  </v-container>
</template>

<script>
export default {
  name: "HomeComponent",

  data: () => ({
    technologies: [
      {
        percent: 75,
        name: "java",
      },
      {
        percent: 70,
        name: "spring",
      },
      {
        percent: 40,
        name: "python",
      },
      {
        percent: 70,
        name: "typescript",
      },
      {
        percent: 70,
        name: "HTML",
      },
      {
        percent: 55,
        name: "CSS",
      },
      {
        percent: 70,
        name: "javascript",
      },
    ],
    qualities: [
      {
        name: "Curieux",
        description:
          "J'adore découvrir de nouvelles technologies et de nouvelles façons de \
        travailler. Les challenges et les recherches me passionnent.",
        icon: "mdi-help-circle-outline",
      },
      {
        name: "Travailleur",
        description:
          "Je n'hésite pas à travailler pour arriver à un résultat qui me \
        satisfait. Je tiens également mes engagements.",
        icon: "mdi-pencil-circle-outline",
      },
      {
        name: "Coopératif",
        description:
          "Le travail en équipe me permet d'évoluer et de continuer à apprendre de\
        nouvelles choses. On est toujours meilleurs en équipe !.",
        icon: "mdi-message-outline",
      },
    ],
  }),
};
</script>
