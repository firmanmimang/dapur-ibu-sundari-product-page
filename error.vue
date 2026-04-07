<script setup lang="ts">
import type { NuxtError } from '#app'
import type { PropType } from 'vue'
import TheFooter from '~/components/TheFooter.vue'
import TheNavbar from '~/components/TheNavbar.vue'

const props = defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true,
  },
})

const isNotFound = computed(() => props.error?.statusCode === 404)

const goTo = (href: string) => {
  clearError({ redirect: href })
}

useSeoMeta({
  title: () => isNotFound.value
    ? 'Bumbunya Kurang Pas? | Dapur Ibu Sundari'
    : 'Terjadi Kesalahan | Dapur Ibu Sundari',
  description: () => isNotFound.value
    ? 'Halaman yang Anda cari tidak ditemukan.'
    : 'Terjadi kesalahan saat membuka halaman Dapur Ibu Sundari.',
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[#fff8ef] text-[#1e1b13]">
    <TheNavbar />

    <main class="relative flex min-h-[calc(100vh-11rem)] flex-1 items-center justify-center overflow-hidden px-6 py-24 pt-32 lg:px-8">
      <div class="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#fbf3e4] opacity-60 blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#5b3e35]/10 opacity-50 blur-3xl"></div>

      <div class="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">
        <div class="order-1 flex flex-col space-y-8" data-aos="fade-right" data-aos-duration="850">
          <div class="max-w-xl">
            <span class="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-[#650003]">
              {{ isNotFound ? 'Kesalahan 404' : `Kesalahan ${error.statusCode || ''}`.trim() }}
            </span>

            <h1 class="mb-6 text-5xl font-bold leading-[1.1] text-[#1e1b13] md:text-7xl" style="font-family: 'Noto Serif', serif;">
              {{ isNotFound ? 'Bumbunya Kurang Pas?' : 'Ada yang Terlewat di Dapur.' }}
            </h1>

            <p class="text-lg leading-relaxed text-[#59413e] md:text-xl">
              {{
                isNotFound
                  ? 'Sepertinya resep yang Anda cari belum kami racik. Mari kembali ke meja makan untuk mencicipi koleksi lainnya.'
                  : (error.statusMessage || 'Terjadi kendala saat membuka halaman ini. Mari kembali ke beranda dan lanjutkan penelusuran.')
              }}
            </p>
          </div>

          <div class="flex flex-col items-center gap-6 pt-4 sm:flex-row sm:items-start" data-aos="fade-up" data-aos-delay="120" data-aos-duration="800">
            <button
              class="inline-flex w-full items-center justify-center rounded-md bg-[#8c0d0d] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-xl sm:w-auto"
              type="button"
              @click="goTo('/')"
            >
              <span class="material-symbols-outlined mr-2">restaurant_menu</span>
              Kembali ke Beranda
            </button>

            <button
              class="border-b-2 border-[#fe8846] pb-1 font-semibold text-[#650003] transition-all duration-300 hover:border-[#650003]"
              type="button"
              @click="goTo('/products')"
            >
              Lihat Koleksi Sambal
            </button>
          </div>

          <div class="flex items-center gap-4 pt-12 text-[#422820]" data-aos="fade-in" data-aos-delay="220" data-aos-duration="900">
            <div class="h-px w-12 bg-[#e1bfba]"></div>
            <span class="text-lg italic opacity-60" style="font-family: 'Noto Serif', serif;">Warisan Rasa dari Hati</span>
          </div>
        </div>

        <div class="order-2 flex justify-center" data-aos="fade-left" data-aos-delay="140" data-aos-duration="950">
          <div class="relative aspect-square w-full max-w-lg">
            <div class="absolute inset-0 rotate-3 scale-105 rounded-full bg-[#f5edde]" data-aos="zoom-in" data-aos-delay="220" data-aos-duration="900"></div>
            <img
              alt="Cobek dan ulekan batu"
              class="relative z-20 h-full w-full -rotate-2 object-contain transition-transform duration-700 hover:rotate-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb7m6KKFRfhIHDzn6U2UUz-a6YrEX0iueHE0dxN2xqhh4gKIREAPjmnDkm-T86GLx-taOeHnPi1D1kqLe-lk-r7iTPZD1Q87dvxDKyUnlKkI6Iqbs9g3FpM3f2xc7B-W-m6O5lxqoGqkyKCzjrDgQmW7nWMlC_TeudE26Ew9MklE3pD9YmCexonzkx6OfaC-UqlMMLNNwmtD2qlCCQ_Iud9qJj4WtqTsvVGaL0PF2P9FdSyDzJC-nZ7alOId7kJIMFyf2ukd6QMEg"
              data-aos="zoom-in"
              data-aos-delay="160"
              data-aos-duration="900"
            >
            <div class="absolute right-0 top-0 z-30 h-32 w-32 translate-x-1/2 -translate-y-1/4 transform" data-aos="zoom-in-down" data-aos-delay="320" data-aos-duration="850">
              <img
                alt="Cabai merah kering"
                class="rounded-full border-4 border-[#fff8ef] shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYXxt5dhFl0TdI3iPZ0wqijosEKgfNBgBG-0qZExSPLQfL8ShDqDhLb4h2YY1uj3P8SmknUWzFlNLclaKubcVP1Ta3ro2gFKqMWpxadw73Y79O5qjbSO5y3-PWsGoDaYk-5aLguYiSQUZ5ipCf2QUW_LfcjLEUbfiLNi_m9Iltu58BB26DvlFfYMhWqcsmNbv8UmECzWrSloCVymm2X7JPdX3iNL8v1M5Xa2qehCKyM3FCvA0mxMGvwynBMMhDqTyH3gnl1KBI9hs"
              >
            </div>
          </div>
        </div>
      </div>
    </main>

    <TheFooter />
  </div>
</template>
