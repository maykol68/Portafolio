<template>
    <div id="home" class="pt-24 h-screen overflow-hidden">
        <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="700" class="md:mt-24">
            <p class="text-white text-center text-sm uppercase tracking-widest font-semibold">
                <span class="text-secondary">Andrés</span> Delgado
            </p>
            <p class="mt-4 text-white text-6xl font-semibold text-center">
                Web <span class="text-secondary">developer</span>
            </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="700" data-aos-easing="ease-in-sine" class="mt-12">
            <div class="w-max mx-auto">
                <lottie-player 
                    src="https://assets6.lottiefiles.com/private_files/lf30_WdTEui.json"  
                    background="transparent"  
                    speed="1"  
                    style="width: 90%; height: 350px; margin: 0 auto;"  
                    loop autoplay></lottie-player>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="700" class="flex flex-col mt-24 text-center">
            <a 
                href="#about-me"
                v-smooth-scroll>
                <font-awesome-icon icon="fa-solid fa-angles-down" class="text-white text-4xl bounce" />
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
