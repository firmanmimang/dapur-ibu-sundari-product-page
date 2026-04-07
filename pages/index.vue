<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'id',
    class: 'light',
  },
})

useSeoMeta({
  title: 'Dapur Ibu Sundari',
  description: 'Sambal tradisional Indonesia racikan Dapur Ibu Sundari yang dibuat dengan resep turun-temurun dan proses artisanal.',
})

const smallProducts = [
  {
    title: 'Sambal Ijo',
    description: 'Pedas ringan dengan rasa segar yang menggugah selera.',
    price: 'Rp 38.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVjy5KRx-uSTRV80hzI1C8cgR7Y3KzMRmwDZH4n-v7VVDzmSrg1-ZiqXwrW7xTr4UnA4hcDRNjfki8n5wGhMH9qiUWlGjiQCKInKNdubB-bQffbVNv-774WpzQ4gQ9PQ8XD4Bwj7_CwMo3gKaLMo3E7wFKaHHsk05WCHchgIZYuNpAPZUfKU8nbaUPgdkD-uCfnFa5DjF3DhxzL_YwVQFGjTgtu5Q4Sp_u-0oM1v5Am300lRhv-FTgaSJQ-SB80uZ0OogqsjZPsI8',
      alt: 'Sambal ijo hijau segar dengan tomat kecil dan rempah pilihan',
    },
    {
      title: 'Sambal Bawang',
      description: 'Gurih, renyah, dan pedas bawang yang kuat.',
      price: 'Rp 42.000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPNaPj7f8Y3eENQ1Q3zBqSIGHsuHzPVCsBSxrP58hKoW6Rmamn3z3vyWxpGv9wBIbYUnGF8aAkejRkhBA2-x7doho6vafxvzS26fsxwVgUJ2wvjmh8JzTIPGQm5fCeUCY2uuuOVi-UfhOP4o3iWM4pFBEeuWuOEp9eQb0-LFF8jjtnjKVoMJcXelOjrhpioiv9smZDM_RF2W18p5gJiaBUApysRrqqXbRWNXqTMgPnWKQ1EOQRp6RJBD1MmoaQ2YKCIkAMVrgjI9o',
      alt: 'Sambal bawang merah menyala dengan irisan bawang goreng yang renyah',
    },
  ]

const testimonialSlides = Array.from({ length: 10 }, (_, index) => ({
  src: useWithBase(`assets/images/testimoni-${index + 1}.webp`),
  alt: `Testimoni pelanggan ${index + 1}`,
}))
</script>

