<template>
  <v-timeline>
    <v-timeline-item 
      v-for="(ex, index) in experience" 
      :key="ex.summary"
      size="x-large">
      <template v-slot:icon>
        <v-avatar :image="ex.image"></v-avatar>
      </template>
      <template v-slot:opposite>
        {{ex.year}}
      </template>
      <v-card
      class="bg-1"
      :title="ex.title">
      <v-card-subtitle><v-icon icon="mdi-map-marker"/> {{ex.location}}</v-card-subtitle>
      <v-card-text>
        {{ex.description}} <v-icon v-if="ex.moreDescription !=null" icon="mdi-plus-circle" @click="extendsDescription(index)"/>

        <v-divider class="mx-4 mb-4 mt-4"></v-divider>

        <v-chip v-for="tech in ex.technos" :key="tech" color="secondary">
          {{tech}}
        </v-chip>
      </v-card-text>
    </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>

export default {
  name: 'ExperienceComponent',

  data : () => ({
    experience : [
      {
        year : "octobre 2021 - aujourd'hui",
        title : "Leader Technique développement",
        summary : "Portage de fonctionnalité sur une architechture microservice",
        description : "Mise en place du projet de transformation de l'outil de souscription",
        location : "G2S - Ecully",
        image : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBUQEhIWFRIWFRcVGBUWFRgWFhUWFxYXFxcVFhUYHSggGB0lHRgVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0iICUrMistLS4rLS0tNy0tNS0tLS0tLS0tLS01Ky0tLS0tKysuLS0tLSstLS4tLy0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAgj/xABBEAACAQMABgYGCAQGAwEAAAAAAQIDBBEFBhIhMUEHEyJRYXFCUoGRobEUIzJTYnLB0RVDsvAkMzSCkuFjosIW/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAKREBAAICAQQCAQMFAQAAAAAAAAECAxEhBBIxQRNRMhQzYSJCgbHRBf/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGTR0jpe3tlmtWhT/NJJ+xcWETMR5bpkgbXXHR1WWzG5hnxzH4ySJyE1JZTTT5regRaJ8PoABIAAAAAAAAAAAAAAAAAYyAZqaR0nQto7dapGEfF8fJcWV/XXXCFhHq4JTryW6PKC9aX6I5Hc3NxeVszc6tWTwlvb8ox5LyO602yZ+qik9teZdMv+k+1g8UqVSp47oL2ZefgaK6VFztXj86z8iJ0X0bXdVKVWcKK7mtuXuWEveTK6KqeP9VPP5I4+Z1qkKe7qrcw3bHpOtJvFSnUp+OFJLzcXn4Ft0bpShcx26NSM14Ph5rkcz0j0Y3ME3SqwqfhacJe/LTKn/itH1vTo1o+zK+Ul8B2VnwfqcuP9yH6EMlR1J1xjfLqqiULiK4cpr1o/qi3FcxrhupeLxuoDAIdqT0ha4OySt6P+fNZcuKpx5PHOT5eRy2x0bd39RuEZ1p57Um84z3zluR9ax3crm9rTb3yrOKzySlsL3YO8aF0ZTtaEKNNJRiuXN85PvbJ8MEROe87niHGrjUDSUI7ToqW7hGacvcY1U1rr6Oq7E3KVHOJ0pZzDvcU/stdx3PBXNL6lWd1cq5qRecYlFboza4OXkNu56aa845T9rcQqwjUg9qEkpRa5prKM168acdqUkkubI36ZCmlQtqak4rCjHdTgvF8F5HpQ0XtSVSvLrJ8l6Efyx/UonJudU5/02Q8/pFa43Ul1dP7yS7UvyR5ebH0e4ob6cuthzhN9r/bL9GSyQwR8O+ZmdjSs9JU6j2d8ZrjCSxJfubuTWvLGnWWJx38nwkvJ8jT/AMRb/wDmp+6ol/8ARPdan5cx9iWBq2d/TrLsveuMXukvNG0WxaJjcAACQAAAAACK1k0vGytp15b2t0V603wX99xKnLel7SLlVpWye6K6xrxeYx+GfedVjcqc+T46TKkxVe9uOc61Wfvb+SXwSO0ap6r0bCnuW1VaW3Ua3t90e5FU6I9EJ9ZdyW/PVw8Ocn8l7DpZ1kt6Z+jwxrvt5lgGQVtz5IzT+g6N9SdOrH8sl9qD70yVNe/uVRpyqPks+b5IibRWNyiaxMalzDRmqCsqyq3NZqUJ5pwpPtTw90pP0U+7zLPX1pqt9mMYrxy2REnUr1PWnN/2vIs9jqzTik6mZS7s4S/c8ieo6nqrT8fEK8eOKRqqNpaz10+0oyXk0TmjNOU6/Z+zP1Xz8nzPO61boSXZTg+9Pd7mVW+s529TZlxW9Nc13o5tk6npp3fmFnKj686Jla3tWLTUJydSD5OMnl4fgy7ao9ItJ040bt7E4pRVT0ZJcHL1WT0LOhpW26q4jmUN20t0ovlKL5FB090cXdvmVD6+n4YVReceD9h7GPJGSkWj2xWpfFabU8Ov2t1TqxU6c4zi+cWmveiMiql1KSlLYpRk47MftSx3y5LyOGWl5c2dT6uc6M0963x98Xx9xfdTOkCCbpXeIucm+tSxHL9Zej58DnJjm0xHr2sx9VW06tw6Vb28KcVGCSXcj1k8bz5pzUkmmmnvTW9Nd6Z53tDrKcqecbSaz5nUx214hqa9fS1GKypqTe5Ri9qTfckhaaUhUew8wn6k9z9neamgtCfR3KUmpSe5YXBEjd2VOqsTjnufNeKfIopOaY7p1H8DZMN4IKrdVLWShtddF7lD+avdxXmZu7atWpylVexFRbVOL8N23Ln5Cc/ExEcj40g4XEsUYbVRfzYvZjD/AHL7XkTVpCUYJTltSS3yxjJ4aHS6inhY7K4eRunWHH/fPmQABeAAAAAAcR6SKjekqqfoqCXlsRf6nbjjXSlaOF+58qkIyz4x7L+SLMflj679tfejemo6OpY57TfntMtBTeiu8VSx6vnTnKLXg+0vmXI5t5X4J3jjX0AA5WtW/wBIUbeO3WnGEW9nMnhZed3wZX9N6ds69PYjd0lvTeZcl5GOkXRNa8tY06MdqaqxljKW5Rkm9/mjnX/4TSP3C/5xJnFTJWa2nyyZs2SttVrtd9C3tlQqdZO7oy3YWJPi+e8slrrFZ1ZqnTrwlOW5RT3t8TjOk9Vby1purWpKME0m9qL47luRv9Gln1mkacsbqcZTfu2V8yMXTY8VNU8Kq9Vk74rNdO1kBrhSTpRnzUkvY85RPlR1r0gpyVKL3ReX+bu9hj6+9a4Z37b5NTpPrZrvivgy3YK1qdbNKdV88RXs4lmI/wDPrMYI2QjtK6EtruOzWpRn4tYkvKS3o5HrPqZO362rQzOjTnsyi984LCefxLfxO2kTo6ClUuYtZTmsrvTgsmm1pi1VeTDW8cua9HOt8repG1rSzQk8Qb/lyfBZ9V/A6/k/OusVire7r0FwhUko+EXvj7k0dw1Ov3c2NGrJ5k4JSfe47m/gWyo6W880n0lat1Tim5SSxx38CJlpKpXmqVHMItN9ZJb2lxcYv9TXstX5RrupUcZQTb73JvhlPuJB/wCsj4UX/UjDN8l9bjt502Niy0dTpb0syfGct8n5s9rtfVy/K/kex8V12X5P5GqaxWsxA1NCv/D0/wAqN1SIrRkZSs4qLxJ02k+578Glqrb1Iuo5S7OdnGc9pcWUVyzE0rrzAsYMGTUAAAAAAUrpR0M7i2VeCzOi8vvcH9r3bn7GXU+JxTTTWU92O8mJ1O3GSkXrNZcT1A1gVjc9t4o1Uoz7ov0Z+zLXtO2RllZzuOM696pysqjq003bzbfDPVt+i/DuZsan69TtEqNdOpQW5P06fgvWXgW2r3cwwYMs4Z+O7sKBG6L05a3Uc0a0JeGUpLwcXvRI5KXoxaJ8BhmnpLS9vbR2q1WEF4yWfYuLOba19IUqydG1zCDypVHulJd0V6K8eJ1FZlVlz0xxzLz6TtYlcVFa03mnTeZtcJT7vJfqTvRRoh0qErmSw6rxH8keftefgUrUzVed/VWU1Qi1ty7/AMEXzb+B1vS2kIWlNQgltYxCPKKW7L8BnyVxU59MvT1tkv8ALb/Dz1g0x1K6uD+sa4+qu/zK3ovR87meFlLjKX98z5s7Wpc1cLe28yk+XiyGvteZW13GnQi1b0ZOM01iVV8JSeeGOR4mOl+syd9vxhrvkrXmzq1tQjTioRWElhHqaujdIUrmlGrSkpQkspr5PufgbOT2IjUahZE7ZIvRv+fcL8UX/wCqJMpWv2l4WMXOnUauaiwoJpprhtyjywuZXeszMTHqUXtFY3LmOt9yqt/czXB1ZJf7ez+jOudG1Nx0bRzz2n7HJnEKVKVSagt8pNJebfFn6K0PaRoUKdGO+MIRjlc8Ley6Z9MXS7tebNtlZ0Rc153bc4vhKL3Y2Ut6RZyN0ppinbyUZJtvfu5LvMvURHF7W1ES3pIjrzSaT6umusqequC/M+R4x666WculRe9Y+3Nefoo9p1qFpFQit74QjvnJ+XH2sWyTaOOI+/8Ag9tF27pUYwk1mK39xraBkmquOHXT+UT5+i1rjfWexT+7i97/ADy/RElQoxhFRikkuSJpEzMTEcQPUAGgAAAAAAwZAHlWoxnFwklKLWGmsprxOcax9Gu91LOS7+qm/wCiX6M6ZgxgmLTCrJhrkjVn56vND3VvL6yjUg1z2Xj2SjuPmOkrnGyq1XHdtSP0PKKfFHn9Hh6sfciz5P4Zf0OvFnALXQ93cS7FGrNvm0/6pF00B0Zzk1O7liP3cHlvwlPl7Dp6ika1/eQoQc5exc2+5HF82o3PDunRUrO7ctS6r0bGiowiopLEILdl/wB8yoxjVuqvrTk/Yl+iRm4rVbqrnjJ7oxXBLu/7LhobRcbeHfN/al+i8Dw5m3W5PqkNWnrovR8KEFFceLlzbKR0iakyrt3dtHNX+ZTXp49KP4vmdDGD2KVikajwi+OL11L89aG09dWE26M3F57UJLMW160XwfuZdbPpXlj622Tl3wnhe5ouOn9ULO+7VSnip95B7MvbjdL2lOu+iiWfqrlY7pw3+9fsdsfxZsf4zw1tK9KVecdmhRjTb9KT22vJLcUa5uKtxUc5ylUqTfF73J8kv2R0G16KJZ+tuVjuhDf72XHV/U6zsu1Tp7VT7yfal7OUfYEfDlyT/XKudHmpTor6Tcx+sksQpvfsJ8XJes/gW6WjqlHtW8sLnTlvg/J8YkrgyV3pFm2lIpGoRtvpWOdirF0qndLg/wAsuDM6UsaFTE6vCPPON3czbubaFRbM4qS7maNPQtNNbUpTivswlLMY/v7Sq1bzHbMRZ2843NSstmhHYprd1kly/BHn5m3Y6OhS3rMpvjOW+T9puKKRk7ri1O7cyMGQC0AAAAAAAAAAAAAAAMDxuriNODnJ4SKLpXSMrie090VujHu/7JfTlvdXE8Km1TT3LK3/AInvIz+BXP3fxX7ni9dfLlnsrWdIlM6Chb0I7UqsHUfF5W5dyJf+KUPvYf8AJFP/AIFc/d/FfuP4Fc/d/FfuMfUZ8dYrXHwcrh/FKH3sPej2ndU4xUnOKi+DbST8ikvQVz938V+5M3FhWUacoxy1QdPGY5hN4e0lJYaeMM29LnyZJmL10iZlYkwV12FxjaltPtQ2oRnsrYVNJqC4R7eWfPUXkI4k28RUnJT4YpzTWOLednzN2kd0/SyDJU1aXkqPZUltKLW1UbkpbG+XFbnLHuzg2a2jLmTlLbntPrGsVGlnEer3eaY0jvn6WPJ806sZcGn5MiNHULhXM5z3U3FrG1lOW1HZeM921yXE9qlrUT7O5OUn2eO/GHxXiV3tNfEbdxO0lKSXHmZI76NOT7Wft5b2uK34wuXIxG3q8dp5wl9rdwecrzwcd8/SUk5JYWePDxMkT9GqvDWVjPGWWnsSTefNo8rhVItLtKLy8Zbaxs8HzfHcJyzHoTSknwMkYqFXaTy9nw5dpt5380138DZsYSUcS455ve13vxOq3mZ8DaABYAAAAAAAAAAAAADGDIAAAADGDIAxgYMgDGBgyAMYGDIAxgYMgDGBgyAMYMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==",
        moreDescription : "Conception et mise en place de la transformation de l'outil de souscription de Groupama.\
        Etude technique et fonctionnelle de l'existant. Mise en place d'un processus de portage de la solution d'une stack IBM (Websphere), sous une solution openshift (Tomcat, conteneur)\
        Gestion de la dette technique et mise en place d'aide et d'accompagnement pour les autres équipes de Groupama",
        isMoreDescription : false,
        technos : ["java", "Websphere", "Openshift", "javascript"]
      }, 
      {
        year : "octobre 2017 - octobre 2021",
        title : "Ingénieur conception développement",
        summary : "Développement de plusieurs projets pour le compte de KleeGroup",
        description : "Développement de plusieurs projets pour le compte de KleeGroup",
        location : "Klee Group - Lyon",
        image : "https://pbs.twimg.com/profile_images/923517225281245187/y6HL6w6L_400x400.jpg",
        moreDescription : "Conception et développement sur le projet FSE et FSE+. Mise en place d'un outil de chatbot\
        Mise en place de la solution Atlassion (JIRA/Confluence/Jira service desk) pour le compte du ministère du Travail",
        isMoreDescription : false,
        technos : ["java", "angular", "groovy", "Atlassian", "Vue"]
      },
      {
        year : "février 2017 - aout 2017",
        title : "Projet de fin d'étude",
        summary : "Maintenance évolutive pour le compte de Groupama et création d'un site pour le paiement par carte bancaire",
        description : "Maintenance évolutive pour le compte de Groupama et création d'un site pour le paiement par carte bancaire",
        location : "SQLI - Lyon",
        image : "https://upload.wikimedia.org/wikipedia/commons/5/58/Logo_sqli_group.png",
        moreDescription : "Ecriture de spécification sur un sujet de suivi des actions clients en relation avec la MOA Groupama et GAN. Le projet est arrêté car les MOAs n'arrivaient pas à se mettre d'accord sur le fonctionnement. \
        Maintenance évolutive sur le projet de tarification et de souscription des commerciaux Groupama \
        Création d'un projet de paiement par carte bancaire pour différent compte. Mise en place d'un front récupérant les données client pour le paiement par carte bancaire des échéanciers",
        isMoreDescription : false,
        technos : ["java", "angular"]
      },
      {
        year : "mai 2016 - aout 2016",
        title : "Stage assistant ingénieur",
        summary : "Mise en place d'une solution d'intégration continue sur le poste de développeur",
        description : "Mise en place d'une solution d'intégration continue sur le poste de développeur",
        location : "Thales Avionic - Valence",
        image : "https://media.licdn.com/dms/image/C4D0BAQEmnUAXTuLkJQ/company-logo_200_200/0/1631366051478/thales_logo?e=1716422400&v=beta&t=ctjCv59yausCR8YSuFh_OKDvvXBxOr2LO2n7wsc1qBw",
        moreDescription : "Normalisation et développement de tests pour l'intégration continue au poste. \n \
        Le projet avait pour but de déployer des tests directement sur les postes de développeur pour gagner du temps et de la puissance de calcul par rapport aux serveurs.\
        Ma partie a été de normaliser l'ensemble des codes de tests puis de créer automatiquement des exécutables windows pour rendre les tests exécutables depuis les postes de développeur.",
        isMoreDescription : false,
        technos : ["python 2", "windows"]
      },
      {
        year : "2014 - 2017",
        title : "Diplôme ingénieur",
        summary : "Spécialité ingéniérie des systèmes d'informations",
        description : "Spécialité ingéniérie des systèmes d'informations",
        location : "ENSIMAG - Grenoble",
        image : "https://pbs.twimg.com/profile_images/1410557441662652419/rzijJgl4_400x400.png",
        moreDescription : null,
        isMoreDescription : false,
        technos : ["java", "angular"]
      },
      ] 
  }),
  methods :{
    //Need to be use for more description
    extendsDescription(index) {
      let ex = this.experience[index]
      console.log(ex)
      ex.isMoreDescription = !ex.isMoreDescription;
      ex.description = ex.isMoreDescription ? ex.moreDescription : ex.summary
    }
  },
}
</script>
