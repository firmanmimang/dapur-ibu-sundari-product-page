<script setup lang="ts">
const route = useRoute()
const products = useProducts()

const product = computed(() => products.find(item => item.slug === route.params.slug))

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Produk tidak ditemukan',
  })
}

const quantity = ref(1)
const selectedImage = ref(product.value.gallery[0])

const increaseQuantity = () => {
  quantity.value += 1
}

const decreaseQuantity = () => {
  quantity.value = Math.max(1, quantity.value - 1)
}

const filledHeatIcons = computed(() =>
  product.value?.spiceDots.filter(dot => dot !== '#e1bfba').length ?? 0,
)

const heritageStory = computed(() => {
  if (!product.value) {
    return []
  }

  return [
    `Perjalanan ${product.value.title} dimulai dari bahan baku yang dipilih dengan disiplin, lalu diracik perlahan agar rasa pedas, gurih, dan aroma alaminya tetap hidup di setiap sendok.`,
    `Karakter ${product.value.spiceDescriptor.toLowerCase()} dibangun dari ${product.value.ingredients.toLowerCase()} yang dimasak dalam batch kecil untuk menjaga tekstur, minyak sambal, dan kedalaman rasa.`,
    `Setiap jar dibuat untuk teman makan harian yang serius, terutama saat disandingkan dengan ${product.value.pairings.slice(0, 2).join(' dan ')}.`,
  ]
})

const reviews = computed(() => {
  if (!product.value) {
    return []
  }

  return [
    {
      name: 'Ananda S.',
      initial: 'A',
      quote: `${product.value.title} punya rasa yang terasa matang. Pedasnya hadir, tapi yang paling menonjol justru gurih dan aromanya.`,
    },
    {
      name: 'Raka W.',
      initial: 'R',
      quote: `Saya paling suka disajikan dengan ${product.value.pairings[0].toLowerCase()} dan nasi hangat. Profil rasanya padat dan tidak terasa seperti sambal produksi massal.`,
    },
    {
      name: 'Maya K.',
      initial: 'M',
      quote: `Teksturnya rapi, minyak sambalnya wangi, dan ${product.value.spiceLevelLabel.toLowerCase()} tetap terasa seimbang untuk makan sehari-hari.`,
    },
  ]
})

watch(
  () => route.params.slug,
  () => {
    if (product.value) {
      selectedImage.value = product.value.gallery[0]
      quantity.value = 1
    }
  },
)

const relatedProducts = computed(() =>
  products.filter(item => item.slug !== product.value?.slug).slice(0, 2),
)

useSeoMeta({
  title: () => `${product.value?.title} | Dapur Ibu Sundari`,
  description: () => product.value?.shortDescription || 'Detail produk Dapur Ibu Sundari.',
})
</script>

