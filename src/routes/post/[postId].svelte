<script>
    import showdown from "showdown";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    
    import "$lib/post-display.css";
    
    const converter = new showdown.Converter();

    const params = $page.params;

    let selectedPost = {};

    onMount(async () => {
        const postIndex = await fetch("/post-index.json").then(res => res.json());

        selectedPost = postIndex.find(post => post.id === params.postId);

        const mdContent = await fetch(selectedPost.contentRoute).then(res => res.text());

        selectedPost.content = converter.makeHtml(mdContent);
    });
</script>

<h1 class="text-2xl text-center">{selectedPost.title}</h1>
<div class="post-information">
    {@html selectedPost.content}
</div>
