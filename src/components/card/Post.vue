<template>
  <a
    :href="item.link"
    target="_blank"
    rel="noopener noreferrer"
    class="rounded-3xl overflow-hidden bg-white group border border-gray-200"
  >
    <div class="aspect-w-3 aspect-h-2 rounded-xl overflow-hidden">
      <img
        :src="
          item.image && item.image.url
            ? item.image.url
            : '/assets/images/cover.webp'
        "
        :alt="item.title"
        class="w-full h-full object-cover lg:group-hover:scale-105 duration-300 ease-in-out"
      />
    </div>
    <div class="p-6 md:p-4 xl:p-6">
      <div
        class="headline-3 text-gray-900 line-clamp-3 lg:group-hover:text-primary duration-300 ease-in-out uppercase"
      >
        {{ item.title }}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["item"],
};
</script>
