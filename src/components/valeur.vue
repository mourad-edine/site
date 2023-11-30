<template>
    <Layout>
        <section id="a-propos">
            <h1 class="title">Nos valeurs</h1>
            <div class="img-desc">
                <div class="">
                    <h3>Les valeurs peuvent être définies comme des grands principes moraux servant de repères aux personnes
                        physiques et personnes morales dans la conduite de leur vie sociale et professionnelle. Cette
                        startup est bâtie sur les valeurs suivantes : </h3>
                    <ol class="mt-4" style="">
                        <li>réussite,</li>
                        <li>persévérance</li>
                        <li>excellence</li>
                        <li>polyvalence</li>
                    </ol>
                    <p class="m-5">Reflet HQD est une startup de prestation de service, qui sont la
                        formation professionnelle et le développement informatique</p>
                    <router-Link to="/about" class="rounded border-1 border-red-700 text-red-700 bg-white p-1 mt-5 hover:text-red-800">retour</router-Link>
                </div>
            </div>

        </section>

    </Layout>
</template>
  
<script>
import Layout from './layout/Layout.vue';

export default {
    name: 'valeur',
    components: { Layout }
}

</script>
  
<style></style>