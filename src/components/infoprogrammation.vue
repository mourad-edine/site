<template>
    <Layout>
        <section id="a-propos">
            <h1 class="title">Formations en Programmation Informatique</h1>
            <div class="img-desc">
                <div class="">
                    <h3>La programmation informatique est bien plus qu'une simple série d'instructions pour les ordinateurs
                        ; c'est l'art de donner vie à des idées, de résoudre des problèmes complexes et de façonner l'avenir
                        technologique.Notre passion est de vous guider à travers le labyrinthe du code, de transformer le
                        complexe en accessible, l'abstrait en concret. Que vous soyez un novice curieux ou un développeur
                        chevronné cherchant à approfondir vos connaissances, nos formations sur la programmation offrent un
                        parcours adapté à chaque niveau.</h3>
                    <h2 class="text-danger">voici les cous que nous vous proposons</h2>
                    <ol class="mt-4" style="margin-left: 20px;">
                        <li>formation en Programmation d'une application avec Java</li>
                        <li>formation sur la conception de site web</li>
                        <li>formation sur la conception de base de donné</li>
                        <li>formation en programmation de page dynamique avec php</li>

                    </ol>

                </div>
            </div>

        </section>


    </Layout>
</template>
  
  
<script>
import Layout from './layout/Layout.vue';
export default {
    name: 'Programmation',
    components: {
        Layout
    }
}

</script>
<style scoped></style>
  