<template>
  <section>
    <swiper
      :slidesPerView="1.2"
      :spaceBetween="20"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <CardMember :item="slide" :isPosition="true" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CardMember from "@/components/card/Member.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardMember,
  },
  props: {
    slides: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
<style lang="scss" scoped>
:deep(.jam-slider__container) {
  @apply flex;
}
</style>
