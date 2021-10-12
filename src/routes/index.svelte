<script>
  import PublicationCard from "$lib/components/PublicationCard.svelte";
  import LatestPublicationCard from "$lib/components/LatestPublicationCard.svelte";
  import { onMount } from "svelte";

  let posts = [];

  onMount(async () => {
    posts = await fetch("/post-index.json").then((res) => res.json());

    for (const [index, post] of Object.entries(posts)) {
      posts[index].content = await fetch(post.contentRoute).then((res) =>
        res.text()
      );
    }
  });
</script>

<div class="flex flex-col gap-10">
  {#if posts.length !== 0}
    <LatestPublicationCard {...posts[0]} />
    <div class="flex flex-col gap-4">
      <div class="rounded-md flex justify-between">
        <div class="relative">
          <input
            type="text"
            class="border rounded-md p-3 border-gray-300 w-full pr-10"
            placeholder="Buscar publicación..."
          />
          <i
            class="ri-search-line absolute block right-3 top-1 text-lg text-gray-700 mt-1.5"
          />
        </div>
        <select
          name=""
          id=""
          class="border p-3 rounded-md w-40 border-gray-300"
        >
          <option value="">Más recientes</option>
          <option value="">Destacados</option>
          <option value="">Más populares</option>
        </select>
      </div>
      <div class="flex flex-col gap-10">
        {#each posts as post, index}
          {#if index && index < 10}
            <PublicationCard {...post} inverted={index % 2} />
          {/if}
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  :root {
    @apply bg-gray-50;
  }
</style>
