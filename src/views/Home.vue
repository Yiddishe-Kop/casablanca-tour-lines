<template>
  <main class="relative bg-plane text-brand">
    <nav
      class="absolute top-0 z-20 flex items-center justify-between w-full px-6 py-4"
    >
      <a href="/"><img src="/img/logo.png" class="w-28" /></a>
      <a
        href="#contact"
        class="px-4 py-1.5 mr-6 transition transform hover:scale-105 text-sm tracking-wider text-orange-100 uppercase rounded-full bg-brand"
        >Join now</a
      >
    </nav>
    <img
      src="/img/shaar.jpg"
      class="absolute top-0 z-0 w-full feather-bottom"
    />
    <div class="relative px-2 pt-32 text-center">
      <div class="py-24">
        <h1 class="relative font-black text-7xl sm:text-8xl md:text-9xl">
          <span>Miracles<br />in Toulal</span>
          <span
            class="absolute bottom-0 px-3 py-1 font-serif text-4xl transform -translate-x-full translate-y-6 bg-orange-100 bg-opacity-80 text-amber-800 -rotate-3"
            >Morocco</span
          >
        </h1>
      </div>
      <h3
        class="font-serif text-3xl font-black sm:text-4xl md:text-5xl text-amber-900"
      >
        At the Hillula of the Holy Tzaddik
      </h3>
      <h1
        class="mt-1 font-serif text-4xl font-black text-brand sm:text-5xl md:text-6xl"
      >
        Rabbi Yitzchok Abuchatzira zy"a
      </h1>
    </div>
    <img
      src="/img/grave.jpg"
      class="relative bottom-0 z-0 w-full feather-top"
    />

    <section class="flex flex-col items-center px-4 pb-32">
      <img
        src="/img/logo.png"
        class="w-64 mx-auto transform -translate-y-1/2"
      />

      <div
        class="flex flex-col items-center justify-center md:flex-row md:space-x-12"
      >
        <div class="relative -mt-16 sm:m-0 sm:-mt-24">
          <div class="flex items-center justify-center">
            <span
              class="-mr-8 font-black leading-none origin-right transform scale-x-75 text-huge sm:text-massive"
              >4</span
            >
            <img src="/img/plane-window.png" class="w-56 select-none sm:w-64" />
          </div>
          <div
            class="absolute flex justify-center w-full -bottom-12 sm:-bottom-16"
          >
            <div
              class="px-10 py-4 tracking-widest text-center transform bg-white shadow-md rotate-6"
            >
              <p class="text-lg font-bold sm:text-xl whitespace-nowrap">
                Tickets to Morroco
              </p>
              <p class="font-serif text-5xl font-black sm:text-6xl">ONLY!</p>
            </div>
          </div>
        </div>

        <article class="max-w-lg mt-40 text-lg md:m-0">
          <!-- <div class="hidden shape md:block"></div> -->
          <div class="space-y-2">
            <p>
              In these days when a pandemic is raging in the world, who does not
              need salvation, every year we travel to pray on the tombs of the
              holy Tzaddikim of previous generations in Morocco, however this
              year the borders of Morocco are closed due Corona pandemic.
            </p>
            <p class="text-xl font-bold">
              Fortunately, Casablanca Tour Lines has obtained 40 entry visas
              specialy for the celebration of the Yahrzeit of the holy Tzaddik
              Baal Yeshuat Rabbi Yitzchak Abuhatzira zy"a.
            </p>
            <p>
              If you're interested in being among those 40 individuals of virtue
              who will be privileged to arrive in Morocco this year for the
              magical eight-day journey, including an uplifiting Shabbat in a
              unique and uplifting atmosphere -
            </p>
            <p class="pt-2 text-xl font-bold uppercase sm:text-2xl">
              Hurry & sign up today!
            </p>
          </div>
        </article>
      </div>
    </section>

    <section
      id="contact"
      class="flex flex-col items-center px-4 text-gray-100 py-14 bg-brand"
    >
      <h2 class="text-5xl font-bold">Contact Us</h2>
      <div
        class="flex flex-col items-center mt-16 space-y-4 text-2xl font-extrabold"
      >
        <a
          href="https://wa.me/19179829999?text=I%20would%20like%20to%20sign%20up%20for%20the%20trip%20to%20Morocco"
          class="flex items-center space-x-1"
        >
          <img src="/img/whatsapp-icon.png" class="w-8" />
          <span><span class="font-normal">(+1)</span> 917-982-9999</span>
        </a>
        <a
          href="https://wa.me/972528800050?text=I%20would%20like%20to%20sign%20up%20for%20the%20trip%20to%20Morocco"
          class="flex items-center space-x-1 text-lg font-normal"
        >
          <img src="/img/whatsapp-icon.png" class="w-5" />
          <span>(+972) 052-8800050</span>
        </a>
      </div>

      <div class="flex items-center mt-4 space-x-4 text-xl">
        <a href="mailto:info@ctlmorocco.com">info@ctlmorocco.com</a>
        <span class="text-gray-400">|</span>
        <a href="https://www.ctlmorocco.com" target="_blank"
          >www.ctlmorocco.com</a
        >
      </div>

      <form
        @submit.prevent="submit"
        name="morocco-signup"
        netlify
        class="relative z-10 block max-w-full mt-20 space-y-2 w-96"
      >
        <input
          v-model="form.name"
          type="text"
          name="name"
          placeholder="Name"
          class="form-input"
        />
        <input
          v-model="form.email"
          type="email"
          name="email"
          placeholder="Email"
          class="form-input"
        />
        <input
          v-model="form.phone"
          type="tel"
          name="phone"
          placeholder="Tel"
          class="form-input"
        />
        <p class="py-2 text-center">
          <button
            type="submit"
            class="px-6 py-2 text-sm font-semibold tracking-wider text-orange-800 uppercase transition transform bg-orange-100 rounded-full hover:scale-105 focus:outline-none"
          >
            I want to join
          </button>
        </p>
        <p v-if="message" class="pt-4 text-center text-brand">
          <span class="px-4 py-2 bg-orange-100 rounded-md">{{ message }}</span>
        </p>
      </form>
    </section>

    <section
      class="flex flex-col items-center px-4 bg-gray-100 py-14 text-brand"
    >
      <video
        src="/video/english.mp4"
        controls
        class="w-full max-w-3xl bg-orange-100 rounded-md outline-none"
      ></video>
    </section>

    <section class="flex flex-col items-center text-gray-100 bg-brand">
      <h2 class="mt-12 font-serif text-4xl font-bold">Shabbos in Marakesh</h2>
      <h5 class="mt-2 font-serif text-2xl text-orange-200 uppercase">
        Luxury Hotels
      </h5>
      <div
        class="flex items-stretch w-full px-6 space-x-6 overflow-x-auto py-14"
      >
        <img
          v-for="i in 9"
          :key="i"
          :src="`/img/hotel/${i}.jpeg`"
          class="rounded-md h-72"
        />
      </div>
    </section>

    <section
      class="grid items-center grid-cols-1 sm:grid-cols-2 text-orange-50"
      style="background: #402140"
    >
      <div class="relative z-20 flex flex-col space-y-6 sm:pr-8 py-14">
        <div class="space-y-2 font-serif text-xl text-center sm:text-right">
          <p>Glatt Kosehr Gourmet meals</p>
          <p>under the strict kashrus of</p>
          <p>Rabbi Shneur Zalman Revach Shlita</p>
        </div>
        <img src="/img/kashrus.png" class="self-center sm:self-end w-28" />
      </div>

      <div class="relative h-96">
        <image-slider
          :images="images.food"
          class="w-full h-full"
        />
        <svg
          style="color: #402140"
          class="absolute inset-y-0 left-0 hidden w-48 h-full transform -translate-x-1/2 sm:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </section>

    <section
      class="grid items-center grid-cols-1 bg-brand sm:grid-cols-2 text-orange-50"
    >

      <div class="relative h-96">
        <image-slider
          :images="images.music"
          class="w-full h-full"
        />
        <svg
          class="absolute inset-y-0 right-0 hidden w-48 h-full transform translate-x-1/2 text-brand sm:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>

       <div class="relative z-20 flex flex-col row-start-1 space-y-6 sm:row-start-auto sm:pl-8 py-14">
        <div class="space-y-2 font-serif text-xl text-center sm:text-left">
          <p>Moroccan music with local musicians and orchestras</p>
          <p>Every evening at the hotel</p>
        </div>
      </div>

    </section>

    <section class="relative">
      <img src="/img/tour.jpg" class="relative bottom-0 z-0 w-full" />
    </section>
  </main>
