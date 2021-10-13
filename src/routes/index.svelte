<script>
  import PublicationCard from "$lib/components/PublicationCard.svelte";
  import LatestPublicationCard from "$lib/components/LatestPublicationCard.svelte";

  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let posts = [];
  let backupPosts = [];

  let isSearchModeOff = true;
  let arePostsContentLoaded = false;

  let searchText = "";
  let latestSearchTextFiltered = "";

  const filterByText = (post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase()) ||
    post.content.toLowerCase().includes(searchText.toLowerCase());

  const searchPosts = async (text) => {
    let result = [];

    if (!text) {
      result = backupPosts;
    } else {
      if (posts.length && latestSearchTextFiltered.length < searchText.length) {
        result = posts.filter(filterByText);
      } else {
        result = backupPosts.filter(filterByText);
      }
    }

    latestSearchTextFiltered = text;

    return result;
  };

  $: isSearchModeOff = !searchText;
  $: searchPosts(searchText).then((res) => {
    posts = res;
  });

  onMount(async () => {
    posts = await fetch("/post-index.json").then((res) => res.json());
    posts = posts.reverse();

    for (const [index, post] of Object.entries(posts)) {
      posts[index].content = await fetch(post.contentRoute).then((res) =>
        res.text()
      );
    }

    Object.assign(backupPosts, posts);

    arePostsContentLoaded = true;
  });
</script>

<svelte:head>
  <title>Abnazhor - Inicio</title>
</svelte:head>

<div class="flex flex-col gap-10" transition:fade={{ duration: 50 }}>
  {#if (arePostsContentLoaded && posts.length) || !isSearchModeOff}
    {#if isSearchModeOff}
      <div transition:fade={{ duration: 50 }}>
        <h1 class="text-2xl py-2">Lo más nuevo</h1>
        <LatestPublicationCard {...posts[0]} />
      </div>
    {/if}
    <div class="flex flex-col gap-4">
      <div
        class="rounded-md flex justify-between flex-col md:flex-row gap-2"
        class:md:flex-col={!isSearchModeOff}
      >
        <div class="relative">
          <input
            type="text"
            class="border rounded-md p-3 border-gray-300 w-full pr-10"
            placeholder="Buscar publicación..."
            bind:value={searchText}
          />
          <i
            class="absolute block right-3 top-1 text-lg text-gray-700 mt-1.5"
            class:ri-search-line={!searchText}
            class:cursor-pointer={searchText}
            class:ri-close-line={searchText}
            on:click={() => searchText ? searchText = "" : ""}
          />
        </div>
        {#if isSearchModeOff}
          <select
            name=""
            id=""
            class="border p-3 rounded-md border-gray-300 pr-10"
          >
            <option value="">Más recientes</option>
            <!--<option value="">Destacados</option>
            <option value="">Más populares</option>-->
          </select>
        {/if}
      </div>
      <div class="flex flex-col gap-3 xl:gap-10">
        {#if posts.length > 0}
          {#each posts as post, index}
            {#if (index && index < 10) || !isSearchModeOff}
              <div transition:fade={{ duration: 100 }}>
                <PublicationCard {...post} inverted={index % 2} />
              </div>
            {/if}
          {/each}
        {:else}
          <div
            id="aligner"
            class="flex items-center justify-center flex-col gap-7"
          >
            <img src="/img/not-found.png" alt="" class="w-9/12 xl:w-4/12" />
            <span class="text-2xl font-light text-center"
              >Nuestros gatos no pudieron encontrar coincidencias, prueba de
              nuevo.</span
            >
          </div>
        {/if}
      </div>
    </div>
  {:else if !arePostsContentLoaded}
    <div id="aligner" class="flex items-center justify-center flex-col gap-7">
      <span class="text-2xl font-light">Cargando...</span>
    </div>
  {:else}
    <div id="aligner" class="flex items-center justify-center flex-col gap-7">
      <img
        src="/img/empty-blog.png"
        alt=""
        class="w-9/12 xl:w-4/12 mr-5 xl:mr-10"
      />
      <span class="text-2xl font-light">Esto está vacío, al parecer.</span>
    </div>
  {/if}
</div>

<style>
  #aligner {
    height: 80vh;
  }
</style>
