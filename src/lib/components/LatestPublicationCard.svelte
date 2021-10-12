<script>
import { goto } from "$app/navigation";


    export let bg = "";
    export let href = "";
    export let title = "";
    export let summary = "";

    const calculateEstimatedReadingTime = (wordCount) => {

    }
</script>

<div on:click={() => goto(`/post/${href}`)} class="w-full rounded-md h-96 bg-gray-300 bg-cover bg-center shadow-md relative hover:cursor-pointer" style="background-image: url({bg});">
  <div class="absolute bottom-0 p-10 bg-white m-5 rounded-md bg-opacity-90">
    <h1 class="text-2xl font-semibold">{title}</h1>
    <h2 class="text-lg text-gray-700">{summary}</h2>
    <span></span>
  </div>
</div>
