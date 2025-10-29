<template>
  <div>
    <div
      class="collapsible mb-[12px] last:mb-0"
      :class="[
        classAccordion,
        collapseActive === uuId ? 'active' : 'cursor-pointer',
      ]"
    >
      <div
        @click="isMega ? () => {} : toggleCollapse()"
        class="flex items-center justify-between cursor-pointer group"
      >
        <h4
          class="flex-1 font-bold text-gray-700"
          :class="[
            collapseActive === uuId ? 'text-primary-600' : '',
            titleClass,
          ]"
        >
          <template v-if="$slots.title">
            <slot name="title" />
          </template>
          <template v-else> {{ title }}</template>
        </h4>

        <div
          @click="isMega ? toggleCollapse() : () => {}"
          class="flex-shrink-0 duration-300 min-w-5 flex justify-end headline-2"
          :class="[collapseActive === uuId ? 'opacity-0' : 'opacity-100']"
        >
          +
        </div>
      </div>

      <!-- Content -->
      <div
        class="collapsible-content"
        :class="collapseActive === uuId ? 'mt-4' : ''"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isFirst: { type: Boolean, default: false },

    title: {
      type: String,
      default: "",
    },
    titleClass: {
      type: String,
      default: "",
    },

    collapseActive: {
      type: Number,
      default: null,
    },

    classAccordion: {
      type: String,
      default: "collapsible",
    },

    isMega: { type: Boolean, default: false },
  },

  data() {
    return {
      index: Math.random() * 999,
    };
  },

  watch: {
    isFirst(newFirst) {
      if (newFirst) {
        this.toggleCollapse();
      }
    },
  },

  computed: {
    uuId() {
      return Math.ceil(Math.random() * 99999);
    },
  },
  created() {
    if (this.isFirst) {
      this.toggleCollapse();
    }
  },

  mounted() {
    document
      .querySelectorAll(".collapsible .collapsible-content")
      .forEach(function (el) {
        el.style.maxHeight = el.scrollHeight + "px";
      });
  },

  methods: {
    toggleCollapse() {
      const _collapse = this.collapseActive !== this.uuId ? this.uuId : null;
      this.$emit("onCollapse", _collapse);
    },
  },
};
</script>

<style lang="scss" scoped>
.collapsible {
  @apply p-4 md:p-4 xl:p-6 bg-white border-l-4 border-primary;
  .collapsible-content {
    @apply overflow-hidden duration-300 ease-out;
  }
  &:not(.active) {
    @apply bg-gray-100 border-transparent;
    .collapsible-content {
      max-height: 0 !important;
    }
  }
}
</style>
