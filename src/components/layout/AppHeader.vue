<template>
   <nav class="fixed container flex items-center justify-between p-5 bg-white border-b-2 border-white z-40 lg:bg-inherit lg:text-white lg:backdrop-blur-sm">
        <div>
            <p class="text-primary lg:text-white text-2xl font-bold">Andres Developer</p>
        </div>
        <div class="hidden items-center lg:flex">
            <a href="#" class="text-white text-xl mr-6 pb-2 transition ease-in hover:scale-110 duration-300">Proyectos</a>
            <a href="#" class="text-white text-xl mr-6 pb-2 transition ease-in hover:scale-110 duration-300">Sobre mí</a>
            <a href="#" class="text-white text-xl mr-6 pb-2 transition ease-in hover:scale-110 duration-300">Tecnologías</a>
        </div>
        <div class="hidden items-center text-white lg:flex">
            <a href="#" 
               class="px-4 py-2 bg-secondary text-primary rounded-full hover:bg-primary hover:text-white transition ease-in duration-500">
               Contactame
            </a>
        </div>
        <div v-if="!showNav" class="flex mr-1 lg:hidden">
            <font-awesome-icon @click="showNavbar" :icon="['fas', 'bars']" class="text-primary lg:text-white text-2xl cursor-pointer" />
        </div>
         <div v-else class="flex mr-1 lg:hidden">
            <font-awesome-icon @click="closeNavbar" :icon="['fas', 'xmark']" class="text-primary lg:text-white text-2xl cursor-pointer" />
        </div>
   </nav>
   <div 
    class="fixed container px-5 transition z-20 lg:hidden" 
    :class="showNav ? 'translate-y-32 ease-in duration-500' : '-translate-y-[140%] ease-in-out duration-1000'">
        <div class="bg-white flex flex-col rounded-xl">
            <div class="w-full flex flex-col items-center">
                <a href="#" class="text-primary text-xl py-6 transition ease-in hover:scale-110 duration-300">
                    Proyectos
                </a>
                <a href="#" class="text-primary text-xl py-6 transition ease-in hover:scale-110 duration-300">
                    Sobre mí
                </a>
                <a href="#" class="text-primary text-xl py-6 transition ease-in hover:scale-110 duration-300">
                    Tecnologías
                </a>
            </div>
            <div class="w-full flex items-center text-white justify-center py-6">
                <a 
                    href="#" 
                    class="px-4 py-2 bg-secondary text-primary text-full rounded-xl hover:bg-primary hover:text-white transition ease-in duration-300">
                    Contactame
                </a>
            </div>
        </div>
   </div>
</template>
<script>
import { ref } from 'vue'

export default {
    name: 'AppHeader',
    props: {},

    setup() {
        const showNav = ref(false)

        const showNavbar = () => {
            showNav.value = true
        }

        const closeNavbar = () => {
            showNav.value = false
        }

        return {
            showNav,

            showNavbar,
            closeNavbar,

        }
    },

}
</script>
