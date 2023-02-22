<template>
    <div id="about-me" class="pb-20 overflow-hidden">
        <div class="flex flex-col justify-center lg:flex-row">
            <div data-aos="fade-right"
                 data-aos-delay="500"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-sine"
                 class="rounded-full bg-white w-[350px] h-[350px] overflow-hidden mx-auto lg:px-4"
            >
                <img class="w-[350px] h-[350px] mx-auto" src="../../img/avatar.png" alt="avatar">
            </div>
            <div 
                data-aos="fade-left" 
                data-aos-delay="550"
                data-aos-duration="500"
                class="flex flex-col justify-between text-center px-5 pt-5 lg:text-left lg:px-0 lg:pl-24 lg:pt-0 lg:w-1/3"
            >
                <h2 class="text-6xl font-bold text-secondary"
                >
                  Sobre mí
                </h2>
                <p class="break-all">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero 
                    doloremque dolores explicabo necessitatibus voluptatum laborum ipsa optio, nobis ut quaerat!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tempore.
                </p>
                <div class="mt-10 lg:mt-0">
                    <p class="pb-4 font-bold text-secondary text-lg">Tecnologías</p>
                    <div class="flex items-center justify-between flex-wrap">
                        <div v-for="(tech, index) in tecnlogies"
                             :key="tech + '_' + index"
                             class="flex flex-col justify-center items-center"
                        >
                            <font-awesome-icon :icon="`fa-brands ${tech.icon}`" class="text-4xl" :class="tech.color" />
                            <p class="font-semibold text-sm mt-1">{{ tech.name }}</p>
                        </div>
                    </div>
                </div>
               <!-- <div class="mt-10 lg:mt-0">
                    <p class="pb-4 font-bold">Contacto:</p>
                    <a href="mailto:andresdelgadoperez19@gmail.com" target="_blank">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="text-4xl px-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/andr%C3%A9s-delgado-p%C3%A9rez-135a311b6/" target="_blank">
                        <font-awesome-icon :icon="['fab', 'linkedin']" class="text-4xl px-6" />
                    </a>
                    <a href="https://github.com/Andres1124" target="_blank">
                        <font-awesome-icon :icon="['fab', 'github']" class="text-4xl px-6" />
                    </a>
                </div> -->
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
            name: 'VueJs',
            icon: 'fa-vuejs',
            color: 'text-green-600',
        },
        {
            name: 'Laravel',
            icon: 'fa-laravel',
            color: 'text-red-600',
        },
    ])

    onMounted(() => {
        AOS.init();
    })
</script>