<template>
  <div class="bg-[#fff8ef] text-[#1e1b13]">
    <main v-if="product" class="pt-24">
      <section class="relative isolate overflow-hidden bg-[#2c160e] px-6 py-14 text-white lg:px-8 lg:py-20">
        <div class="absolute inset-0">
          <img
            :src="selectedImage.src"
            :alt="selectedImage.alt"
            class="h-full w-full object-cover opacity-25"
          >
          <div class="absolute inset-0 bg-[linear-gradient(120deg,rgba(30,17,0,0.84),rgba(101,0,3,0.72))]"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(254,136,70,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,219,203,0.18),transparent_35%)]"></div>
        </div>

        <div class="relative mx-auto max-w-7xl">
          <div class="mb-8" data-aos="fade-up" data-aos-duration="700">
            <NuxtLink class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#ffdbcb]" to="/products">
              <span class="material-symbols-outlined text-base">arrow_back</span>
              Kembali ke Produk
            </NuxtLink>
          </div>

          <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-7" data-aos="fade-right" data-aos-duration="900">
              <div class="grid h-full grid-cols-12 gap-4 lg:min-h-[38rem]">
                <div class="col-span-12 overflow-hidden rounded-[1.5rem] bg-[#f5edde]/10 shadow-2xl lg:col-span-8">
                  <img
                    :src="selectedImage.src"
                    :alt="selectedImage.alt"
                    class="h-full min-h-[24rem] w-full object-cover"
                  >
                </div>

                <div class="col-span-12 grid grid-cols-3 gap-4 lg:col-span-4 lg:grid-cols-1">
                  <button
                    v-for="image in product.gallery.slice(0, 3)"
                    :key="image.src"
                    type="button"
                    class="overflow-hidden rounded-[1.25rem] border bg-white/10 transition-all duration-300"
                    :class="selectedImage.src === image.src ? 'border-[#fe8846] shadow-lg shadow-[#fe8846]/20' : 'border-white/15 hover:border-[#ffdbcb]/70'"
                    @click="selectedImage = image"
                  >
                    <img
                      :src="image.src"
                      :alt="image.alt"
                      class="h-full min-h-[8rem] w-full object-cover"
                    >
                  </button>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5" data-aos="fade-left" data-aos-delay="100" data-aos-duration="950">
              <div class="rounded-[1.75rem] border border-white/15 bg-[#fff8ef]/95 p-8 text-[#1e1b13] shadow-2xl backdrop-blur md:p-10">
                <div class="space-y-6">
                  <div class="flex flex-wrap items-center gap-3">
                    <span class="text-xs font-semibold uppercase tracking-[0.3em] text-[#9e4200]">
                      {{ product.badge || 'Heritage Batch' }}
                    </span>
                    <span class="rounded-full bg-[#ffdbcb] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#341100]">
                      {{ product.spiceDescriptor }}
                    </span>
                  </div>

                  <div>
                    <h1 class="text-4xl font-bold leading-tight text-[#650003] md:text-5xl" style="font-family: 'Noto Serif', serif;">
                      {{ product.title }}
                    </h1>
                    <p class="mt-4 text-3xl font-bold text-[#422820]">{{ product.price }}</p>
                  </div>

                  <div class="flex items-center gap-5">
                    <div class="flex gap-1 text-[#b12b24]">
                      <span
                        v-for="index in 5"
                        :key="`heat-${index}`"
                        class="material-symbols-outlined text-[1.35rem]"
                        :class="index <= filledHeatIcons ? '' : 'text-[#d6b8b2]'"
                        :style="index <= filledHeatIcons ? `font-variation-settings: 'FILL' 1;` : ''"
                      >
                        local_fire_department
                      </span>
                    </div>
                    <div class="h-6 w-px bg-[#e1bfba]"></div>
                    <div>
                      <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8d706c]">Heat Level</p>
                      <p class="text-sm font-semibold text-[#422820]">{{ product.spiceLevelLabel.replace('LEVEL PEDAS: ', '') }}</p>
                    </div>
                  </div>

                  <p class="text-lg italic leading-relaxed text-[#59413e]">
                    "{{ product.shortDescription }}"
                  </p>

                  <div class="rounded-[1.25rem] bg-[#fbf3e4] p-6">
                    <div class="grid gap-5 sm:grid-cols-2">
                      <div>
                        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#9e4200]">Berat Bersih</p>
                        <p class="mt-2 text-base font-semibold text-[#1e1b13]">{{ product.netWeight }}</p>
                      </div>
                      <div>
                        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#9e4200]">Bahan Utama</p>
                        <p class="mt-2 text-base font-semibold text-[#1e1b13]">{{ product.ingredients }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-wrap items-center gap-4 pt-2">
                    <div class="flex items-center overflow-hidden rounded-md border border-[#e1bfba] bg-white">
                      <button class="px-4 py-3 transition-colors hover:bg-[#f5edde]" type="button" @click="decreaseQuantity">
                        <span class="material-symbols-outlined">remove</span>
                      </button>
                      <span class="min-w-14 px-4 text-center text-lg font-bold">{{ quantity }}</span>
                      <button class="px-4 py-3 transition-colors hover:bg-[#f5edde]" type="button" @click="increaseQuantity">
                        <span class="material-symbols-outlined">add</span>
                      </button>
                    </div>

                    <button class="flex-1 rounded-md bg-[#650003] px-8 py-4 text-lg font-bold text-white transition-all hover:bg-[#8c0d0d] active:scale-95">
                      Add to Cart
                    </button>
                  </div>

                  <div>
                    <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9e4200]">Cocok Disajikan Dengan</p>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="pairing in product.pairings"
                        :key="pairing"
                        class="rounded-full bg-[#f5edde] px-4 py-2 text-sm font-semibold text-[#422820]"
                      >
                        {{ pairing }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#fff8ef] px-6 py-24 lg:px-8">
        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          <div data-aos="fade-up" data-aos-duration="850">
            <div class="relative">
              <div class="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-[#fe8846]/10 blur-3xl"></div>
              <h2 class="relative text-4xl font-bold text-[#650003]" style="font-family: 'Noto Serif', serif;">
                Heritage Story
              </h2>
            </div>

            <div class="mt-8 space-y-6 text-lg leading-relaxed text-[#59413e]">
              <p v-for="paragraph in heritageStory" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>

            <div class="mt-10 rounded-[1.5rem] bg-[#fbf3e4] p-8">
              <p class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#9e4200]">Tentang Produk</p>
              <div class="space-y-4 text-[#59413e]">
                <p v-for="paragraph in product.description" :key="paragraph">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>

          <div class="relative" data-aos="fade-up" data-aos-delay="120" data-aos-duration="900">
            <div class="overflow-hidden rounded-[2rem] shadow-2xl lg:rotate-[2deg]">
              <img
                :src="product.gallery[1]?.src || product.image"
                :alt="product.gallery[1]?.alt || product.alt"
                class="h-[34rem] w-full object-cover"
              >
            </div>
            <div class="absolute -bottom-8 -left-6 max-w-xs rounded-[1.25rem] border border-[#e1bfba]/50 bg-[#fff8ef]/95 p-5 shadow-xl">
              <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#9e4200]">Rasa Inti</p>
              <p class="mt-3 text-base leading-relaxed text-[#422820]">
                Racikan ini dibangun untuk menghadirkan sambal dengan karakter {{ product.spiceDescriptor.toLowerCase() }}, tetap seimbang, dan mudah masuk ke meja makan harian.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#f5edde] px-6 py-24 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <div class="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-aos="fade-up" data-aos-duration="800">
            <div>
              <h2 class="text-4xl font-bold text-[#650003]" style="font-family: 'Noto Serif', serif;">
                Voices from the Table
              </h2>
              <p class="mt-2 text-[#59413e]">Catatan jujur dari pelanggan yang membawa sambal ini ke meja makan mereka.</p>
            </div>
            <button class="inline-flex items-center gap-2 self-start border-b-2 border-[#fe8846] pb-1 text-sm font-bold uppercase tracking-[0.15em] text-[#650003] transition-opacity hover:opacity-80">
              Write a Review
              <span class="material-symbols-outlined text-base">edit</span>
            </button>
          </div>

          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <article
              v-for="(review, index) in reviews"
              :key="review.name"
              class="rounded-[1.5rem] border border-[#e1bfba]/30 bg-[#fffdf8] p-8 shadow-sm"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
              data-aos-duration="850"
            >
              <div class="mb-5 flex text-[#9e4200]">
                <span
                  v-for="star in 5"
                  :key="`${review.name}-${star}`"
                  class="material-symbols-outlined"
                  style="font-variation-settings: 'FILL' 1;"
                >
                  star
                </span>
              </div>
              <p class="mb-6 text-lg italic leading-relaxed text-[#422820]">
                "{{ review.quote }}"
              </p>
              <div class="flex items-center gap-4">
                <div class="flex h-11 w-11 items-center justify-center rounded-full bg-[#ffdad5] font-bold text-[#650003]">
                  {{ review.initial }}
                </div>
                <span class="font-bold text-[#422820]">{{ review.name }}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-[#fff8ef] px-6 py-24 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <h2 class="mb-12 text-center text-3xl font-bold text-[#650003]" style="font-family: 'Noto Serif', serif;">
            Complete Your Collection
          </h2>

          <div class="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
            <NuxtLink
              v-for="(item, index) in relatedProducts"
              :key="item.slug"
              :to="`/products/${item.slug}`"
              class="group"
              data-aos="fade-up"
              :data-aos-delay="index * 120"
              data-aos-duration="850"
            >
              <div class="relative mb-6 overflow-hidden rounded-[1.5rem] bg-[#f5edde]">
                <img
                  :src="item.image"
                  :alt="item.alt"
                  class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                <div class="absolute bottom-4 left-4">
                  <span
                    class="rounded px-3 py-1 text-xs font-bold uppercase tracking-[0.15em]"
                    :class="item.badgeClass || 'bg-[#650003] text-white'"
                  >
                    {{ item.badge || item.spiceDescriptor }}
                  </span>
                </div>
              </div>

              <h3 class="text-2xl font-bold text-[#650003]" style="font-family: 'Noto Serif', serif;">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-[#59413e]">{{ item.shortDescription }}</p>
              <div class="mt-5 flex items-center justify-between gap-4">
                <span class="font-bold text-[#422820]">{{ item.price }}</span>
                <span class="border-b-2 border-[#650003] pb-1 text-sm font-bold uppercase tracking-[0.15em] text-[#650003]">
                  View Details
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
