<template>
    <div class="flex flex-col items-center justify-center p-5 border-t-2 border-white backdrop-blur-sm lg:flex-row lg:justify-between">
        <div>
            <p class="text-2xl font-bold">
                <span class="text-secondary">{{ '🔻 ' }}</span>{{'Michael'}} <span >🔻</span>
            </p>
        </div>
        <div class="mt-4 hidden lg:flex lg:mt-0">
            <a href="mailto:sm365277@gmail.com">
                <font-awesome-icon :icon="['fas', 'envelope']" class="text-4xl px-6 " />
            </a>
            <a href="https://www.linkedin.com/in/michael-moreno12651/">
                <font-awesome-icon :icon="['fab', 'linkedin']" class="text-4xl px-6 " />
            </a>
            <a href="https://github.com/maykol68">
                <font-awesome-icon :icon="['fab', 'github']" class="text-4xl px-6 " />
            </a>
        </div>
    </div>
    <div class="py-1 text-center">
        <p class=" text-sm">
            &copy; Michael steven
        </p>
    </div>
</template>
<script>
export default {
    
}
</script>
