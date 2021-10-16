<script>
  import showdown from "showdown";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import hljs from "highlight.js";

  import "$lib/post-display.css";
  import "$lib/code-style.css";

  const converter = new showdown.Converter();
  converter.setFlavor("github");

  const params = $page.params;

  let selectedPost = {
    content: "",
  };
  let finishedLoading = false;
  let estimatedReadingTime = 0;

  const calculateEstimatedReadingTime = (content) =>
    Math.round(content.split(/\s+/).length / 225);

  onMount(async () => {
    const postIndex = await fetch("/post-index.json").then((res) => res.json());

    selectedPost = postIndex.find((post) => post.id === params.postId);

    try {
      const mdContent = await fetch(selectedPost.contentRoute).then((res) =>
        res.text()
      );

      selectedPost.content = converter.makeHtml(mdContent);
    } catch (err) {
      window.location.href = "/";
    }

    estimatedReadingTime = calculateEstimatedReadingTime(selectedPost.content);

    const mutationObserver = new MutationObserver((mutationList) => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    });

    mutationObserver.observe(document.querySelector("#post-information"), {
      childList: true,
    });

    finishedLoading = true;
  });
</script>

<svelte:head>
  <title>Abnazhor - {selectedPost.title}</title>
</svelte:head>

{#if finishedLoading}
  <div class="flex flex-col mb-7 w-11/12 m-auto md:w-full">
    <h1 class="text-xl font-semibold md:font-normal md:text-3xl">
      {selectedPost.title}
    </h1>
    <span class="text-gray-700 text-lg"
      >Por Jorge
      {#if estimatedReadingTime > 0}-
        {estimatedReadingTime}
        {estimatedReadingTime > 1 ? "minutos" : "minuto"} de lectura
      {/if}
    </span>
  </div>
{/if}
<div class="post-information w-11/12 md:w-full m-auto" id="post-information">
  {@html selectedPost.content}
</div>
{#if finishedLoading && !selectedPost.content}
  <div id="aligner" class="flex items-center justify-center flex-col gap-7">
    <img
      src="/img/empty-blog.png"
      alt=""
      loading="lazy"
      class="w-9/12 xl:w-4/12 mr-5 xl:mr-10"
    />
    <span class="text-xl font-light">Esto está vacío, al parecer.</span>
  </div>
{/if}

<style>
  #aligner {
    height: 60vh;
  }
</style>
