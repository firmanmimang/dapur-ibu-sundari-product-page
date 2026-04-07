<script setup lang="ts">
const navItems = [
  { label: 'Warisan Kami', href: '/', isRoute: true },
  { label: 'Produk', href: '/products', isRoute: true },
  { label: 'Cerita Sambal', href: '/story', isRoute: true },
  { label: 'Kontak', href: '/contact', isRoute: true },
]
</script>

<template>
  <nav class="fixed top-0 z-50 w-full border-b border-[#e1bfba]/40 bg-[#fff8ef]/80 backdrop-blur-md">
    <div class="flex items-center justify-between w-full px-6 py-1 mx-auto max-w-7xl lg:px-8">
      <NuxtLink class="flex items-center shrink-0" to="/">
        <img
          alt="Dapur Ibu Sundari Logo"
          class="object-contain w-auto h-16"
          :src="useWithBase('assets/images/dis-logo.webp')"
        >
      </NuxtLink>
      <div class="items-center hidden gap-8 md:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.label"
          class="pb-1 text-lg font-bold transition-colors duration-300 border-b-2"
          active-class="border-[#fe8846] text-[#650003]"
          exact-active-class="border-[#fe8846] text-[#650003]"
          :class="item.isRoute
            ? 'border-transparent text-[#1e1b13] hover:text-[#650003]'
            : 'pointer-events-none border-transparent text-[#1e1b13] opacity-70'"
          :to="item.href"
          style="font-family: 'Noto Serif', serif;"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
      <button class="rounded-md bg-[#650003] px-5 py-2.5 text-sm font-bold text-white transition-transform duration-200 hover:scale-95 md:px-6 shrink-0">
        Pesan Sekarang
      </button>
    </div>
  </nav>
</template>
