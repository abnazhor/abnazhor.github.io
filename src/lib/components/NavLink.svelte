<script>
  export let href = "";
  export let selected = false;
</script>

<a class="md:text-lg text-green-800 font-semibold" {href} class:selected>
  <slot />
</a>

<style>
  .selected {
    @apply font-bold;
    @apply text-yellow-700;
  }
</style>
