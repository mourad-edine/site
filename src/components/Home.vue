<template>
  <Layout>
    <section id="a-propos">
      <h1 class="title">Descriptions de notre société</h1>
      <div class="img-desc">
        <div class="">
          <h3>Nous somme une société qui innove dans le domaine du developpement personnelle et de la
            programmation informatique.</h3>
          <p>Reflet HQD est une startup de prestation de service, qui sont la formation
            professionnelle et le développement informatique</p>
          <div>
            <ul>
              <li>
                <router-Link to="/about" class="btn btn-danger text-white mt-3">voir plus</router-Link>
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
            <p class="c-stepper__desc">Réussite</p>
          </li>
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">2</h3>
            <p class="c-stepper__desc">Excélence</p>
          </li>
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">3</h3>
            <p class="c-stepper__desc">Pércéverance</p>
          </li>
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">4</h3>
            <p class="c-stepper__desc">Polyvalence</p>
          </li>

        </ol>
      </div>
    </section>


    <section id="popular-destination">
      <h1 class="title">Secteurs visé</h1>
      <div class="">
        <div class="m-5">
          <h4 class="text-red-700 font-semibold text-lg">Les Éducation et Formation </h4>
          <p class="mt-2"> Nous ciblont les individus et les organisations souhaitant améliorer leurs compétences linguistiques, leurs connaissances en informatique ou leur maîtrise du développement d'applications. Cela peut inclure des étudiants, des professionnels cherchant à se perfectionner, des entreprises désirant former leur personnel, ou même des particuliers souhaitant acquérir de nouvelles compétences</p>
        </div>
      </div>
      

      <div class="">
        <div class="m-5">
          <h4 class="text-red-700 font-semibold text-lg">Les Entreprises et Professionnels </h4>
          <p class="mt-2"> Nous pouvons proposer des formations adaptées aux besoins spécifiques des entreprises. Nous visons à renforcer les compétences des employés dans des domaines tels que la communication interculturelle, l'informatique, la cybersécurité ou le développement d'applications pour répondre aux besoins technologiques actuels.</p>
        </div>
      </div>

      <div class="">
        <div class="m-5">
          <h4 class="text-red-700 font-semibold text-lg">Développement Personnel </h4>
          <p class="mt-2">Nous nous adressons également à des individus cherchant à améliorer leurs compétences personnelles et professionnelles. Les cours de langues et les formations en informatique et programmation peuvent aider à renforcer la confiance, la créativité et les opportunités professionnelles.</p>
        </div>
      </div>

      <div class="">
        <div class="m-5">
          <h4 class="text-red-700 font-semibold text-lg">Technologie et Innovation</h4>
          <p class="mt-2">Notre société offre des cours d'informatique et de programmation qui visent également les secteurs technologiques et d'innovation.</p>
        </div>
      </div>

    </section>
    <!-- section secteur -->
    <section id="popular-destination">
      <h1 class="title">Diapositive des secteurs</h1>
      <div class="content">
        <!-- box -->
        <div class="box">
          <img src="../images/mia.jpg" alt="">
          <div class="content">
            <div>
              <h4>Les établissement scolaire</h4>
              <p class="mt-2">Les domaines académiques évoluent rapidement. Les universitaires doivent rester
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
              <h4>Les sociétés qui souhaitent s'initier à l'informatique</h4>
              <p class="mt-2">Nous prenons en charges les société qui souhaitent informatiser leur travails.
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
              <h4>Les commerces</h4>
              <p class="mt-2">Nous nous interressons aussi aux commerces</p>
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
