<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'id',
    class: 'light',
  },
})

useSeoMeta({
  title: 'Kontak & Lokasi | Dapur Ibu Sundari',
  description: 'Hubungi Dapur Ibu Sundari untuk pemesanan, kerja sama, reseller, dan informasi lokasi resmi kami.',
})
</script>

<template>
  <div class="bg-[#fff8ef] text-[#1e1b13]">
    <main class="pb-20 pt-32">
      <section class="relative mx-auto mb-24 max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div
            class="md:col-span-7"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            <h1
              class="mb-8 text-5xl font-black leading-[0.92] tracking-tight text-[#650003] md:text-7xl lg:text-8xl"
              style="font-family: 'Noto Serif', serif;"
            >
              Terhubung <br>
              dengan Dapur <br>
              Kami.
            </h1>
            <p class="max-w-lg text-xl font-light leading-relaxed text-[#422820]">
              Baik Anda sedang mencari tingkat pedas tertentu, ingin menjadi reseller,
              atau ingin membawa warisan rasa kami ke rak toko Anda, kami siap menyambut Anda.
            </p>
          </div>

          <div
            class="relative hidden md:col-span-5 md:block"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            <div class="absolute right-0 top-[-3rem] h-96 w-72 rotate-3 overflow-hidden rounded-lg bg-[#efe7d9] shadow-sm">
              <img
                alt="Cobek batu dengan cabai dan bawang"
                class="h-full w-full object-cover contrast-125 grayscale-[0.2]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI-E0YBczSZTBVuyMZwH8MufPo0GgGAXoaDlkphhDRvMLyV1_u2nnFJfrArrku7bGphyTs3kshKDTTopN-XAsh12T475dlLLkDeItoEWdHrx_mlX-pY2-dPymJKiNiK-maGpuabQSBtkd__YM4mYzTIS6U692yyKx0ltOxVEPilzh_FQwPYzFveflIIHvjdBlB5stiuG2K8-MsQrrgNt7vIWRGCJPDau8FWM1WLnAx01_WcI_ISxJTp_yDr1-Y5-4-vzsiV-s9Wxk"
              >
            </div>
            <div class="absolute left-[-3rem] top-24 h-64 w-64 -rotate-6 overflow-hidden rounded-md border-4 border-[#fff8ef] bg-[#fe8846] shadow-md">
              <img
                alt="Sudut dapur tradisional Indonesia"
                class="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCedvrgmfXPmOP2VJo7s6-geUG3vFIG6dJa_mwpi37yRTySsrKhUZduybrr60yRQYJtd8TzLfkkruUeity0pop7J5dHG5DZ30BlF2KUxRB6Huk6h1S79-jgaFNp1YqNN7mo9bJ8HgN7d46Bh_K5mOK6PAn0PdrATALeEMO_GqlHZ3-hbGhpbzJJngyh-pEoizq_8E3YH-O1WnIdczPIvOxBB0ouwdawROO5ZTPH0BNbRJklrI4wKX-1JfI-5EApYR1BlbgfmWKZd4g"
              >
            </div>
          </div>
        </div>
      </section>

      <section class="mb-24 bg-[#fbf3e4] py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div class="space-y-12 lg:col-span-4">
              <div
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h3
                  class="mb-6 text-2xl font-bold text-[#650003]"
                  style="font-family: 'Noto Serif', serif;"
                >
                  Kanal Langsung
                </h3>
                <a
                  class="group flex items-center rounded-xl bg-white p-6 transition-all hover:bg-[#ffdbcb]"
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="material-symbols-outlined mr-4 text-4xl text-[#9e4200]">chat_bubble</span>
                  <div>
                    <p class="mb-1 text-sm font-bold uppercase tracking-[0.2em] text-[#422820]">Pesan WhatsApp</p>
                    <p class="text-lg font-bold text-[#1e1b13]">+62 812 3456 7890</p>
                  </div>
                  <span class="material-symbols-outlined ml-auto opacity-0 transition-opacity group-hover:opacity-100">arrow_forward</span>
                </a>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="80"
              >
                <h3
                  class="mb-6 text-2xl font-bold text-[#650003]"
                  style="font-family: 'Noto Serif', serif;"
                >
                  Lokasi Kami
                </h3>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <span class="material-symbols-outlined mr-3 mt-1 text-[#9e4200]">location_on</span>
                    <p class="leading-relaxed text-[#422820]">
                      Jl. Warung Jati Barat No. 12<br>
                      Pasar Minggu, Jakarta Selatan<br>
                      DKI Jakarta, 12540
                    </p>
                  </div>
                  <div class="flex items-center">
                    <span class="material-symbols-outlined mr-3 text-[#9e4200]">schedule</span>
                    <p class="text-[#422820]">Senin - Sabtu: 09.00 - 17.00</p>
                  </div>
                </div>
              </div>

              <div
                class="pt-4"
                data-aos="fade-up"
                data-aos-duration="850"
                data-aos-delay="140"
              >
                <div class="aspect-square w-full overflow-hidden rounded-xl bg-[#e9e2d3] grayscale">
                  <img
                    alt="Peta lokasi Jakarta"
                    class="h-full w-full object-cover opacity-70"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs3KnUcc5CDdT7LOKZYm3GZPFl5UA0ZxNwZyjaxXmn2IkESPRdlBglw-NNhRWwsSwYLstfdmKSwREFH88fyUnpEGQCalb1XDbH8LFU4rmSLuySL7LyheNsXdZwAUun_jcSEl2atW0HPEeQHeKQh09B_r7WNtt7Pz2_dzAMUttM1ixtEwuOc3CGz5ZmMfccamJtNmFgrWInTjEUFuyB88qEtNTLFMJFPODQM2k4errSh_KNYcTjkz-eepy2R4XkgTnz6n2mxADI2XA"
                  >
                </div>
              </div>
            </div>

            <div class="lg:col-span-8">
              <div
                class="rounded-2xl border border-[#e1bfba]/10 bg-white p-8 shadow-sm md:p-16"
                data-aos="fade-left"
                data-aos-duration="900"
              >
                <h2
                  class="mb-2 text-4xl font-bold text-[#1e1b13]"
                  style="font-family: 'Noto Serif', serif;"
                >
                  Formulir Pertanyaan
                </h2>
                <p class="mb-10 text-[#422820]">
                  Punya pertanyaan tentang resep warisan, kerja sama, atau peluang grosir?
                </p>
                <form class="space-y-8">
                  <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div class="space-y-2">
                      <label class="px-1 text-sm font-bold text-[#422820]">NAMA ANDA</label>
                      <input
                        class="w-full rounded-md bg-[#e9e2d3] px-4 py-4 outline-none transition-all focus:ring-2 focus:ring-[#9e4200]"
                        placeholder="Ibu/Bapak..."
                        type="text"
                      >
                    </div>
                    <div class="space-y-2">
                      <label class="px-1 text-sm font-bold text-[#422820]">ALAMAT EMAIL</label>
                      <input
                        class="w-full rounded-md bg-[#e9e2d3] px-4 py-4 outline-none transition-all focus:ring-2 focus:ring-[#9e4200]"
                        placeholder="email@example.com"
                        type="email"
                      >
                    </div>
                  </div>

                  <div class="space-y-2">
                    <label class="px-1 text-sm font-bold text-[#422820]">SUBJEK</label>
                    <select class="w-full appearance-none rounded-md bg-[#e9e2d3] px-4 py-4 outline-none transition-all focus:ring-2 focus:ring-[#9e4200]">
                      <option>Pertanyaan Umum</option>
                      <option>Grosir & Kerja Sama</option>
                      <option>Masukan Produk</option>
                      <option>Katering Acara</option>
                    </select>
                  </div>

                  <div class="space-y-2">
                    <label class="px-1 text-sm font-bold text-[#422820]">PESAN</label>
                    <textarea
                      class="w-full resize-none rounded-md bg-[#e9e2d3] px-4 py-4 outline-none transition-all focus:ring-2 focus:ring-[#9e4200]"
                      placeholder="Ceritakan kebutuhan Anda..."
                      rows="5"
                    ></textarea>
                  </div>

                  <button
                    class="w-full rounded-md bg-[#650003] px-12 py-4 text-lg font-bold text-white transition-transform hover:scale-[1.02] active:scale-95 md:w-auto"
                    style="font-family: 'Noto Serif', serif;"
                    type="submit"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto mb-24 max-w-7xl px-6 lg:px-8">
        <div class="mb-12 flex flex-col justify-between gap-4 border-b border-[#e1bfba]/30 pb-6 md:flex-row md:items-end">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2
              class="text-4xl font-black tracking-tight text-[#650003] md:text-5xl"
              style="font-family: 'Noto Serif', serif;"
            >
              Titik Penjualan Resmi
            </h2>
            <p class="mt-2 text-[#422820]">Temukan sambal Dapur Ibu Sundari di berbagai kanal resmi pilihan Anda.</p>
          </div>
          <div class="text-sm font-bold tracking-[0.2em] text-[#9e4200] underline underline-offset-8">
            LIHAT SEMUA RESELLER
          </div>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
          <a
            class="group relative col-span-1 flex h-64 flex-col justify-between overflow-hidden rounded-xl bg-[#EE4D2D] p-8 text-white md:col-span-2"
            href="#"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div class="z-10">
              <span class="text-xs font-bold tracking-[0.2em] opacity-80">BELANJA ONLINE</span>
              <h4 class="mt-2 text-3xl font-bold">Shopee Official</h4>
            </div>
            <div class="z-10 inline-flex items-center font-bold transition-transform group-hover:translate-x-2">
              Kunjungi Toko <span class="material-symbols-outlined ml-2">open_in_new</span>
            </div>
            <div class="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
          </a>

          <a
            class="group relative col-span-1 flex h-64 flex-col justify-between overflow-hidden rounded-xl bg-[#03AC0E] p-8 text-white"
            href="#"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="90"
          >
            <div class="z-10">
              <span class="text-xs font-bold tracking-[0.2em] opacity-80">MARKETPLACE</span>
              <h4 class="mt-2 text-2xl font-bold">Tokopedia</h4>
            </div>
            <span class="material-symbols-outlined z-10 text-3xl transition-transform group-hover:rotate-45">arrow_outward</span>
          </a>

          <a
            class="group relative col-span-1 flex h-64 flex-col justify-between overflow-hidden rounded-xl bg-[#0095DA] p-8 text-white"
            href="#"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="160"
          >
            <div class="z-10">
              <span class="text-xs font-bold tracking-[0.2em] opacity-80">PREMIUM</span>
              <h4 class="mt-2 text-2xl font-bold">Blibli</h4>
            </div>
            <span class="material-symbols-outlined z-10 text-3xl transition-transform group-hover:rotate-45">arrow_outward</span>
          </a>

          <div class="col-span-1 mt-12 grid grid-cols-1 gap-12 md:col-span-4 md:grid-cols-3">
            <div
              class="border-l-4 border-[#fe8846] py-2 pl-6"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h5 class="mb-2 text-xl font-bold" style="font-family: 'Noto Serif', serif;">Jakarta Selatan</h5>
              <p class="text-sm font-medium leading-relaxed text-[#422820]">Grand Lucky SCBD, Kemang Organic, FoodHall Senayan City.</p>
            </div>
            <div
              class="border-l-4 border-[#fe8846] py-2 pl-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="90"
            >
              <h5 class="mb-2 text-xl font-bold" style="font-family: 'Noto Serif', serif;">Bali & Sekitarnya</h5>
              <p class="text-sm font-medium leading-relaxed text-[#422820]">Pepito Market Canggu, Bali Buda Ubud, Bintang Supermarket.</p>
            </div>
            <div
              class="border-l-4 border-[#fe8846] py-2 pl-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="180"
            >
              <h5 class="mb-2 text-xl font-bold" style="font-family: 'Noto Serif', serif;">Surabaya</h5>
              <p class="text-sm font-medium leading-relaxed text-[#422820]">Hokky Graha Famili, Papaya Fresh Gallery Margorejo.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
