<template>
    <div id="home" class="container mx-auto h-screen">
      <div class="flex flex-col items-center h-3/4 lg:flex-row">
          <div class="w-full justify-center items-center text-center mt-20 lg:w-1/2 lg:mt-0">
            <p data-aos="fade-right"
               data-aos-delay="300"
               data-aos-duration="500"
               class="mt-4 text-6xl font-semibold md:text-9xl">
              Michael
            </p>
            <p data-aos="fade-right"
               data-aos-delay="500"
               data-aos-duration="500"
               class="mt-4 text-6xl font-semibold md:text-9xl text-secondary">
              Moreno
            </p>
            <p data-aos="fade-right"
               data-aos-delay="700"
               data-aos-duration="500"
               class="mt-8 text-xl font-semibold md:text-4xl">
               <span class="text-secondary"> {{ $t("deveploper") }}</span> Ruby <span class="text-secondary">on</span> rails
            </p>
          </div>
          <div data-aos="fade-up"
               data-aos-delay="700"
               data-aos-duration="500"
               data-aos-easing="ease-in-sine"
               class="w-full lg:mt-20 lg:w-1/2"
          >
          <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_gaj2imtz.json"  
            background="transparent"  
            speed="1"  
            style="width: 100%; height: 100%; margin: auto"  
            loop  autoplay>
          </lottie-player>
          </div>
      </div>
        <div data-aos="fade-up"
             data-aos-delay="700"
             data-aos-duration="600"
             class="flex flex-col text-center justify-center h-1/4">
            <a 
                href="#about-me"
                v-smooth-scroll>
                <font-awesome-icon icon="fa-solid fa-angles-down" class="text-5xl md:text-6xl" />
            </a>
        </div>
    </div>
</template>
<script setup>
import { onMounted, } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>
