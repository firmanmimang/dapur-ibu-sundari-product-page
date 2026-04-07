<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'id',
    class: 'light',
  },
})

useSeoMeta({
  title: 'Warisan Kami | Dapur Ibu Sundari',
  description: 'Kisah warisan Dapur Ibu Sundari, perjalanan rasa, bahan baku pilihan, dan filosofi sambal tradisional yang diracik lintas generasi.',
})
</script>

<template>
  <div class="bg-[#fff8ef] text-[#1e1b13]">
    <main class="pt-24">
      <section class="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div
            class="z-10 lg:col-span-7"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <span class="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-[#9e4200]">
              Sejak 1964
            </span>
            <h1
              class="mb-8 text-5xl font-black leading-tight text-[#650003] md:text-7xl lg:text-8xl"
              style="font-family: 'Noto Serif', serif;"
            >
              Warisan Rasa <br>
              dari Rempah <br>
              yang Dijemur Matahari
            </h1>
            <p class="max-w-xl text-lg leading-relaxed text-[#59413e] md:text-xl">
              Dari dapur hangat di Indonesia, Ibu Sundari memulai perjalanan rasa yang hidup lintas generasi.
              Lebih dari sekadar sambal, inilah penghormatan pada tradisi yang diracik perlahan dengan sabar.
            </p>
          </div>

          <div
            class="relative lg:col-span-5"
            data-aos="fade-left"
            data-aos-duration="950"
            data-aos-delay="100"
          >
            <div class="editorial-shadow aspect-[4/5] overflow-hidden rounded-lg bg-[#efe7d9]">
              <img
                alt="Cobek batu tradisional Indonesia"
                class="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5BX8YP7xuqGL35P2JKPY90J5z7_zT05q_9ZQCcjlxU35WLP2JU_9ZinWn9PZxK0iDhPaDQGeuBZ-ZWVkKJQ4BFP7zdmVn0SWmd2_32ZqsFpcQv9_7OuE42T_3pVoC_NQ00hiJMqmeHIqWIT560GtGUbUzGD-ZjXEc7Q9l4keTHKQEW1udd7m7jlHKkv2qVWizv6W4Z3TcwkvJla7-B4LlOt8m_qQuWaIac9DH6jQ61EpKzOOsOneS7c5dU6IZPNrOt_J6-bm5-vI"
              >
            </div>
            <div class="absolute -bottom-10 -left-10 -z-10 h-48 w-48 rounded-full bg-[#fe8846] opacity-20 blur-3xl"></div>
          </div>
        </div>
      </section>

      <section class="bg-[#fbf3e4] px-6 py-24 lg:px-8">
        <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 md:grid-cols-2">
          <div
            class="order-2 md:order-1"
            data-aos="fade-up"
            data-aos-duration="850"
          >
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4 pt-12">
                <div class="h-64 overflow-hidden rounded-lg shadow-md">
                  <img
                    alt="Cabai merah segar"
                    class="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDAUgLg6XOy7lDQtKjjJ6FKPcmHDscIEgRKKFq3rtjWepF6ei4oWH6rc0pt4g7CGM6f1rGdktxc3el2PLvcIY-yfF3JBbNLEFMIoq5augdq8n_HASXS7ciTNTaOVYVlUwpq9aMXYztX0jDXHADi9RwBnTaur8L9SZCDz1-CWgyoUvXEMvbTSs584eoy3txcssBjJvbDt2OAqsXIR0-iWmoqR-shBlC3qhGrahm0XpZfjm2bhsLZme3idJpf31oJGEfzX8mpuGzToQ"
                  >
                </div>
                <div class="rounded-lg bg-[#8c0d0d] p-8 text-[#ff9588]">
                  <span class="material-symbols-outlined mb-4 text-4xl">restaurant</span>
                  <h3 class="mb-2 text-2xl font-bold" style="font-family: 'Noto Serif', serif;">
                    Rasio Rahasia
                  </h3>
                  <p class="text-sm opacity-90">
                    Diturunkan lewat buku resep tulisan tangan, racikan kami tetap dijaga tanpa kompromi modern.
                  </p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="rounded-lg border border-[#e1bfba]/30 bg-[#e9e2d3] p-8">
                  <h4 class="mb-2 text-4xl font-black text-[#650003]" style="font-family: 'Noto Serif', serif;">
                    100%
                  </h4>
                  <p class="font-bold text-[#422820]">Bahan Lokal</p>
                </div>
                <div class="h-80 overflow-hidden rounded-lg shadow-md">
                  <img
                    alt="Proses meracik sambal di dapur tradisional"
                    class="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGvGnMN4eCv9Z1i_1IrgHXij1987_LN5PFxYDMjC0fTkjZ6MOMPyseV8l6ySnWlUaGnnYw8NpV_dtzOF1qt25xJxIk69eS36Ikw7dgPTQQR0pHfjZUcUc0zpvyOt_kD2v8delygQFYiQzwXBdt57qKmCC0Bn9jPcU9GDS3zRMrH9egZbcaz3Ne3CwUfaPLYaMOlVPn3yZCeE07jblLXcZ9vuLrQNmWpzFQUpHguyANoFyvXWJZefpX0wLBFAZ37PkD4SEWqpwhZak"
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            class="order-1 md:order-2"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <h2
              class="mb-8 text-4xl font-bold text-[#1e1b13] md:text-5xl"
              style="font-family: 'Noto Serif', serif;"
            >
              Tungku Warisan
            </h2>
            <div class="space-y-6 text-lg leading-relaxed text-[#59413e]">
              <p>
                Dapur Ibu Sundari lahir dari keyakinan sederhana: rasa terbaik selalu datang dari kesabaran.
                Selama puluhan tahun, Ibu Sundari menyempurnakan Sambal Terasi dan Sambal Bawang dengan hasil panen dari lereng vulkanik di sekitarnya.
              </p>
              <p>
                Setiap jar yang kami buat hari ini mengikuti filosofi “ulek perlahan” yang sama.
                Kami menolak blender industri yang memanaskan cabai dan meredupkan karakternya.
                Sebagai gantinya, kami memakai teknik tumbuk batu yang menjaga minyak alami, aroma, dan jiwa rempah.
              </p>
              <div class="pt-4">
                <NuxtLink
                  class="inline-flex items-center border-b-2 border-[#9e4200] pb-1 font-bold text-[#650003] transition-colors hover:text-[#9e4200]"
                  to="/products"
                >
                  Lihat Koleksi Sambal
                  <span class="material-symbols-outlined ml-2">arrow_forward</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div
          class="editorial-shadow relative flex flex-col items-center gap-12 overflow-hidden rounded-xl bg-white p-8 md:flex-row md:p-16"
          data-aos="zoom-in-up"
          data-aos-duration="900"
        >
          <div class="relative w-full md:w-1/3">
            <div class="aspect-square overflow-hidden rounded-full border-8 border-[#f5edde]">
              <img
                alt="Potret Ibu Sundari"
                class="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdXsPtcsUuL3ntrs25uBbwarfI62eFfbQoTSIuYUxAjc8nyyAZ1M9YqIcriBE2rQ5z7B9e6MQtsIusYGlBuJxQtrOO_PiP33r344G1ggwP1y88PFXf0X8fyNnAzacJcnbp3mm_3Ddz4bhPx4LWGRE0357U6iIgAUjvKnTKb1FXWeVVqfSUhdAhT2d79cimQoDf3Q2DEF67Zb4DlvAMCRlsvi8u82jG03KrD-o63pp-83-iY3W5_C8sTHkL5I2502yFG-fSfxdrmrI"
              >
            </div>
            <div class="absolute -bottom-4 -right-4 rotate-12 rounded-full bg-[#9e4200] px-4 py-4 font-bold italic text-white shadow-lg" style="font-family: 'Noto Serif', serif;">
              Ibu Sundari
            </div>
          </div>

          <div class="w-full md:w-2/3">
            <span class="material-symbols-outlined mb-4 text-6xl text-[#fe8846] opacity-40">format_quote</span>
            <blockquote
              class="mb-8 text-2xl italic leading-snug text-[#1e1b13] md:text-3xl"
              style="font-family: 'Noto Serif', serif;"
            >
              "Sambal adalah denyut meja makan Indonesia. Ia bukan hanya pedas, tetapi percakapan antara tanah, matahari, dan tangan yang meraciknya."
            </blockquote>
            <h3 class="mb-4 text-2xl font-bold text-[#650003]" style="font-family: 'Noto Serif', serif;">
              Catatan dari Sang Peracik
            </h3>
            <p class="leading-relaxed text-[#59413e]">
              Kini saat anak dan cucu membantu mengelola dapur, saya masih mencicipi setiap batch secara pribadi.
              Kami tetap mengambil bawang dari petani kecil Brebes dan cabai dari dataran tinggi Jawa Barat.
              Bagi kami, kualitas bukan sekadar ukuran, melainkan kehormatan keluarga.
            </p>
          </div>
        </div>
      </section>

      <section class="border-t border-[#e1bfba]/20 bg-[#fff8ef] px-6 py-24 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <div
            class="mb-16 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2
              class="mb-4 text-4xl font-bold text-[#1e1b13] md:text-5xl"
              style="font-family: 'Noto Serif', serif;"
            >
              Akar Rasa
            </h2>
            <p class="mx-auto max-w-2xl text-[#422820]">
              Kami tidak sekadar memasak. Kami memilih bahan terbaik dari para petani lokal agar setiap sendok sambal terasa seperti perjalanan rasa Nusantara.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div
              class="flex flex-col justify-between rounded-lg bg-[#f5edde] p-8 transition-colors hover:bg-[#efe7d9] md:col-span-2 md:row-span-2"
              data-aos="fade-up"
              data-aos-duration="850"
            >
              <div>
                <span class="material-symbols-outlined mb-6 text-4xl text-[#650003]">eco</span>
                <h4 class="mb-4 text-2xl font-bold" style="font-family: 'Noto Serif', serif;">
                  Cabai dari Tanah Vulkanik
                </h4>
                <p class="text-[#59413e]">
                  Sumber pedas utama kami berasal dari cabai rawit yang tumbuh di tanah vulkanik kaya nutrisi, memberi kedalaman rasa dan intensitas yang khas.
                </p>
              </div>
              <img
                alt="Latar cabai merah segar"
                class="mt-8 h-40 w-full rounded-md object-cover opacity-80 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0xds1TWxmH0Ozkra0Jf1qQmlsmdYdVMuKFhc2G_yL_blDXIKxCbxLnwc0pDb1SbFn9SGdol74N87MWAd71tpS_8E2KsJVPd12MPsTUayXngmjZH147XaKzozVEjhc8n6Id6CcQaeP3LW4zubxrtWDzU5xMwFsK_qgK1uArmsMj_iXzYFKgPQFTSTHArTYiDRhXIBOWV5Q8PiT20F_CKqHolX5s6Ui3VDPy7Fc2vv4wr-EnViLvVKDNQXxCFn8Eexzv7Io2WrHeV4"
              >
            </div>

            <div
              class="flex flex-col items-center justify-center rounded-lg bg-[#fe8846] p-6 text-center text-[#6a2a00]"
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="80"
            >
              <span class="material-symbols-outlined mb-2 text-4xl">local_shipping</span>
              <h4 class="mb-1 font-bold">Panen 24 Jam</h4>
              <p class="text-xs opacity-90">Dari kebun ke jar dalam waktu kurang dari satu hari.</p>
            </div>

            <div
              class="rounded-lg border border-[#e1bfba]/20 bg-[#e9e2d3] p-6"
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="140"
            >
              <h4 class="mb-2 font-bold text-[#650003]">Terasi Artisanal</h4>
              <p class="text-sm text-[#59413e]">
                Terasi fermentasi lambat yang kami ambil dari kampung pesisir tradisional di Cirebon.
              </p>
            </div>

            <div
              class="flex items-center justify-between rounded-lg bg-[#650003] p-8 text-white md:col-span-2"
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="220"
            >
              <div class="max-w-[60%]">
                <h4 class="mb-2 text-2xl font-bold" style="font-family: 'Noto Serif', serif;">
                  Komitmen untuk Lokal
                </h4>
                <p class="text-sm opacity-80">
                  Kami mendukung lebih dari 40 petani kecil lokal dengan rantai pasok yang lebih adil dan berkelanjutan.
                </p>
              </div>
              <span class="material-symbols-outlined text-6xl text-[#fe8846]/40">handshake</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