</template>

<script>
import ImageSlider from "../components/ImageSlider.vue";

export default {
  components: { ImageSlider },
  data() {
    return {
      form: {},
      message: "",
      images: {
        food: [
          "/img/food/1.jpeg",
          "/img/food/2.jpeg",
          "/img/food/3.jpeg",
          "/img/food/4.jpeg",
          "/img/food/5.jpeg",
          "/img/food/6.jpeg",
          "/img/food/7.jpeg",
          "/img/food/8.jpeg",
          "/img/food/9.jpeg",
          "/img/food/10.jpeg",
        ],
        music: [
          "/img/music/1.jpeg",
          "/img/music/2.jpeg",
          "/img/music/3.jpeg",
          "/img/music/4.jpeg",
          "/img/music/5.jpeg",
        ],
      },
    };
  },
  methods: {
    submit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": e.target.getAttribute("name"),
          ...this.form,
        }),
      })
        .then(() => (this.message = "Thank you for your submission!"))
        .catch((error) => console.log(error));
    },
  },
};

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
.feather-bottom {
  -webkit-mask-image: linear-gradient(180deg, #000 0%, transparent 90%);
  mask-image: linear-gradient(180deg, #000 0%, transparent 90%);
}
.feather-top {
  -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 50%);
  mask-image: linear-gradient(180deg, transparent 0%, #000 50%);
}
.shape {
  shape-outside: polygon(0% 0%, 0% 0%, 50% 100%, 0% 100%);
  width: 300px;
  height: 500px;
  float: left;
  opacity: 0.2;
}
.form-input {
  @apply block w-full bg-gray-200 py-2 px-3 rounded-md focus:bg-gray-100 outline-none border-transparent focus:border-orange-500 border-2;
}
</style>
