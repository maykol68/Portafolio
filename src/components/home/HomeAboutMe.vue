<template>
    <div id="about-me" class="pb-20 container mx-auto overflow-hidden">
        <div class="flex flex-col justify-center lg:flex-row">
            <div data-aos="fade-right"
                 data-aos-delay="500"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-sine"
                 class="w-full lg:w-1/2 lg:px-4"
            >
              <div class="rounded-full bg-white overflow-hidden w-max mx-auto border-4 border-[#000000]">
                <img class="w-[350px] h-[350px] mx-auto" src="../../img/avatar.jpeg" alt="avatar">
              </div>
            </div>
            <div 
                data-aos="fade-left" 
                data-aos-delay="550"
                data-aos-duration="500"
                class="flex flex-col justify-between text-center px-5 pt-5 lg:text-left lg:px-0 lg:pt-0 lg:w-1/2"
            >
                <h2 class="text-6xl font-bold text-secondary pb-4 lg:pb-0"
                >
                {{ $t("aboutme") }}
                </h2>
                <p class="break-all">
                    {{ $t("aboutmetoo") }} 
                </p>
                <div class="mt-10 lg:mt-0">
                    <p class="pb-4 font-bold text-secondary text-lg">{{ $t("technologys") }}</p>
                    <div class="flex items-center justify-between flex-wrap">
                        <div v-for="(tech, index) in tecnlogies"
                             :key="tech + '_' + index"
                             class="flex flex-col justify-center items-center">
                            <font-awesome-icon :icon="tech.name === 'Ruby' || 'Postgresql'? `fa ${tech.icon}`:`fa-brands ${tech.icon}`"  
                                class="text-4xl" :class="tech.color" />
                            <font-awesome-icon :icon="`fa-brands ${tech.icon}`" class="text-4xl" :class="tech.color" />
                            <p class="font-semibold text-sm mt-1">{{ tech.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref, onMounted } from 'vue'
    import AOS from "aos";


    const tecnlogies = ref([
        {
            name: 'HTML5',
            icon: 'fa-html5',
            color: 'text-orange-600',
        },
        {
            name: 'CSS3',
            icon: 'fa-css3',
            color: 'text-blue-600',
        },
        {
            name: 'Javascript',
            icon: 'fa-js',
            color: 'text-yellow-300',
        },
        {
            name: 'PHP',
            icon: 'fa-php',
            color: 'text-blue-500',
        },
        {
            name: 'Laravel',
            icon: 'fa-laravel',
            color: 'text-red-600',
        },
        {
            name: 'Ruby on rails',
            icon: 'fa-gem',
            color: 'text-red-600',
        },
        {
            name: 'Postgresql',
            icon: 'fa-database',
            color: 'text-blue-500',
        },

    ])

    onMounted(() => {
        AOS.init();
    })
</script>