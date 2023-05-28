<script lang="ts">
export default {
    props:['visibleSlide','index'],
    data() {
        return {
    };
  },
};
</script>

<template>
    <div class="carrousel-slide" v-show="visibleSlide===index">
        <slot></slot>
    </div>
</template>