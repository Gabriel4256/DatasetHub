<template>
  <!-- Projects-->
  <div>
    <section class="bg-dark py-5" id="projects">
      <div class="container">
        <h2 class="py-3 text-center text-lg-left text-white">Projects</h2>
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
        <a href="DOWNLOAD.html"><h6 class="py-3 text-lg-right text-white">and more...</h6></a>
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
          chosen: 0
        }
    },
    methods: {
      // OnClick: function(event){
      //   // let target = '.filter-grid';
      //   event.preventDefault();
      //   this.chosen = event.target.id;
      //   // var $filterValue = event.target['data-filter'];
      //   // new isotope(document.querySelector(target),{filter: $filterValue});
      // }
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