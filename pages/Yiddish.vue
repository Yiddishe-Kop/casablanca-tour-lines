<template>
  <main class="relative bg-plane text-brand font-heebo" dir="rtl">
    <nav
      class="absolute top-0 z-20 flex items-center justify-between w-full px-6 py-4"
    >
      <a href="/"><img src="/img/logo.png" class="w-28" /></a>
      <a
        href="#contact"
        class="px-4 py-1.5 mr-6 transition transform hover:scale-105 text-sm tracking-wider text-orange-100 uppercase rounded-full bg-brand"
        >כ׳וויל פארן</a
      >
    </nav>
    <img
      src="/img/shaar.jpg"
      class="absolute top-0 z-0 w-full feather-bottom"
    />
    <div class="relative px-2 pt-32 text-center">
      <div class="flex items-center justify-center py-24">
        <h1 class="relative font-casablanca text-8xl sm:text-9xl md:text-huge">
          <span>ישועות<br />אין טולאל</span>
          <span
            class="absolute bottom-0 px-3 py-1 text-4xl transform translate-y-6 bg-orange-100 end-0 bg-opacity-80 text-amber-800 rotate-3"
            >מאראקא</span
          >
        </h1>
      </div>
      <h3 class="text-3xl font-black sm:text-4xl md:text-5xl text-amber-900">
        ביים הילולא פונעם הייליגע צדיק
      </h3>
      <h1 class="mt-1 text-4xl font-black text-brand sm:text-5xl md:text-6xl">
        רבינו יצחק אבוחצירא זי״ע
      </h1>
    </div>
    <img
      src="/img/grave.jpg"
      class="relative bottom-0 z-0 w-full feather-top"
    />

    <section class="flex flex-col items-center px-4 pb-32">
      <img
        src="/img/logo-wings.png"
        class="object-contain h-56 transform -translate-y-1/3 mxuto"
      />

      <div
        class="flex flex-col items-center justify-center md:flex-row md:space-s-12"
      >
        <div class="relative -mt-16 sm:m-0 sm:-mt-24">
          <div class="flex flex-row-reverse items-center justify-center">
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
              class="px-10 py-4 text-center transform bg-white shadow-md rotate-6"
            >
              <p class="text-5xl font-black sm:text-6xl">נאר 40</p>
              <p class="text-lg font-bold sm:text-xl whitespace-nowrap">
                טיקעטס קיין מאראקא!
              </p>
            </div>
          </div>
        </div>

        <article class="max-w-lg mt-40 text-lg md:m-0">
          <!-- <div class="hidden shape md:block"></div> -->
          <div class="space-y-2">
            <p>
              אין די טעג ווען א מגיפה פארט ארום די וועלט, ווער דארף נישט קיין
              ישועה... יעדער יאר פארן מיר צו מתפלל זיין אויפן ציון פון די
              הייליגע צדיקים פון די פריערדיגע דורות אין מאראקא, אבער דער יאר די
              גרעניצן פון מאראקא זענען פארשלאסן צוליב דעם קאראנא מגיפה.
            </p>
            <p class="text-xl font-bold">
              מיטן אויבערשטערנ׳ס הילף, קאזאבלאנקא טורס האבן באקומען 40 וויזאס
              ספעציעל פארן פייערן די הילולא ביים יארצייט פונעם הייליגע צדיק בעל
              הישועות רבינו יצחק אבוחצירא זי״ע.
            </p>
            <p>
              אויב ביזטו אינטרעסירט צו זיין פון דער 40 יחידי סגולה וואס וועלן
              האבן די זכיה צו פארן קיין מאראקא דער יאר פאר די אכט-טאגיגע נסיעה,
              צוזאמען מיט א דערהויבענע שבת אין א ספעציעלע דערהויבענע אטמאספערע -
            </p>
            <p class="pt-2 text-xl font-bold uppercase sm:text-2xl">
              אייל זיך צו און שרייבט זיך איין היינט!
            </p>
          </div>
        </article>
      </div>
    </section>

    <section
      id="contact"
      class="flex flex-col items-center px-4 text-gray-100 py-14 bg-brand"
    >
      <h2 class="text-5xl font-bold">זייט בקשר</h2>
      <div
        class="flex flex-col items-center mt-16 space-y-4 text-2xl font-extrabold"
      >
        <a
          href="https://wa.me/19179829999?text=I%20would%20like%20to%20sign%20up%20for%20the%20trip%20to%20Morocco"
          class="flex items-center space-s-1"
        >
          <img src="/img/whatsapp-icon.png" class="w-8" />
          <span><span class="font-normal">(+1)</span> 917-982-9999</span>
        </a>
        <a
          href="https://wa.me/972528800050?text=I%20would%20like%20to%20sign%20up%20for%20the%20trip%20to%20Morocco"
          class="flex items-center text-lg font-normal space-s-1"
        >
          <img src="/img/whatsapp-icon.png" class="w-5" />
          <span>(+972) 052-8800050</span>
        </a>
      </div>

      <div class="flex items-center mt-4 text-xl space-s-4">
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
        <input type="hidden" name="form-name" value="morocco-signup" />
        <input
          v-model="form.name"
          type="text"
          name="name"
          placeholder="נאמען"
          class="form-input"
        />
        <input
          v-model="form.email"
          type="email"
          name="email"
          placeholder="אימעיל"
          class="form-input"
        />
        <input
          v-model="form.phone"
          type="tel"
          name="phone"
          placeholder="טלפון"
          class="form-input"
        />
        <p class="py-2 text-center">
          <button
            type="submit"
            class="px-6 py-2 text-sm font-semibold tracking-wider text-orange-800 uppercase transition transform bg-orange-100 rounded-full hover:scale-105 focus:outline-none"
          >
            איך וויל זיך מצטרף זיין
          </button>
        </p>
        <p v-if="message" class="pt-4 text-center text-brand">
          <span class="px-4 py-2 bg-orange-100 rounded-md">{{ message }}</span>
        </p>
      </form>
    </section>

    <video
      src="/video/yiddish.mp4"
      controls
      autoplay
      muted
      class="w-full bg-orange-100 outline-none"
    ></video>

    <section class="flex flex-col items-center text-gray-100 bg-brand">
      <h2 class="mt-12 text-4xl font-bold">שבת אין מאראקעש</h2>
      <h5 class="mt-2 text-2xl text-orange-200 uppercase">לוקסוריעזע האטעלן</h5>
      <div
        class="flex items-stretch w-full px-6 overflow-x-auto space-s-6 py-14"
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
      <div class="relative z-20 flex flex-col space-y-6 sm:pe-8 py-14">
        <div class="space-y-2 text-xl text-center sm:text-end">
          <p>גלאט כשר׳ע מאלצייטן אויף א הויכע סטאנדארט</p>
          <p>אונטער די השגחה פון</p>
          <p>רבי שניאור זלמן רווח שליט״א</p>
        </div>
        <img src="/img/kashrus.png" class="self-center sm:self-end w-28" />
      </div>

      <div class="relative h-96">
        <image-slider :images="images.food" class="w-full h-full" />
        <svg
          style="color: #402140"
          class="absolute inset-y-0 hidden w-48 h-full transform translate-x-1/2 start-0 sm:block"
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
        <image-slider :images="images.music" class="w-full h-full" />
        <svg
          class="absolute inset-y-0 hidden w-48 h-full transform -translate-x-1/2 end-0 text-brand sm:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>

      <div
        class="relative z-20 flex flex-col row-start-1 space-y-6 sm:row-start-auto sm:ps-8 py-14"
      >
        <div class="space-y-2 text-xl text-center sm:text-start">
          <p>מאראקאנער מוזיק מיט לאקאלע מוזיקאנטן יעדער אוונט אינעם האטעל</p>
        </div>
      </div>
    </section>

    <section class="relative">
      <img src="/img/tour.jpg" class="relative bottom-0 z-0 w-full" />
      <div
        class="absolute flex items-center justify-center bottom-6 right-4 left-4"
      >
        <NuxtLink
          to="/"
          class="text-lg text-white underline hover:text-orange-200"
          >English</NuxtLink
        >
      </div>
    </section>
  </main>
</template>

<script>
import ImageSlider from "~/components/ImageSlider";

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
      window.fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": e.target.getAttribute("name"),
          ...this.form,
        }),
      })
        .then(() => (this.message = "יישר כח פארן זיך אינטרעסירן!"))
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