<template>
  <div class="min-h-screen bg-[#fff8ef] text-[#1e1b13]">
    <main class="pt-24">
      <section class="relative px-6 mb-24 overflow-hidden lg:mb-32 lg:px-24">
        <div class="grid items-center w-full grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-12">
          <div
            class="z-10 lg:col-span-6"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="50"
          >
            <span class="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-[#9e4200]">
              Sejak 1974
            </span>
            <h1
              class="mb-6 text-5xl font-black leading-[1.05] tracking-tight text-[#650003] md:text-6xl lg:text-7xl"
              style="font-family: 'Noto Serif', serif;"
            >
              Cita Rasa <br>
              Warisan <br>
              <span class="italic font-light">Nusantara.</span>
            </h1>
            <p class="mb-8 max-w-md text-lg leading-relaxed text-[#422820]">
              Diulek dengan cobek batu menggunakan resep keluarga yang diwariskan lintas
              generasi. Rasakan hangatnya sambal khas dapur Ibu Sundari yang autentik.
            </p>
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button class="rounded-md bg-[#fe8846] px-8 py-4 text-lg font-bold text-[#6a2a00] shadow-lg transition-colors hover:bg-[#9e4200] hover:text-white">
                Jelajahi Koleksi
              </button>
              <button class="flex items-center gap-2 border-b-2 border-[#9e4200] px-2 py-4 font-bold text-[#650003]">
                Kisah Kami
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div
            class="relative lg:col-span-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="150"
          >
            <div class="editorial-shadow relative aspect-[4/5] w-full overflow-hidden rounded-lg lg:rotate-2">
              <img
                alt="Proses pembuatan sambal tradisional"
                class="object-cover w-full h-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH-_0XEtCJniFBc7I1gugsLOg5SWOLW5wcFexY2GYx3Z8iohhjBTymPGaND2RkPDdb-SsXNwopkD3KCDqfi0o92Pc0Dvasi8R9fdhI8WigDg2Sw8lyrvJMZGmjzPnE28CpDCjrqZo2l9Ygn0fIF6VOQTAJ-F2MiIxhDhtBgrqsukmBMBc3fM3z0DgY9p8oDo1ILMBd2fzAnFX1pFwVRosGB2BssDXBJsNC8zXSwAB2ksJNmKrb-3dWmWcYvJnQdZ7g23YRbVwKI8M"
              >
            </div>
            <div class="absolute -bottom-12 -left-12 -z-10 h-48 w-48 rounded-full bg-[#ffdbcb] opacity-50 blur-2xl"></div>
          </div>
        </div>
      </section>

      <section class="bg-[#fbf3e4] px-6 py-20 lg:px-8 lg:py-32">
        <div class="flex flex-col items-center gap-16 mx-auto max-w-7xl md:flex-row lg:gap-20">
          <div
            class="order-2 md:w-1/2 md:order-1"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <img
                  class="object-cover w-full rounded-lg aspect-square"
                  alt="Cabai rawit merah dijemur di atas tampah anyaman"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEtxzTmI8T7wvF9s9Uy1gc7ri-P9zBa7j_dzpa2EQlfmN54gk9Os-yyPAgrD-6DKHnRfQyrhMmteu9PbL8LDjd8c_YcCLiOEM7zxMYuSwE_NwW2YUlaMdGrjqtkyLKsLBHQBiZIlQtI0VWv_zP_S-oHnztq8VG_PgaeSWW_0MF5KEgWRKuOJJU9iw1Sc_YYstfdaUJoBGOLbR5nuyw1iVU0EpnJQTcoivA3p1sUrvxY1mA5x2YaBqOVg1z-R1M6UJ8al8NrYibuNs"
                >
                <img
                  class="aspect-[3/4] w-full rounded-lg object-cover"
                  alt="Toples sambal artisanal di atas meja kayu dengan bahan segar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiuQ_kNf0451T0VAMSu5F7FnENnt81w8zzQTxn7HoWK1rOXQ9OeX9Eh3v5XuTnNJSemVkEpXd__yWulWeozW7xr1pIaCF42Rzs03kMfT2p6G-iLANrmZ0GCY-EJ9N89-sIFb8SElRS6ZVGNqZxrYpr8jjnppglYCobmW_CzzIjtoPOanQFapahIJ3zW7he1XRXFwXPpsul1vs_aps2ojAu298F0tcSp1er3jBkEzb44H6X8HCnXJDaZqqh79kGGYrofeitxro4aGU"
                >
              </div>
              <div class="pt-12 space-y-4">
                <img
                  class="aspect-[3/4] w-full rounded-lg object-cover"
                  alt="Tangan memilih bawang merah dan bawang putih segar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsAGdbg3bBVVweyCpvTjWxgH_FWGGy45wiqXCJTkaRprPBxyqlPeBj2NrLNf2saD0hR9usulXlbtZ3ONTtqQNKOYXqdJkzAT8eEJltLSg4tqw-YkRKNUGLcv4Jr2CL8P577vU4ZR5EsjkMJcpfo6VYCrUtphIVUAmQJdnJDVrn-kI3eZXo1WMXmE7ZZ6iHPKJWMw2v1JiijFQD7WBS8hk2BpJNwgvP502izVoMKr8KjMEaVkjJ5dlUNDcKhf_1sMdr43__j3s4TXo"
                >
              </div>
            </div>
          </div>

          <div
            class="order-1 md:w-1/2 md:order-2"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            <h2
              class="mb-8 text-4xl font-bold leading-tight text-[#650003] md:text-5xl"
              style="font-family: 'Noto Serif', serif;"
            >
              Diracik dengan <br>
              Kesabaran Waktu.
            </h2>
            <p class="mb-6 text-lg leading-relaxed text-[#59413e]">
              Perjalanan Ibu Sundari dimulai dari dapur kecil di Surakarta pada tahun 1974.
              Beliau percaya bahwa pedas tidak seharusnya menutupi rasa, melainkan menegaskannya.
            </p>
            <p class="mb-10 text-lg leading-relaxed text-[#59413e]">
              Hingga hari ini, kami masih memakai cobek batu vulkanik yang sama. Tanpa bahan
              tambahan, tanpa proses industri. Hanya cabai, garam, dan bahan terbaik yang matang
              oleh matahari.
            </p>
            <div class="inline-flex items-center gap-6">
              <div class="h-px w-12 bg-[#e1bfba]"></div>
              <span class="text-xl italic text-[#422820]" style="font-family: 'Noto Serif', serif;">
                Janji Rasa Warisan Kami
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 py-20 mx-auto max-w-7xl lg:px-8 lg:py-32">
        <div class="flex flex-col gap-8 mb-16 md:flex-row md:items-end md:justify-between">
          <div data-aos="fade-up" data-aos-duration="800">
            <h2 class="mb-4 text-4xl font-bold text-[#1e1b13] md:text-5xl" style="font-family: 'Noto Serif', serif;">
              Racikan Andalan
            </h2>
            <p class="max-w-md text-[#422820]">
              Koleksi sambal unggulan kami dengan tingkat pedas dan rasa yang paling disukai pelanggan.
            </p>
          </div>
          <div class="flex gap-2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
            <button class="rounded-full bg-[#efe7d9] p-4 transition-colors hover:bg-[#e9e2d3]">
              <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <button class="rounded-full bg-[#650003] p-4 text-white">
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div
            class="overflow-hidden rounded-xl bg-[#fbf3e4] md:col-span-2 md:row-span-2"
            data-aos="zoom-in-up"
            data-aos-duration="900"
          >
            <div class="aspect-[4/3] overflow-hidden">
              <img
                class="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                alt="Sambal terasi merah pekat di mangkuk keramik dengan jeruk limau"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0vsYw_ebtvO-fyGKrr7v-bkYaNU-Ec-YyFBVygUwlE4WwVPwhqlHMTZeEsJhKMQX4lTMlq0L-bvPxbLZJ1-dBLhOHm5fMTcxWNXUZGb1QrFhEKUIL-N_ZKBZ9lMmp8l_eGBne0YIjlXZFV-r44WUoQoknYe1yuDHGEHRcA3g9w7YqQ5m2k-Svf2Lh57LfXTGxrobsV1hR_356mZuhLiYJBVOmpq0wtbV5vpttT6dMEmI4C_YKRVqzQGg5bRloCHaIx8WVDQHg_Ps"
              >
            </div>
            <div class="p-8">
              <div class="flex items-start justify-between gap-6 mb-4">
                <div>
                  <h3 class="mb-1 text-3xl font-bold text-[#650003]" style="font-family: 'Noto Serif', serif;">
                    Sambal Terasi Solo
                  </h3>
                  <p class="text-[#59413e]">Cita rasa dasar khas Jawa</p>
                </div>
                <span class="text-2xl font-bold text-[#9e4200]">Rp 45.000</span>
              </div>
              <div class="flex items-center gap-3 mb-8">
                <span class="text-xs font-bold uppercase tracking-[0.25em] text-[#422820]">Level Pedas</span>
                <div class="flex gap-1">
                  <div class="h-2 w-8 rounded-full bg-[#fe8846]"></div>
                  <div class="h-2 w-8 rounded-full bg-[#fe8846]"></div>
                  <div class="h-2 w-8 rounded-full bg-[#fe8846]"></div>
                  <div class="h-2 w-8 rounded-full bg-[#e9e2d3]"></div>
                  <div class="h-2 w-8 rounded-full bg-[#e9e2d3]"></div>
                </div>
              </div>
              <button class="flex w-full items-center justify-center gap-2 rounded-md bg-[#650003] py-4 font-bold text-white">
                Tambah ke Keranjang
                <span class="text-sm material-symbols-outlined">shopping_bag</span>
              </button>
            </div>
          </div>

          <div
            v-for="product in smallProducts"
            :key="product.title"
            class="flex flex-col justify-between rounded-xl bg-[#f5edde] p-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="120"
          >
            <div>
              <div class="mb-6 overflow-hidden rounded-lg aspect-square">
                <img :alt="product.alt" :src="product.image" class="object-cover w-full h-full">
              </div>
              <h3 class="mb-2 text-xl font-bold text-[#1e1b13]" style="font-family: 'Noto Serif', serif;">
                {{ product.title }}
              </h3>
              <p class="mb-4 text-sm text-[#59413e]">{{ product.description }}</p>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-bold text-[#650003]">{{ product.price }}</span>
              <button class="rounded-full bg-[#fe8846] p-2 text-[#6a2a00]">
                <span class="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>

          <div
            class="flex items-center gap-6 rounded-xl bg-[#e9e2d3] p-8 md:col-span-2 md:gap-8"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="180"
          >
            <div class="aspect-square w-1/3 overflow-hidden rounded-full border-4 border-[#fff8ef]">
              <img
                alt="Sambal mangga muda musiman dengan irisan mangga segar"
                class="object-cover w-full h-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzkZfQVrLwzokLdIg_K7OmooaMgAXJ4dWXJYdhtRBchI2YFIwXw2_o6COQvAjcHA8Eu-eAAINLt7aoG2HNEBTP-POJQXvec6IunZ8r3UnaN1gCM2uGP9IpdoITeYoHU-ERck62RJE6dR3V1FVtPnGO77IyasSf430t1_WgmiHo5l8-U3HalWnW75uTlKGxo3mizqweeyhEYH1iZUblhHIkff0Xspk9N99cKK2Ns8Ea3fc8RafMjPH5tQq0ckjNPFJu8rL89rEPaXA"
              >
            </div>
            <div class="w-2/3">
              <span class="mb-2 inline-block rounded-full bg-[#650003] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                Edisi Musiman
              </span>
              <h3 class="mb-2 text-2xl font-bold text-[#650003]" style="font-family: 'Noto Serif', serif;">
                Sambal Mangga Muda
              </h3>
              <p class="mb-4 text-sm text-[#59413e]">
                Tersedia hanya saat masa panen. Perpaduan manis, asam, dan pedas yang segar.
              </p>
              <button class="border-b-2 border-[#8c0d0d] pb-1 text-sm font-bold text-[#650003]">
                Beri tahu saat tersedia
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="overflow-hidden bg-[#fff8ef] py-20 lg:py-32">
        <div class="px-6 mx-auto max-w-7xl lg:px-8">
          <div class="mb-16 text-center lg:mb-20" data-aos="fade-up" data-aos-duration="800">
            <h2 class="text-4xl font-bold text-[#1e1b13]" style="font-family: 'Noto Serif', serif;">
              Cerita dari Meja Makan
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-duration="900">
            <Swiper
              :modules="[SwiperAutoplay]"
              :loop="true"
              :allow-touch-move="false"
              :grab-cursor="false"
              :speed="5000"
              :autoplay="{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }"
              :breakpoints="{
                0: { slidesPerView: 1.1, spaceBetween: 16 },
                768: { slidesPerView: 2.1, spaceBetween: 24 },
                1280: { slidesPerView: 3.1, spaceBetween: 32 },
              }"
              class="testimonials-swiper !overflow-visible"
            >
              <SwiperSlide
                v-for="(testimonial, index) in testimonialSlides"
                :key="`${testimonial.alt}-${index}`"
                class="h-auto"
              >
                <div class="h-full overflow-hidden rounded-lg bg-white editorial-shadow">
                  <img
                    :alt="testimonial.alt"
                    :src="testimonial.src"
                    class="aspect-[4/5] h-full w-full object-cover"
                  >
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section class="max-w-5xl px-6 py-20 mx-auto text-center lg:py-32">
        <div
          class="relative overflow-hidden rounded-xl bg-[#650003] p-10 md:p-16"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <div
            class="absolute inset-0 opacity-10"
            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdaDIg9gZQgWimr08fBrAhsw4ZOZH6Qai1Fk5vB16KBoO0NnTdxAsATC_1w8GGFIGaULFrBs-7IiIOrR_p6oWCpCuWrJdNcNEiSbzW16CMgDjhMaNokxCO8gEhpbmfK1FTQKS0kTwfEA-L79roMDG_mlTH7WQy8Pzo_QbmwiBeZwGn0Co9uZda63IxVnYE39mJNBK3Fus-MPcWAfMPrWmXK0D037XZY9rnojRC1wnAdKDKCVwhlnzHOknUgGxXT-yhLoEo0EOEKXs'); background-size: cover; background-position: center;"
          ></div>
          <div class="relative z-10">
            <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl" style="font-family: 'Noto Serif', serif;">
              Gabung Lingkar Rasa
            </h2>
            <p class="mx-auto mb-10 max-w-md text-lg text-[#ff9588]">
              Dapatkan akses lebih awal ke batch musiman dan resep rahasia bulanan dari Ibu Sundari.
            </p>
            <form class="flex flex-col max-w-md gap-4 mx-auto md:flex-row">
              <input
                class="flex-grow rounded-md border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#fe8846]"
                placeholder="Email Anda"
                type="email"
              >
              <button class="whitespace-nowrap rounded-md bg-[#fe8846] px-8 py-4 font-bold text-[#6a2a00]">
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.filled-star {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.editorial-shadow {
  box-shadow: 0 24px 48px -12px rgba(30, 27, 19, 0.06);
}

:deep(.testimonials-swiper .swiper-wrapper) {
  transition-timing-function: linear !important;
}

:deep(.testimonials-swiper .swiper-slide) {
  height: auto;
}
</style>
