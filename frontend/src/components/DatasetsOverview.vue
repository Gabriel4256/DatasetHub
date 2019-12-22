<template>
  <!-- Projects-->
  <div>
    <section class="py-5" 
      v-bind:class="{'bg-dark': mode, 'bg-secondary': !mode}" 
      id="projects"
    >
      <div class="container" id="projects">
        <span v-html="headerHtml"></span>
        <ul class="nav nav-tabs nav-tabs-style-4 bg-white nav-justified mb-30">
          <li class="nav-item"><a id="0" class="nav-link py-3"  data-filter="*"><img class="d-block mx-auto mb-2" src="img/homepages/architect-agency/icon-all.png" width="40" alt="All">All</a></li>
          <li class="nav-item"><a id="1" class="nav-link py-3"  data-filter=".residential"><img class="d-block mx-auto mb-2" src="img/homepages/architect-agency/icon-residential.png" width="40" alt="Residential">Residential</a></li>
          <li class="nav-item"><a id="2" class="nav-link py-3"  data-filter=".commercial"><img class="d-block mx-auto mb-2" src="img/homepages/architect-agency/icon-commercial.png" width="40" alt="Commercial">Commercial</a></li>
          <li class="nav-item"><a id="3" class="nav-link py-3"  data-filter=".industrial"><img class="d-block mx-auto mb-2" src="img/homepages/architect-agency/icon-industrial.png" width="40" alt="Industrial">Industrial</a></li>
          <li class="nav-item"><a id="4" class="nav-link py-3"  data-filter=".public"><img class="d-block mx-auto mb-2" src="img/homepages/architect-agency/icon-public.png" width="40" alt="Public">Public</a></li>
        </ul>
      </div>
      <div class="container-fluid">
        <div class="isotope-grid filter-grid cols-4">
          <div class="gutter-sizer"></div>
          <div class="grid-sizer"></div>
          <!-- Item--><a class="grid-item commercial img-thumbnail p-1 mb-30 text-decoration-none" href="#"><img src="img/homepages/architect-agency/projects/01.jpg" alt="Project">
            <h3 class="text-lg p-3 mb-0 text-center">Project name</h3></a>
          <!-- Item--><a class="grid-item residential img-thumbnail p-1 mb-30 text-decoration-none" href="#"><img src="img/homepages/architect-agency/projects/02.jpg" alt="Project">
            <h3 class="text-lg p-3 mb-0 text-center">Project name</h3></a>
          <!-- Item--><a class="grid-item industrial img-thumbnail p-1 mb-30 text-decoration-none" href="#"><img src="img/homepages/architect-agency/projects/03.jpg" alt="Project">
            <h3 class="text-lg p-3 mb-0 text-center">Project name</h3></a>
          <!-- Item--><a class="grid-item residential img-thumbnail p-1 mb-30 text-decoration-none" href="#"><img src="img/homepages/architect-agency/projects/04.jpg" alt="Project">
            <h3 class="text-lg p-3 mb-0 text-center">Project name</h3></a>
          <!-- Item--><a class="grid-item public img-thumbnail p-1 mb-30 text-decoration-none" href="#"><img src="img/homepages/architect-agency/projects/05.jpg" alt="Project">
            <h3 class="text-lg p-3 mb-0 text-center">Project name</h3></a>
          <!-- Item--><a class="grid-item residential img-thumbnail p-1 mb-30 text-decoration-none" href="#"><img src="img/homepages/architect-agency/projects/06.jpg" alt="Project">
            <h3 class="text-lg p-3 mb-0 text-center">Project name</h3></a>
          <!-- Item--><a class="grid-item industrial img-thumbnail p-1 mb-30 text-decoration-none" href="#"><img src="img/homepages/architect-agency/projects/07.jpg" alt="Project">
            <h3 class="text-lg p-3 mb-0 text-center">Project name</h3></a>
          <!-- Item--><a class="grid-item commercial img-thumbnail p-1 mb-30 text-decoration-none" href="#"><img src="img/homepages/architect-agency/projects/08.jpg" alt="Project">
            <h3 class="text-lg p-3 mb-0 text-center">Project name</h3></a>
          <!-- Item--><a class="grid-item residential img-thumbnail p-1 mb-30 text-decoration-none" href="#"><img src="img/homepages/architect-agency/projects/09.jpg" alt="Project">
            <h3 class="text-lg p-3 mb-0 text-center">Project name</h3></a>
          <!-- Item--><a class="grid-item public img-thumbnail p-1 mb-30 text-decoration-none" href="#"><img src="img/homepages/architect-agency/projects/10.jpg" alt="Project">
            <h3 class="text-lg p-3 mb-0 text-center">Project name</h3></a>
          <!-- Item--><a class="grid-item industrial img-thumbnail p-1 mb-30 text-decoration-none" href="#"><img src="img/homepages/architect-agency/projects/11.jpg" alt="Project">
            <h3 class="text-lg p-3 mb-0 text-center">Project name</h3></a>
          <!-- Item--><a class="grid-item commercial img-thumbnail p-1 mb-30 text-decoration-none" href="#"><img src="img/homepages/architect-agency/projects/12.jpg" alt="Project">
            <h3 class="text-lg p-3 mb-0 text-center">Project name</h3></a>
        </div>
        <router-link v-if="mode" :to= "{path: '/download'}" tag='a' ><h6 class="py-3 text-lg-right text-white">and more...</h6></router-link>
        <!-- <span v-html='tailHtml'></span> -->
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery';
import imagesLoaded from 'imagesloaded';
import isotope from 'isotope-layout';
imagesLoaded.makeJQueryPlugin( $ );

export default {
    name: "DatasetsOverview",
    data: function(){
        return {
          chosen: 0,
          headerHtml: this.mode?'<h2 class="py-3 text-center text-lg-left text-white">Projects</h2>' :`        <h2 class="py-3 text-center text-lg-left"></h2>
          <h2 class="py-3 text-center text-lg-left"></h2><h2 class="py-3 text-center text-lg-left"></h2>`,
          tailHtml: this.mode?`<router-link :to= "{path: '/download'}" tag="a"><h6 class="py-3 text-lg-right text-white">and more...</h6></router-link>`:''
        }
    },
    methods: {

    },
    props: {
      //mode value should be changed depending on wheter it is used in home page or download page
      //true: Home page, false: download page
      //This should be refactored later!
      mode: Boolean
    },
    mounted: function(){
      let selector = '.isotope-grid';
      let transitionDuration = '0.7s';
      let iso = null
      if($(selector).length) {
        $(selector).imagesLoaded(function() {
          iso = new isotope(document.querySelector(selector), {
            itemSelector: '.grid-item',
            transitionDuration: transitionDuration,
            masonry: {
              columnWidth: '.grid-sizer',
              gutter: '.gutter-sizer'
            }
          });
        });
      }

      let target = '.filter-grid';
      let toggler = '.nav-tabs';

      if($(target).length) {
        $(toggler).on( 'click', 'a', function(e) {
          e.preventDefault();
          $(toggler + ' a').removeClass('active');
          $(this).addClass('active');
          let $filterValue = $(this).attr('data-filter');
          iso.arrange({ filter: $filterValue });
        });
      }
    }
}
</script>

<style>
.nav-link{
  cursor: pointer;
}
</style>