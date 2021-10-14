<script>
  import NavLink from "./NavLink.svelte";

  import { onMount } from "svelte";

  let isLocalhost = false;

  onMount(() => {
    isLocalhost = window.location.hostname === "localhost";
  });
</script>

<nav class="flex items-center justify-between">
  <div>
    <h3 class="text-lg md:text-2xl">Mi blog</h3>
  </div>
  <div class="flex gap-6 items-center">
    <NavLink href="/">Inicio</NavLink>
    <NavLink href="/about">Acerca de</NavLink>
    {#if isLocalhost}
      <a href="/publisher" class="font-bold text-green-900 md:text-lg">Nueva publicación</a>
    {/if}
  </div>
</nav>
