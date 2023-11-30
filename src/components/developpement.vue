<template>
    <Layout>
        <section id="a-propos">
        <h1 class="title">Developpement personnelle</h1>
        <div class="img-desc">
            <div class="">
                <h3>Le développement ou épanouissement personnel touche à l’ensemble des aspects de nos vies : équilibre de vie, dépassement de soi, confiance en soi, estime de soi, etc. Il peut être parfois difficile de s’y retrouver ou de se lancer tant le sujet est vaste. Chez <span class="text-danger">RefletHQD</span>, le développement personnel et le bien-être sont au cœur de notre métier ! C’est pourquoi il nous parait important de partager nos astuces et notre vision pour vous guider au mieux sur votre propre chemin de développement personnel.nous vous invitons donc à suivre nos cours.</h3>
                <ol class="mt-4">
                    <li>réussite,</li>
                    <li>persévérance</li>
                    <li>excellence</li>
                    <li>polyvalence</li>
                </ol>
                <p class="m-5">Reflet HQD est une startup de prestation de service, qui sont la formation professionnelle et le développement informatique</p>
                <router-Link  to="/service" class="rounded border-1 border-red-700 text-red-700 bg-white p-1 mt-5 hover:text-red-800">retour</router-Link >
            </div>
        </div>

    </section>

    </Layout>
</template>
  
  
<script>
import Layout from './layout/Layout.vue';
export default {
    name: 'development',
    components: {
        Layout
    }
}

</script>
<style scoped></style>
  