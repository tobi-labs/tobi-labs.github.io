<template>
  <span></span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "Default description for your site.",
    },
    image: {
      type: String,
      default: "/default-image.png",
    },
    url: {
      type: String,
      default: window.location.href,
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        { hid: "og:title", property: "og:title", content: this.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description,
        },
        { hid: "og:image", property: "og:image", content: this.image },
        { hid: "og:url", property: "og:url", content: this.url },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.image,
        },
      ],
    };
  },
};
</script>
