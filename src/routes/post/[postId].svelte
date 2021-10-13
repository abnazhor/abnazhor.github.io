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

  let selectedPost = {};
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

{#if finishedLoading}
  <div class="flex items-center flex-col mb-4">
    <h1 class="text-2xl text-center">{selectedPost.title}</h1>
    <span class="text-gray-700"
      >Por Jorge
      {#if estimatedReadingTime > 0}-
        {estimatedReadingTime}
        {estimatedReadingTime > 1 ? "minutos" : "minuto"} de lectura
      {/if}
    </span>
  </div>
{/if}
<div
  class="post-information"
  id="post-information"
>
  {@html selectedPost.content}
</div>
