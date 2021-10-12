<script>
    export let href = "";
    export let selected = false;
</script>

<a {href} class:selected={selected}>
    <slot></slot>
</a>

<style>
    .selected {
        @apply bg-green-200;
    }
</style>