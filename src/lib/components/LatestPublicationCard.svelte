<script>
  import { goto } from "$app/navigation";

  export let id = "";
  export let title = "";
  export let content = "";
  export let coverImage = "";

  const calculateEstimatedReadingTime = (wordCount) => {};
</script>

<div
  on:click={() => goto(`/post/${id}`)}
  class="w-full rounded-md h-96 bg-gray-300 bg-cover bg-center shadow-md relative hover:cursor-pointer"
  style="background-image: url('{coverImage}');"
>
  <div class="absolute bottom-0 p-10 bg-white m-5 rounded-md bg-opacity-90">
    <h1 class="text-2xl font-semibold">{title}</h1>
    <h2 class="text-lg text-gray-700">{content.slice(0, 50) + "..."}</h2>
    <span />
  </div>
</div>
