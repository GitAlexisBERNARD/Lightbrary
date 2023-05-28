<script lang="ts">
export default {
  data() {
    return {
    };
  },
  methods: {
    next () {
        this.$emit('next')
    },
    prev () {
        this.$emit('prev')
    }
  }
};
</script>

<template>
    <div class="carrousel">
        <slot></slot>

        <button @click="next" class="next text-Primary2(White)">Next</button>
        <button @click="prev" class="prev text-Primary2(White)">Prev</button>
    </div>
</template>