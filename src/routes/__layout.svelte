<script>
  import "../app.css";
  import "remixicon/fonts/remixicon.css";

  import Navbar from "$lib/components/Navbar.svelte";

  import { fade } from "svelte/transition";
</script>

<div
  class="w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 m-auto mt-10 flex flex-col gap-10 pb-10"
>
  <Navbar />
  <div transition:fade={{ duration: 50 }}>
    <slot />
  </div>
</div>

<style>
  :root {
    @apply bg-gray-50;
  }
</style>
