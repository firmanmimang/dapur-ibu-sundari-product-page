<script setup lang="ts">
import IconPhoneRing from '~/components/icons/IconPhoneRing.vue'
import { useRoute } from 'vue-router'
import IconPersonOutline from './icons/IconPersonOutline.vue';
import IconPhoneOutline from './icons/IconPhoneOutline.vue';

const route = useRoute()

// Check if the current route is "about-us"
const isAboutUs: ComputedRef<boolean> = computed(() => route.name === 'about-us')
const isContactUs: ComputedRef<boolean> = computed(() => route.name === 'contact-us')
const isHome: ComputedRef<boolean> = computed(() => route.name === 'index')

// About button white conidition on Home
const isScrolledPast = ref<boolean>(false)
onMounted(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const viewportHeight = window.innerHeight

    // Check if the scroll position is greater than 100vh
    isScrolledPast.value = scrollPosition > viewportHeight-30 && scrollPosition <= ((viewportHeight*2)-50)
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

// MOBILE NAV ACTION
const showMobileNav = ref<boolean>(false);
const openMobileNav = () => {
  showMobileNav.value = true;
  document.body.style.overflow = 'hidden'; // Prevent scrolling
};
const closeMobileNav = () => {
  showMobileNav.value = false;
  document.body.style.overflow = ''; // Restore scrolling
};
// Cleanup on component unmount (optional for extra safety)
watch(showMobileNav, (newValue) => {
  if (!newValue) {
    document.body.style.overflow = '';
  }
});
</script>
<template>
  <header class="fixed top-0 left-0 right-0 z-50 duration-200" :class="{'bg-background-green-3': isAboutUs}">
    <div class="container flex items-center py-3 md:py-6">
      <div>
        <NuxtLink to="/" class="hidden md:block">
          <img alt="Grasscoding logo" src="/logo.svg" class="w-16 aspect-square"/>
        </NuxtLink>
        <NuxtLink class="block md:hidden" @click.prevent.stop="openMobileNav">
          <img alt="Grasscoding logo" src="/logo.svg" class="w-10 aspect-square"/>
        </NuxtLink>
      </div>
      <nav class="flex items-center gap-10 ml-auto">
        <NuxtLink to="/about-us" class="hidden text-lg duration-100 hover:text-accent active:text-secondary md:block" :class="{'text-white': isAboutUs || (isScrolledPast && isHome)}">
          About Us
        </NuxtLink>
        <NuxtLink to="/contact-us">
          <ButtonPrimary class="flex flex-row-reverse">
            <span class="text-sm md:text-lg">Contact Us <span class="hidden md:inline-block">Now!</span></span><IconPhoneRing class="w-4 h-4 md:h-5 md:w-5" />
          </ButtonPrimary>
        </NuxtLink>
      </nav>
    </div>
  </header>
  <!-- MODAL NAV MOBILE -->
  <teleport to='body'>
    <div class="fixed top-0 bottom-0 left-0 right-0 z-[60] -translate-x-[100vw] duration-500 md:hidden" :class="{'translate-x-0': showMobileNav}">
      <!-- OVERLAY -->
      <div class="absolute top-0 bottom-0 left-0 right-0 z-[70]" @click="closeMobileNav"></div>
      <!-- CONTENT -->
      <div class="absolute top-0 bottom-0 left-0 right-0 z-[80] w-[70vw] h-full bg-background-green-1">
        <ul class="px-6 py-7 space-y-7">
          <li class="text-lg">
            <NuxtLink to="/" @click="closeMobileNav" class="block">
              <span :class="{'font-bold': isHome}">Home</span>
            </NuxtLink>
          </li>
          <li class="text-sm">
            <NuxtLink to="/about-us" class="flex items-center gap-3" @click="closeMobileNav">
              <IconPersonOutline class="w-5 h-5" /> <span :class="{'font-bold': isAboutUs}">About Us</span>
            </NuxtLink>
          </li>
          <li class="text-sm">
            <NuxtLink to="/contact-us" class="flex items-center gap-3" @click="closeMobileNav">
              <IconPhoneOutline class="w-5 h-5" /> <span :class="{'font-bold': isContactUs}">Contact Us</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </teleport>
</template>
