<template>
  <div class="space-y-3 group">
    <a
      :href="item.link"
      target="_blank"
      rel="noopener noreferrer nofollow"
      class="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden block"
    >
      <img
        :src="item.image"
        :alt="item.title"
        class="w-full h-full object-cover lg:group-hover:scale-105 duration-300 ease-in-out"
      />
    </a>
    <div class="space-y-2 px-3">
      <a
        :href="item.link"
        target="_blank"
        rel="noopener noreferrer nofollow"
        class="headline-3 text-gray-900 uppercase lg:group-hover:text-primary duration-300 ease-in-out"
      >
        {{ item.title }}
      </a>
      <div v-if="item.position && item.description">
        <div class="body-2 text-gray-700">
          {{ item.position }}
        </div>
        <div class="body-2 text-gray-700">
          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>
