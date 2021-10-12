<script>
  import NavLink from "./NavLink.svelte";
</script>

<nav class="flex items-center justify-between">
  <div>
      <h3 class="text-xl">Mi blog</h3>
  </div>
  <div class="flex gap-6">
    <NavLink href="/">Inicio</NavLink>
    <NavLink href="/about">Acerca de</NavLink>
  </div>
</nav>
