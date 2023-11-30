<template>
    <Layout>
        <section id="a-propos">
            <h1 class="title">formations en langues étrangères</h1>
            <div class="img-desc">
                <div class="">
                    <h3>Nous croyons que la maîtrise d'une langue étrangère va bien au-delà des simples mots. C'est un
                        voyage captivant, une aventure qui vous connecte à des idées, des traditions et des perspectives
                        différentes. Notre mission est de vous accompagner dans cette exploration linguistique, de vous
                        offrir les outils et les ressources pour faire de chaque apprentissage une expérience enrichissante
                        et gratifiante.

                        Que vous aspiriez à perfectionner vos compétences professionnelles, à étudier à l'étranger, à
                        voyager sans barrière linguistique ou tout simplement à élargir votre horizon culturel, notre gamme
                        de formations sur les langues étrangères est conçue pour répondre à vos besoins.</h3>
                    <h2 class="text-danger">voici les cous que nous vous proposons</h2>
                    <ol class="" style="font-size: 20px; margin-left: 20px;">
                        <li>cours en langue française,</li>
                        <li>cours en Anglais
                        </li>
                    </ol>
                    <p class="m-5" style="font-size: 15px;">Reflet HQD est une startup de prestation de service, qui sont la
                        formation professionnelle et le développement informatique</p>
                    <router-Link  to="/service" class="rounded border-1 border-red-700 text-red-700 bg-white p-1 mt-5 hover:text-red-800">retour</router-Link >
                </div>
            </div>

        </section>

    </Layout>
</template>
  
  
<script>
import Layout from './layout/Layout.vue';
export default {
    name: 'Langue',
    components: {
        Layout
    }
}

</script>
<style scoped></style>
  