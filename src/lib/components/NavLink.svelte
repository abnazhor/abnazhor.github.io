<script>
    export let href = "";
    export let selected = false;
</script>

<a class="md:text-lg text-green-900 font-semibold" {href} class:selected={selected}>
    <slot></slot>
</a>

<style>
    .selected {
        @apply font-bold;
    }
</style>