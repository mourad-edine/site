<template>
  <Layout>
    <section id="a-propos">
      <h1 class="title">Descriptions de notre société</h1>
      <div class="img-desc">
        <div class="right">
          <h3>Nous somme une société qui innove dans le domaine du developpement personnelle et de la
            programmation informatique.</h3>
          <p style="font-size: 15px;">Reflet HQD est une startup de prestation de service, qui sont la formation
            professionnelle et le développement informatique</p>
          <div>
            <ul>
              <li>
                <a href="#" class="btn btn-danger text-white" style="font-size: 20px;">voir plus</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </section>
    <section id="">
      <h1 class="title" style="margin-left: 170px;">Notre devise</h1>
      <div class="wrapper option-1 option-1-1">
        <ol class="c-stepper">
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">1</h3>
            <p class="c-stepper__desc">reussite</p>
          </li>
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">2</h3>
            <p class="c-stepper__desc">excelence</p>
          </li>
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">3</h3>
            <p class="c-stepper__desc">perceverance</p>
          </li>
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">4</h3>
            <p class="c-stepper__desc">polyvalence</p>
          </li>

        </ol>
      </div>
    </section>
    <!-- section secteur -->
    <section id="popular-destination">
      <h1 class="title">secteur visé</h1>
      <div class="content">
        <!-- box -->
        <div class="box">
          <img src="../images/mia.jpg" alt="">
          <div class="content">
            <div>
              <h4>les etablissement scolaire</h4>
              <p style="font-size: 15px;">Les domaines académiques évoluent rapidement. Les universitaires doivent rester
                au fait des dernières avancées, des nouvelles méthodologies de recherche et des découvertes pour enrichir
                leurs enseignements et leurs travaux de recherche.</p>
            </div>
          </div>
        </div>
        <!-- box -->
        <!-- box -->
        <div class="box">
          <img src="../images/logo.jpg" alt="">
          <div class="content">
            <div>
              <h4>les sociétés qui souhaitent s'initier à l'informatique</h4>
              <p style="font-size: 15px;">nous prenons en charges les société qui souhaitent informatiser leur travails.
              </p>

            </div>
          </div>
        </div>
        <!-- box -->
        <!-- box -->
        <div class="box">
          <img src="../images/ingo.jpg" alt="">
          <div class="content">
            <div>
              <h4>les commerces</h4>
              <p style="font-size: 15px;">nous nous interressons aussi aux commerces</p>
            </div>
          </div>
        </div>
        <!-- box -->
        <!-- box -->

        <!-- box -->
      </div>
    </section>
  </Layout>
</template>


<script>
import Layout from './layout/Layout.vue';
export default {
  name: 'Home',
  components: {
    Layout
  }
}

</script>
<style scoped></style>
