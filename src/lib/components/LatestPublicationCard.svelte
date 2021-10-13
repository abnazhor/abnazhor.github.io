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
  on:click={() => goto(`/post/${id}`)}
  class="w-full rounded-md h-96 bg-gray-300 bg-cover bg-center shadow-md relative hover:cursor-pointer"
  style="background-image: url('{coverImage}');"
>
  <div class="absolute bottom-0 p-10 bg-white m-5 rounded-md bg-opacity-90">
    <h1 class="text-2xl font-semibold">{title}</h1>
    <h2 class="text-lg text-gray-700">{content.slice(0, 50) + "..."}</h2>
    <span class="text-gray-900"
      >Por Jorge - {estimatedReadingTime}
      {estimatedReadingTime > 1 ? "minutos" : "minuto"} de lectura</span
    >
  </div>
</div>
