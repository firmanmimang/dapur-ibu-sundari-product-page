<script setup lang="ts">
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

useHead({
  htmlAttrs: {
    class: 'snap-y snap-mandatory'
  }
})

useSeoMeta({
  title: 'Dapur Ibu Sundari | Aneka Sambal Siap Santap',
  ogTitle: 'Dapur Ibu Sundari | Aneka Sambal Siap Santap',
  description: 'Sambal siap santap homemade Dapur Ibu Sundari. Nikmati pedasnya Sambal Tuna, Sambal Bawang, dan Sambal Cumi yang lezat dan praktis. Pesan sekarang!',
  ogDescription: 'Sambal siap santap homemade Dapur Ibu Sundari. Nikmati pedasnya Sambal Tuna, Sambal Bawang, dan Sambal Cumi yang lezat dan praktis. Pesan sekarang!',
})

// Scroll to top when the Home component mounts
const route = useRoute();
onMounted(() => {
  const hash = route.hash;
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

const testimonials = [
  '/assets/images/testimoni-1.webp',
  '/assets/images/testimoni-2.webp',
  '/assets/images/testimoni-3.webp',
  '/assets/images/testimoni-4.webp',
  '/assets/images/testimoni-5.webp',
  '/assets/images/testimoni-6.webp',
  '/assets/images/testimoni-7.webp',
  '/assets/images/testimoni-8.webp',
  '/assets/images/testimoni-9.webp',
  '/assets/images/testimoni-10.webp',
]

const partners = [
  {
    name: 'Rita Pasaraya',
    image: '/assets/images/rita-partner.png',
  },
  {
    name: 'Queen Bakery',
    image: '/assets/images/queen-partner.webp',
  },
  {
    name: 'Jadi Baru Toserba',
    image: '/assets/images/jadi-baru-partner.webp',
  },
  {
    name: 'Hanna Meatshop',
    image: '/assets/images/hanna-meatshop-partner.webp',
  },
  {
    name: 'Eka Surya Plaza',
    image: '/assets/images/eka-surya-partner.webp',
  },
  {
    name: 'Cherry Fresh Fruit Market',
    image: '/assets/images/cherry-fresh-fruit-partner.webp',
  },
]

const products = [
  {
    title: 'Sambal Tuna Homemade — Pedas Gurih yang Nagih',
    description: 'Filet tuna segar dimasak perlahan dengan bumbu rempah pilihan. Tekstur lembut, rasa gurih, dan pedas pas untuk segala menu.',
    image: '/assets/images/sambal-tuna-product.webp',
    alt: 'sambal tuna',
  },
  {
    title: 'Sambal Bawang Homemade — Pedas Rawit yang Harum',
    description: 'Cabai rawit dan bawang segar ditumis dengan minyak berkualitas hingga wangi. Pedasnya berani dengan aroma bawang yang menggoda selera.',
    image: '/assets/images/sambal-bawang-product.webp',
    alt: 'sambal bawang',
  },
  {
    title: 'Sambal Cumi Cabe Ijo Homemade — Pedas Asin yang Kaya',
    description: 'Cumi segar dipadukan dengan cabe hijau dan rempah rahasia keluarga. Rasanya kaya, sedikit smoky, dan bikin nasi hangat cepat habis.',
    image: '/assets/images/sambal-cumi-product.webp',
    alt: 'sambal cumi',
  },
]

const testimonialOptions = {
  perPage: 3,
  perMove: 1,
  type: 'loop',
  gap: '1rem',
  arrows: false,
  pagination: false,
  breakpoints: {
    1280: { perPage: 2, gap: '1rem' },
    1024: { perPage: 2, gap: '1rem' },
    768: { perPage: 1, gap: '0.75rem' },
    640: { perPage: 1, gap: '0.5rem' },
  },
}

const partnerOptions = {
  perPage: 4,
  perMove: 1,
  type: 'loop',
  gap: '2rem',
  arrows: false,
  pagination: false,
  breakpoints: {
    1280: { perPage: 3, gap: '1.5rem' },
    1024: { perPage: 3, gap: '1.5rem' },
    768: { perPage: 2, gap: '1.25rem' },
    640: { perPage: 1, gap: '1rem' },
  },
}
</script>
<template>
  <main>
    <section class="relative h-screen min-h-[640px] snap-always snap-start">
      <div class="absolute inset-0 z-10">
        <img src="/assets/images/hero-sambal.webp" alt="sambal tuna, sambal bawang, sambal cumi" class="object-cover w-full h-full">
        <div class="absolute inset-0 bg-black/60 sm:bg-black/50 lg:bg-black/40 xl:bg-transparent"></div>
      </div>
      <div class="container absolute z-30 flex justify-center w-full px-6 -translate-x-1/2 top-8 sm:top-10 left-1/2">
        <img src="/assets/images/dis-logo.webp" alt="dapur ibu sundari logo" width="150" height="150" class="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-[150px]">
      </div>
      <div class="container absolute z-30 w-full px-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div class="flex flex-col items-center justify-center text-center">
          <h1 class="font-bold text-white uppercase font-lazydog text-4xl leading-tight sm:text-5xl sm:leading-[3.5rem] md:text-6xl md:leading-[4rem] lg:text-7xl lg:leading-[4.5rem] xl:text-9xl xl:leading-[8rem]">Sambal Homemade Favorit Keluarga</h1>
        </div>
      </div>
      <a href="https://linktr.ee/dapuribusundari" class="container absolute z-30 flex justify-center w-full px-6 mt-10 -translate-x-1/2 bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 left-1/2">
        <ButtonPrimary class="text-xl !px-8 !py-3 sm:text-2xl sm:!px-10 md:text-3xl md:!px-12 lg:text-4xl">
          Pesan Online
        </ButtonPrimary>
      </a>
    </section>
    <section class="relative flex flex-col items-center min-h-screen snap-always snap-start">
      <div class="container mt-24 mb-20 sm:mt-28 lg:mt-32" data-aos="fade-in" :data-aos-once="true" data-aos-duration="800">
        <Swiper
          :modules="[SwiperNavigation]"
          :navigation="true"
          class="mt-20 !hidden xl:!block"
        >
          <SwiperSlide v-for="product in products" :key="product.title">
            <div class="flex items-center justify-center gap-10 px-16 xl:px-28 2xl:px-32">
              <div class="w-1/2 h-[500px] aspect-square">
                <img
                  :src="product.image"
                  :alt="product.alt"
                  class="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 class="text-5xl font-bold text-gray-700">{{ product.title }}</h2>
                <p class="mt-8 text-xl font-normal text-justify text-gray-700">{{ product.description }}</p>
                <a href="https://linktr.ee/dapuribusundari">
                  <ButtonPrimary class="mt-10 text-4xl">
                    Pesan Sekarang
                  </ButtonPrimary>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="grid w-full gap-12 mt-12 xl:hidden">
          <article
            v-for="product in products"
            :key="product.alt"
            class="overflow-hidden rounded-[2rem] bg-white/90 shadow-xl backdrop-blur-sm"
          >
            <img
              :src="product.image"
              :alt="product.alt"
              class="object-cover w-full h-64 sm:h-80"
            />
            <div class="flex flex-col gap-6 p-8 text-gray-700 sm:p-10">
              <h3 class="text-3xl font-bold sm:text-4xl">{{ product.title }}</h3>
              <p class="text-base leading-relaxed sm:text-lg">{{ product.description }}</p>
              <a href="https://linktr.ee/dapuribusundari" class="mt-2">
                <ButtonPrimary class="text-lg !px-8 !py-3 sm:text-xl">
                  Pesan Sekarang
                </ButtonPrimary>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="flex items-center justify-center min-h-screen snap-always snap-start">
      <div class="flex flex-col w-full gap-12 px-6 lg:flex-row lg:items-center lg:justify-center lg:px-0">
        <div class="container flex flex-col items-center text-center grow lg:items-end lg:text-right">
          <h2 class="text-4xl font-bold text-gray-700 sm:text-5xl">Apa Kata Mereka?</h2>
          <p class="mt-6 text-lg font-normal text-gray-700 sm:mt-8 sm:text-xl lg:text-justify">Cerita asli pelanggan yang jatuh cinta pada pedasnya Dapur Ibu Sundari.</p>
        </div>
        <div class="w-full lg:w-[65vw] shrink-0">
          <Splide
            :options="testimonialOptions"
            :extensions="{ AutoScroll }"
            aria-labelledby="Testimonies"
            class="max-w-full"
          >
            <SplideSlide
              v-for="(item, index) in testimonials"
              :key="index"
              class="flex justify-center"
            >
              <img
                :src="item"
                :alt="`Testimoni pelanggan ${index + 1}`"
                class="object-cover w-full h-[320px] rounded-[2rem] sm:h-[380px] md:h-[420px] lg:h-[500px]"
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
    <section class="flex items-center justify-center min-h-screen snap-always snap-start">
      <div class="flex flex-col items-center justify-center w-full gap-12 px-6 text-center lg:px-0">
        <div class="container flex flex-col items-center grow">
          <h2 class="text-4xl font-bold text-gray-700 sm:text-5xl">Partner Kepercayaan Kami</h2>
        </div>
        <div class="w-full mt-12 shrink-0 sm:mt-16">
          <Splide
            :options="partnerOptions"
            :extensions="{ AutoScroll }"
            aria-labelledby="Partners"
            class="max-w-full"
          >
            <SplideSlide v-for="(item, index) in partners" :key="index" class="flex items-center justify-center">
              <img
                :src="item.image"
                :alt="item.name"
                class="object-contain w-[200px] sm:w-[240px] lg:w-[300px]"
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  </main>
</template>
<style>
.swiper-slide {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-next {
  background-color: #333333; /* Default color */
  background-image: none; /* Rely on the mask for the icon */
  -webkit-mask-image: url(/assets/icons/arrow-button-right.svg);
  mask-image: url(/assets/icons/arrow-button-right.svg);
  mask-repeat: no-repeat;
  mask-size: cover;
  mask-position: center;
  transition: background-color 150ms ease-in-out; /* Smooth transition */
}

.swiper-button-prev {
  background-color: #333333; /* Default color */
  background-image: none; /* Rely on the mask for the icon */
  -webkit-mask-image: url(/assets/icons/arrow-button-left.svg);
  mask-image: url(/assets/icons/arrow-button-left.svg);
  mask-repeat: no-repeat;
  mask-size: cover;
  mask-position: center;
  transition: background-color 150ms ease-in-out; /* Smooth transition */
}

/* base look */
.swiper-button-prev,
.swiper-button-next {
  background-image: linear-gradient(to right, #8d4efc, #47d6ff);
  color: #fff;
  border-radius: 9999px; /* pill / circle */
}

/* hover: darker gradient */
.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-image: linear-gradient(to right, #6f2df6, #16b8ff);
}

/* active: even darker */
.swiper-button-prev:active,
.swiper-button-next:active {
  background-image: linear-gradient(to right, #581bd9, #0b9ad6);
}

/* make the arrow white & visible */
.swiper-button-prev::after,
.swiper-button-next::after {
  color: #fff;
}


.swiper-button-next::after {
  display: none !important;
}

.swiper-button-prev::after {
  display: none !important;
}
</style>
