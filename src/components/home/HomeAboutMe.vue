<template>
    <div class="pb-48">
        <h2 class="text-white text-5xl font-bold text-center">
            Sobre mí
        </h2>
        <div class="flex flex-col justify-center mt-24 lg:flex-row">
            <div class="lg:px-4">
                <img class="w-[350px] h-[350px] mx-auto rounded-xl" src="../../img/avatar.jpg" alt="avatar">
            </div>
            <div class="flex flex-col justify-between text-center px-5 pt-5 lg:text-left lg:px-0 lg:pl-24 lg:pt-0 lg:w-1/3">
                <p class="text-white break-all">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero 
                    doloremque dolores explicabo necessitatibus voluptatum laborum ipsa optio, nobis ut quaerat!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tempore.
                </p>
                <div class="mt-10 lg:mt-0">
                    <p class="text-white pb-4 font-bold">Tecnologías:</p>
                    <div class="flex items-center justify-between flex-wrap">
                        <div v-for="(tech, index) in tecnlogies" :key="tech + '_' + index" class="flex flex-col justify-center items-center">
                            <font-awesome-icon :icon="`fa-brands ${tech.icon}`" class="text-4xl" :class="tech.color" />
                            <p class="font-semibold text-sm text-white mt-1">{{ tech.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-10 lg:mt-0">
                    <p class="text-white pb-4 font-bold">Contacto:</p>
                    <a href="mailto:andresdelgadoperez19@gmail.com">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="text-4xl mr-6 text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/andr%C3%A9s-delgado-p%C3%A9rez-135a311b6/">
                        <font-awesome-icon :icon="['fab', 'linkedin']" class="text-4xl mr-6 text-blue-600" />
                    </a>
                    <a href="https://github.com/Andres1124">
                        <font-awesome-icon :icon="['fab', 'github']" class="text-4xl mr-6 text-white" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {

    setup() {
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

        return {
            tecnlogies,
        }
    }
    
}
</script>