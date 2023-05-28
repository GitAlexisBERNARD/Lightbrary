<script lang="ts">
import HomeCard from '@/components/HomeCard.vue';
import Search from '@/components/icons/search.vue'
import CarrouselSlide from '@/components/CarrouselSlide.vue';
import Carrousel from '@/components/Carrousel.vue';

export default {
  data() {
    return {
      slides: [HomeCard],
      visiblSlide:0,
    };
  },
  computed: {
    slidesLen() {
        return this.slides.length;
    }
  },
  methods: {
    next () {
        if(this.visiblSlide >= this.slidesLen - 1) {
            this.visiblSlide = 0;
        }else {
            this.visiblSlide++;
        }
    },
    prev() {
        if(this.visiblSlide <= 0) {
            this.visiblSlide >= this.slidesLen - 1;
        }else {
            this.visiblSlide--;
        }
    }
  },
  components: {
    Carrousel,
    CarrouselSlide,
    HomeCard
}
};
</script>

<template>
  <main class="bg-Primary1(Black) pt-10">
    <div class="w-[333px] h-14 relative flex items-center mx-auto px-8 rounded-[20px] bg-Primary1(Black) border-[1px] border-Secondary1(Gold) lg:w-[666px]">
      <Search class="mr-5"/>
      <p class="relative font-text text-Primary2(White)">
        Recherche un film, une série...
      </p>
    </div>

    <div>
      <Carrousel
        @next="next"
        @prev="prev"
      >
        <CarrouselSlide v-for="(slide, index) in slides" 
                        :key="slide" 
                        :index="index"
                        :visibleSlide="visiblSlide"
        >
          <HomeCard /> 
        </CarrouselSlide>
      </Carrousel>
    </div>

    <HomeCard/>
  </main>
</template>
