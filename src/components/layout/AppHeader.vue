<template>
   <nav class="fixed container flex items-center justify-between p-5 border-b-2 backdrop-blur-sm z-40 lg:bg-inherit lg:"
        :class="!darkModeActive ? 'border-[#41403f]' : 'border-white'">
        <div>
            <p class="text-2xl font-bold hidden md:flex">
                <span class="text-secondary">{{ '🔻' }}</span>{{'Michael'}} <span class="text-secondary">🔻</span>
            </p>
            <p class=" text-2xl font-bold md:hidden">
              <span class="text-secondary">{{ '🔻' }}</span>{{'Michael'}} <span class="text-secondary">🔻</span>
            </p>
        </div>
        <div class="hidden items-center lg:flex">
            <a 
                href="#home" 
                class=" text-xl px-6 pb-2 transition ease-in hover:scale-110 duration-300" 
                v-smooth-scroll
                >
                Inicio
            </a>
            <a 
                href="#about-me" 
                class=" text-xl px-6 pb-2 transition ease-in hover:scale-110 duration-300" 
                v-smooth-scroll
                >
                {{ $t("helloword") }}
            </a>
            <a 
                href="#projects" 
                class=" text-xl px-6 pb-2 transition ease-in hover:scale-110 duration-300" 
                v-smooth-scroll 
                >
                Projects
            </a>
            <select v-model="$i18n.locale">
                <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
              </select>
        </div>
        <div class="flex items-center">
            <div class="flex items-center mr-4">
                <div>
                  <font-awesome-icon @click="darkMode" :icon="['fas', 'sun']" class="text-xl cursor-pointer w-12" />
                </div>
                <input type="checkbox" name="darkMode" id="checkbox" @click="darkMode">
                <div>
                  <font-awesome-icon @click="darkMode" :icon="['fas', 'moon']" class=" text-xl cursor-pointer w-12" />
                </div>
            </div>
            <div v-if="!showNav" class="flex mr-1 lg:hidden">
              <font-awesome-icon @click="showNavbar" :icon="['fas', 'bars']" class=" text-2xl cursor-pointer" />
            </div>
            <div v-else class="flex mr-1 lg:hidden">
              <font-awesome-icon @click="closeNavbar" :icon="['fas', 'xmark']" class=" text-2xl cursor-pointer" />
            </div>
        </div>
   </nav>
   <div 
    class="fixed container px-5 transition z-20 lg:hidden" 
    :class="showNav ? 'translate-y-32 ease-in duration-500' : '-translate-y-[140%] ease-in-out duration-1000'">
        <div class="flex flex-col rounded-xl" :class="!darkModeActive ? 'bg-primary text-white' : 'bg-white text-primary'">
            <div class="w-full flex flex-col items-center">
                <a 
                    @click="closeNavbar"
                    href="#home" 
                    class="text-xl py-6 transition ease-in hover:scale-110 duration-300"
                    v-smooth-scroll
                    >
                    Inicio
                </a>
                <a 
                    @click="closeNavbar"
                    href="#about-me" 
                    class="text-xl py-6 transition ease-in hover:scale-110 duration-300"
                    v-smooth-scroll
                    >
                   sobre mi
                </a>
                <a 
                    @click="closeNavbar"
                    href="#projects" 
                    class="text-xl py-6 transition ease-in hover:scale-110 duration-300"
                    v-smooth-scroll
                    >
                    Proyectos
                </a>
                <select name="lang" v-model="lang">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
            </div>
            <div class="w-full flex items-center  justify-center py-6">
                <a 
                    href="https://www.linkedin.com/in/andr%C3%A9s-delgado-p%C3%A9rez-135a311b6/" 
                    target="_blank"
                    class="px-4 py-2 bg-secondary rounded-xl  hover:text-gray-300 transition ease-in duration-200">
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
    const darkModeActive = ref(false);

    const showNavbar = () => {
        showNav.value = true;
    }

    const closeNavbar = () => {
        showNav.value = false;
    }

    const darkMode = () => {
        let main_body = document.body;
        main_body.classList.toggle('dark-mode');
        if (darkModeActive.value) darkModeActive.value = false;
        else darkModeActive.value = true;

    }

</script>
