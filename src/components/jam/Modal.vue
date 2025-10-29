<template>
  <transition leave-active-class="duration-200">
    <div
      v-show="show"
      class="fixed inset-0 z-[200] flex px-4 py-6 overflow-y-auto sm:px-0"
    >
      <transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="show"
          class="fixed inset-0 transition-all transform"
          @click="close"
        >
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
      </transition>

      <transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        enter-to-class="translate-y-0 opacity-100 sm:scale-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="translate-y-0 opacity-100 sm:scale-100"
        leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      >
        <div
          v-show="show"
          class="overflow-hidden transition-all bg-gray-900 transform rounded-3xl shadow-xl sm:w-full sm:mx-auto my-auto"
          :class="maxWidthClass"
        >
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
    },
    maxWidth: {
      default: "2xl",
    },
  },

  computed: {
    maxWidthClass() {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-[800px]",
      }[this.maxWidth];
    },
  },

  watch: {
    show(value) {
      if (value) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = null;
      }
    },
  },

  mounted() {
    document.addEventListener("keydown", this.closeOnEscape);
  },
  destroyed() {
    document.removeEventListener("keydown", this.closeOnEscape);
    document.body.style.overflow = null;
  },

  methods: {
    close() {
      this.$emit("close");
    },
    closeOnEscape(e) {
      if (e.key === "Escape" && this.show) {
        this.close();
      }
    },
  },
};
</script>
