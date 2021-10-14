<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  export let id = "";
  export let title = "";
  export let content = "";
  export let coverImage = "";

  let estimatedReadingTime = 0;

  const calculateEstimatedReadingTime = (content) =>
    Math.round(content.split(/\s+/).length / 225);

  $: calculateEstimatedReadingTime(content);

  onMount(() => {
    estimatedReadingTime = calculateEstimatedReadingTime(content);
  });
</script>

<div
  class="w-full rounded-md h-96 relative bg-white overflow-hidden"
  id="parent"
>
  <div
    class="w-full rounded-md h-full absolute z-10 bg-cover bg-center shadow-md transition-all duration-1000 delay-75 hover:scale-125"
    style="background-image: url('{coverImage}');"
    id="zoom-child"
  />
  <div
    on:click={() => goto(`/post/${id}`)}
    class="hover:cursor-pointer brightness-20 h-full w-full rounded-md z-20 absolute bg-black bg-opacity-50"
  />
  <div
    class="p-10 m-5 rounded-md absolute bottom-0 z-30 hover:cursor-pointer"
    on:click={() => goto(`/post/${id}`)}
  >
    <h1 class="text-2xl font-bold text-white">{title}</h1>
    <h2 class="text-lg text-gray-200 w-7/12 text-justify">
      {content
        .replace(/\#{1,3}.+\n/, "")
        .replace(/(<([^>]+)>)/gi, "")
        .slice(0, 140) + "..."}
    </h2>
    <span class="text-white font-semibold"
      >Por Jorge - {estimatedReadingTime}
      {estimatedReadingTime > 1 ? "minutos" : "minuto"} de lectura</span
    >
  </div>
</div>

<style>
  #parent:hover #zoom-child {
    @apply scale-125;
  }
</style>
