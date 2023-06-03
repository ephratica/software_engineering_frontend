<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    color: String,
    route: String,
    label: String,
    default: () => ({
      color: "bg-gradient-success",
      label: "Find Out More",
    }),
  },
});
</script>
<template>
  <div class="card h-100">
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <a :href="action.route" class="d-block blur-shadow-image">
        <img :src="image" :alt="title" class="img-fluid border-radius-lg" />
      </a>
    </div>
    <div class="card-body text-center">
      <h5 class="font-weight-normal">
        <a class="" href="javascript:;">{{ title }}</a>
      </h5>
      <p class="mb-0">
        {{ description }}
      </p>
    </div>
    <div class="card-footer">
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-sm mb-0 mt-3" :class="action.color">
          批改试卷
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.two-lines {
  display: inline-block;
  height: 2em;
}
</style>
