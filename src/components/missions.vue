<template>
    <Layout>
        <section id="a-propos">
            <h1 class="title">Nos missions</h1>
            <div class="img-desc">
                <div class="">
                    <h3>Une mission est un pouvoir, une charge donnés à une personne morale ou personne physique d’accomplir
                        une chose définie. Une mission peut être aussi un devoir essentiel qu’une personne se propose sur
                        une fonction temporaire et bien déterminée.
                        La Startup Reflet HQD a comme missions d’inculquer à leurs apprentis des connaissances, des
                        compétences des valeurs et des consciences professionnelles. Et au même temps réaliser des
                        applications sur mesure adaptées aux besoins de ses clients. Pour réaliser à bien ses missions,
                        Reflet HQD a ses propres valeurs ci-après.
                    </h3>
                    <p class="m-5" style="font-size: 15px;">Reflet HQD est une startup de prestation de service, qui sont la
                        formation professionnelle et le développement informatique</p>
                    <router-Link  to="/about" class="btn-reservation">retour</router-Link >
                </div>
            </div>

        </section>
    </Layout>
</template>
  
  
<script>
import Layout from './layout/Layout.vue';
export default {
    name: 'mission',
    components: {
        Layout
    }
}

</script>
<style scoped></style>
  