<template>
   <nav class="fixed container flex items-center justify-between p-5 border-b-2 border-white backdrop-blur-sm z-40 lg:bg-inherit lg:text-white">
        <div>
            <p class="text-white text-2xl font-bold">
                <span class="text-secondary">{{ '< ' }}</span>{{'Andres-Developer'}} <span class="text-secondary">/></span>
            </p>
        </div>
        <div class="hidden items-center lg:flex">
            <a 
                href="#home" 
                class="text-white text-xl px-6 pb-2 transition ease-in hover:scale-110 duration-300" 
                v-smooth-scroll
                >
                Inicio
            </a>
            <a 
                href="#about-me" 
                class="text-white text-xl px-6 pb-2 transition ease-in hover:scale-110 duration-300" 
                v-smooth-scroll
                >
                Sobre mí
            </a>
            <a 
                href="#projects" 
                class="text-white text-xl px-6 pb-2 transition ease-in hover:scale-110 duration-300" 
                v-smooth-scroll 
                >
                Proyectos
            </a>
        </div>
        <div class="hidden items-center text-white lg:flex">
            <a href="#" 
               class="px-4 py-2 bg-secondary rounded-full text-white hover:text-gray-300 transition ease-in duration-200">
               Contactame
            </a>
        </div>
        <div v-if="!showNav" class="flex mr-1 lg:hidden">
            <font-awesome-icon @click="showNavbar" :icon="['fas', 'bars']" class="text-white text-2xl cursor-pointer" />
        </div>
         <div v-else class="flex mr-1 lg:hidden">
            <font-awesome-icon @click="closeNavbar" :icon="['fas', 'xmark']" class="text-white text-2xl cursor-pointer" />
        </div>
   </nav>
   <div 
    class="fixed container px-5 transition z-20 lg:hidden" 
    :class="showNav ? 'translate-y-32 ease-in duration-500' : '-translate-y-[140%] ease-in-out duration-1000'">
        <div class="bg-white flex flex-col rounded-xl">
            <div class="w-full flex flex-col items-center">
                <a 
                    @click="closeNavbar"
                    href="#home" 
                    class="text-primary text-xl py-6 transition ease-in hover:scale-110 duration-300"
                    v-smooth-scroll
                    >
                    Inicio
                </a>
                <a 
                    @click="closeNavbar"
                    href="#about-me" 
                    class="text-primary text-xl py-6 transition ease-in hover:scale-110 duration-300"
                    v-smooth-scroll
                    >
                    Sobre mí
                </a>
                <a 
                    @click="closeNavbar"
                    href="#projects" 
                    class="text-primary text-xl py-6 transition ease-in hover:scale-110 duration-300"
                    v-smooth-scroll
                    >
                    Proyectos
                </a>
            </div>
            <div class="w-full flex items-center text-white justify-center py-6">
                <a 
                    href="https://www.linkedin.com/in/andr%C3%A9s-delgado-p%C3%A9rez-135a311b6/" 
                    target="_blank"
                    class="px-4 py-2 bg-secondary rounded-full text-white hover:text-gray-300 transition ease-in duration-200">
                    Contactame
                </a>
            </div>
        </div>
   </div>
</template>
<script setup>
import { ref } from 'vue'


    // const myEl = ref(null)
    // const smoothScroll = inject('smoothScroll')
    // const scrollToMyEl = () => {
    //     smoothScroll({
    //     scrollTo: myEl.value,
    //     hash: '#home'
    //     })
    // }

    const showNav = ref(false)

    const showNavbar = () => {
        showNav.value = true
    }

    const closeNavbar = () => {
        showNav.value = false
    }
</script>
