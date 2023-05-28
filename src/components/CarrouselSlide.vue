<script lang="ts">
export default {
    
}
</script>

<template>
    <div v-show="visibleSlide === index" class="carrousel-slide">
        <slot></slot>
    </div>
</template>