<template>
  <header
    class="inset-x-0 top-0 z-50 bg-white h-[70px] lg:h-[88px] sticky border-b border-gray-200"
  >
    <!-- Menu PC -->
    <div class="relative z-50 flex items-center justify-center h-full">
      <div class="container flex items-center justify-between">
        <a
          href="/"
          class="max-w-[113px] md:max-w-[185px] w-full block duration-300 ease-in-out"
          :class="isOpenMobile ? 'text-white' : 'text-gray-700'"
        >
          <LogoHeader />
        </a>
        <div class="flex items-center space-x-6">
          <button
            disabled
            class="btn button-2 max-md:h-9 !font-bold md:space-x-2.5 w-[98px] md:w-[147px] max-md:px-0 bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
          >
            <span>Get Tobi</span>
            <div class="icon-btn max-md:hidden">
              <IconArrow />
            </div>
          </button>
          <div
            class="md:hidden w-10 h-10 flex items-center justify-center"
            @click="handleMobile()"
          >
            <close v-if="isOpenMobile" />
            <IconHamburger v-else />
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed top-0 pt-[70px] h-screen w-full bg-black duration-300 ease-in-out"
      :class="isOpenMobile ? 'right-0' : '-right-full'"
    >
      <div class="p-6 space-y-10">
        <div class="space-y-3">
          <div class="body-2 font-medium text-gray-400">Explore</div>
          <div
            class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out"
          >
            <a
              href="https://docs.tobi.fun"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              What is Tobi?
            </a>
          </div>
          <div
            class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out"
          >
            <a
              href="https://docs.tobi.fun"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              How to Tobi?
            </a>
          </div>
          <div
            class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out"
          >
            <a
              href="https://docs.tobi.fun"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Why Tobi?
            </a>
          </div>
          <div
            class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out"
          >
            <a
              href="https://docs.tobi.fun"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              FAQs
            </a>
          </div>
        </div>
        <div class="space-y-3">
          <div class="body-2 font-medium text-gray-400">Contact Us</div>
          <div
            class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out"
          >
            <a
              href="https://docs.tobi.fun"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Partners & Integrations
            </a>
          </div>
          <div
            class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out"
          >
            <a
              href="https://docs.tobi.fun"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              General inquiries
            </a>
          </div>
          <div
            class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out"
          >
            <a
              href="https://www.linkedin.com/company/tobicopilot"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Careers
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import IconArrow from "@/components/icon/IconArrow.vue";
import IconHamburger from "@/components/icon/Hamburger.vue";
import LogoHeader from "@/components/icon/LogoHeader.vue";
import Close from "@/components/icon/Close.vue";

export default {
  components: {
    IconArrow,
    IconHamburger,
    LogoHeader,
    Close,
  },
  data() {
    return {
      isOpenMobile: false,
    };
  },
  methods: {
    handleMobile() {
      this.isOpenMobile = !this.isOpenMobile;
      document.body.style.overflow = this.isOpenMobile ? "hidden" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.header-social-icon {
  @apply text-gray-400 w-10 h-10 flex items-center justify-center rounded-xl lg:hover:bg-primary lg:hover:text-white duration-300 ease-in-out;
}
</style>
