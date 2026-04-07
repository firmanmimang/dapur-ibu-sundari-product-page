<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'id',
  },
})

useSeoMeta({
  title: 'Products | Dapur Ibu Sundari',
  description: 'Discover the hand-crafted sambal collection from Dapur Ibu Sundari.',
})

const products = useProducts()

const filters = [
  { label: 'MILD', class: 'bg-[#ffdbcb] text-[#341100] hover:bg-[#ffb691]' },
  { label: 'MEDIUM', class: 'bg-[#9e4200] text-white shadow-md' },
  { label: 'HOT', class: 'bg-[#8c0d0d] text-[#ff9588] hover:opacity-90' },
  { label: 'EXTREME', class: 'bg-[#650003] text-white hover:opacity-90' },
]
</script>

<template>
  <div class="bg-[#fff8ef] text-[#1e1b13]">
    <main class="mx-auto max-w-7xl px-8 pb-20 pt-32">
      <header class="mb-16 gap-12 md:flex md:items-end md:justify-between">
        <div
          class="max-w-2xl"
          data-aos="fade-right"
          data-aos-duration="850"
        >
          <span class="mb-4 block text-sm font-semibold uppercase tracking-[0.3em] text-[#9e4200]">
            The Selection
          </span>
          <h1 class="mb-6 text-5xl font-black leading-tight text-[#650003] md:text-7xl" style="font-family: 'Noto Serif', serif;">
            Our Hand-Crafted Sambal Collection
          </h1>
          <p class="text-lg font-light leading-relaxed text-[#59413e]">
            Small batches, pounded in stone mortars, following recipes passed through generations.
            Experience the authentic soul of Sundanese heat.
          </p>
        </div>
        <div
          class="mt-8 md:mt-0"
          data-aos="fade-left"
          data-aos-duration="850"
          data-aos-delay="100"
        >
          <div class="flex flex-col gap-4 rounded-xl bg-[#f5edde] p-6">
            <p class="text-sm font-bold text-[#422820]">FILTER BY HEAT</p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="filter in filters"
                :key="filter.label"
                class="rounded-full px-4 py-2 text-xs font-bold transition-colors"
                :class="filter.class"
              >
                {{ filter.label }}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div class="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(product, index) in products"
          :key="product.title"
          class="group flex flex-col"
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="Math.min(index * 80, 320)"
        >
          <NuxtLink
            class="relative mb-6 block aspect-[4/5] overflow-hidden rounded-md bg-[#fbf3e4] shadow-sm transition-all duration-500 hover:shadow-xl"
            :to="`/products/${product.slug}`"
          >
            <img
              :alt="product.alt"
              :src="product.image"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            >
            <div
              v-if="product.badge"
              class="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.2em]"
              :class="product.badgeClass || 'bg-[#650003] text-white'"
            >
              {{ product.badge }}
            </div>
          </NuxtLink>
          <div class="mb-2 flex items-start justify-between gap-4">
            <NuxtLink :to="`/products/${product.slug}`">
              <h3 class="text-2xl font-bold text-[#1e1b13]" style="font-family: 'Noto Serif', serif;">
                {{ product.title }}
              </h3>
            </NuxtLink>
            <span class="font-bold text-[#650003]">{{ product.price }}</span>
          </div>
          <p class="mb-6 flex-grow text-sm leading-relaxed text-[#59413e]">
            {{ product.shortDescription }}
          </p>
          <div class="mb-6 flex items-center gap-4">
            <div class="flex gap-1">
              <span
                v-for="(dot, index) in product.spiceDots"
                :key="`${product.title}-dot-${index}`"
                class="h-4 w-4 rounded-full"
                :style="{ backgroundColor: dot }"
              ></span>
            </div>
            <span class="text-xs font-bold text-[#422820]">{{ product.spiceLevelLabel }}</span>
          </div>
          <NuxtLink
            class="block w-full rounded-md bg-[#fe8846] py-4 text-center font-bold text-[#6a2a00] transition-colors duration-300 hover:bg-[#9e4200] hover:text-white"
            :to="`/products/${product.slug}`"
          >
            Lihat Detail
          </NuxtLink>
        </div>
      </div>

      <div
        class="mt-20 flex flex-col items-center"
        data-aos="zoom-in"
        data-aos-duration="750"
      >
        <button class="rounded-md border-2 border-[#650003] px-12 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#650003] transition-all duration-300 hover:bg-[#650003] hover:text-white">
          Load More Products
        </button>
      </div>
    </main>

    <section class="bg-[#efe7d9] px-8 py-20">
      <div class="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row">
        <div
          class="md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <h2 class="mb-6 text-4xl font-black text-[#650003]" style="font-family: 'Noto Serif', serif;">
            Choose Your Journey Through Fire
          </h2>
          <p class="mb-8 leading-relaxed text-[#59413e]">
            Not all heat is created equal. We classify our sambals using the Heritage Scale, from the
            gentle warmth of morning sun to the volcanic intensity of a tropical storm.
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
              <span class="h-8 w-8 rounded-full bg-[#ffb691]"></span>
              <div>
                <p class="text-xs font-bold opacity-60">LEVEL 1</p>
                <p class="font-bold">Matahari Pagi</p>
              </div>
            </div>
            <div class="flex items-center gap-3 rounded-xl border-2 border-[#9e4200] bg-white p-4 shadow-sm">
              <span class="h-8 w-8 rounded-full bg-[#9e4200]"></span>
              <div>
                <p class="text-xs font-bold opacity-60">LEVEL 3</p>
                <p class="font-bold">Bara Api</p>
              </div>
            </div>
            <div class="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
              <span class="h-8 w-8 rounded-full bg-[#650003]"></span>
              <div>
                <p class="text-xs font-bold opacity-60">LEVEL 5</p>
                <p class="font-bold">Gunung Meletus</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="relative md:w-1/2"
          data-aos="fade-left"
          data-aos-duration="950"
          data-aos-delay="100"
        >
          <div class="aspect-video rotate-3 overflow-hidden rounded-md bg-[#650003] shadow-2xl">
            <img
              alt="Artisanal stone mortar filled with crushed red chilies and garlic in a warm kitchen atmosphere"
              class="h-full w-full scale-110 -rotate-3 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx-PC_opM79qZHk17hl9jPQQzldhigt73NGUjwSBX6PmX5_hr6gFF0qGof3AyH5zycHUIvu9ysv6N9IWvdnCSiXKw1iDaCMEwECmbIY1gjJXMVHDWNWmM6yK8_bNEC1N52olVX1lqwJPNXageYRCEU0pp7oIOD-Emu5f7r9tnkQZIZvfKeNina7mTNYosOmzBQqNohQOQahZgIpM8tsgW48s5XzutQTPPZynqjVGieqdlbiDpPphHBWk2IU8_dSVPPK569bg0vwpk"
            >
          </div>
          <div class="absolute -bottom-8 -left-8 max-w-[240px] rounded-md bg-[#fff8ef] p-6 shadow-xl">
            <p class="font-serif italic text-[#650003]">
              "Our chilies are sourced from volcanic soils, providing a richness you won't find anywhere else."
            </p>
            <p class="mt-4 text-xs font-bold uppercase text-[#422820]">— Ibu Sundari</p>
          </div>
        </div>
      </div>
    </section>

    <div class="fixed bottom-8 right-8 md:hidden">
      <button class="flex h-14 w-14 items-center justify-center rounded-full bg-[#650003] text-white shadow-2xl">
        <span class="material-symbols-outlined">shopping_basket</span>
      </button>
    </div>
  </div>
</template>
