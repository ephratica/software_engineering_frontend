<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    requierd: true,
    color: "black",
  },
  description: {
    type: String,
    required: true,
    color: "black",
  },
  price: {
    type: String,
    required: true,
    color: "black",
  },
  action: {
    type: Object,
    route: String,
    label: String,
    color: String,
    default: () => ({
      route: "javascript:;",
      label: "Read more",
      color: "black",
    }),
  },
});
</script>
<template>
  <div class="card card-blog card-background cursor-pointer">
    <div
        class="full-background"
        :style="{ backgroundImage: `url(${image})` }"
        loading="lazy"
    ></div>
    <div class="card-body">
      <div class="content-left text-start my-auto py-4">
        <h2 class="card-title">{{ title }}</h2>
        <p class="card-description">
          {{ description }}
        </p>
        <p class="card-description">
          {{ price }}
        </p>
        <a
            :href="action.route"
            class="text-sm icon-move-right"
            :class="`text-${action.color}`"
        >{{ action.label }}
          <i class="fas fa-arrow-right text-xs ms-1"></i>
        </a>
      </div>
    </div>
  </div>
</template>
