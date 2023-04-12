<template>
    <div id="projects" class="pb-20 px-5 overflow-hidden" v-smooth-scroll>
        <h1 data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
            class=" text-6xl font-bold text-center mt-12 text-secondary">
            {{ $t("Featuredprojects") }}
        </h1>
        <div class="mt-32">
            <div data-aos="fade-right"
                 data-aos-delay="300"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-sine"
                 class="flex flex-col justify-center lg:flex-row">
                <div class="w-max mx-auto lg:mx-0">
                    <img class="bg-cover w-[300px] mx-auto rounded-xl"
                         src="../../img/compralo.png"
                         alt="project img">
                </div>
                <div class="w-full text-center lg:text-left lg:pl-24 lg:w-1/3">
                    <h3 class="font-semibold text-2xl py-8 lg:pt-0">
                        {{ $t("buyit") }}
                    </h3>
                    <p class="">
                        {{ $t("buyitext") }}
                        
                    </p>
                    <div class="mt-6">
                        <a 
                            @click="goToUrl('https://github.com/maykol68/Ruby-1.2')"
                           class="text-secondary font-semibold tracking-wide">
                           {{ $t("seep") }}
                        </a>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left"
                 data-aos-delay="300"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-sine"
                 class="flex flex-col-reverse justify-center mt-32 lg:flex-row lg:mt-40">
                <div class="w-full text-center lg:text-left lg:pr-32 lg:w-1/3">
                    <h3 class="font-semibold text-2xl py-8 lg:pt-0 lg:text-right">
                        {{ $t("api") }}
                    </h3>
                    <p class=" lg:text-right">
                        {{ $t("apitxt") }}
                    </p>
                    <div class="mt-6 lg:text-right">
                      <a @click="goToUrl('https://github.com/maykol68/Ruby-1.1')"
                         class="text-secondary font-semibold tracking-wide">
                         {{ $t("seep") }}
                      </a>
                    </div>
                </div>
                <div class="w-max mx-auto lg:mx-0">
                    <img class="bg-cover w-[300px] mx-auto rounded-xl" src="../../img/project_default.png" alt="project img">
                </div>
            </div>
            <div data-aos="fade-right"
                 data-aos-delay="300"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-sine"
                 class="flex flex-col justify-center mt-32 lg:flex-row lg:mt-40">
                <div class="w-max mx-auto lg:mx-0">
                    <img class="bg-cover w-[300px] mx-auto rounded-xl" src="../../img/project_default.png" alt="project img">
                </div>
                <div class="w-full text-center lg:text-left lg:pl-24 lg:w-1/3">
                    <h3 class="font-semibold text-2xl py-8 lg:pt-0">
                        {{ $t("soon") }}
                    </h3>
                    <p class="">
                        {{ $t("soon") }}
                    </p>
                    <div class="mt-6">
                      <a href="#"
                         class="text-secondary font-semibold tracking-wide">
                         {{ $t("soon") }}
                      </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from "vue";
import AOS from "aos";

  onMounted(() => {
      AOS.init();
  })
  const goToUrl = (url) => {
        window.open(url, '_blank')
  }
</script>
