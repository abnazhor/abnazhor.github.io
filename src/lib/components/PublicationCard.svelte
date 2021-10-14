<script>
  import { goto } from "$app/navigation";

  export let id = "";
  export let title = "";
  export let content = "";
  export let coverImage = "";
  export let inverted = false;
  export let createdOn = "";
</script>

<div
  class="w-full grid xl:grid-cols-2 xl:grid-rows-1 grid-rows-5 lg:gap-10 bg-white shadow-sm p-5 rounded-md gap-5 border"
>
  <div
    class="rounded-md bg-gray-300 bg-cover bg-center shadow-sm relative hover:cursor-pointer row-span-2 xl:row-span-3 xl:h-80"
    style="background-image: url('{coverImage}');"
    loading="lazy"
    class:xl:col-start-2={inverted}
    on:click={() => {
      console.log("uwu");
      goto(`/post/${id}`);
    }}
  />
  <div class="flex flex-col justify-between gap-7 row-span-3" class:xl:row-start-1={inverted}>
    <div class="flex flex-col gap-2">
      <h1 class="text-2xl font-semibold">{title}</h1>
      <h2 class="text-lg text-justify font-normal text-gray-600 whitespace-normal">
        {content.replace(/\#{1,3}.+\n/, "").replace(/(<([^>]+)>)/gi, "").slice(0, 300) + "..."}
        <a href="/post/{id}" class="font-bold text-green-800 m-2"
          >Seguir leyendo</a
        >
      </h2>
    </div>
    <div class="flex gap-3">
      <img
        src="https://avatars.githubusercontent.com/u/11428398?v=4"
        alt=""
        loading="lazy"
        class="rounded-full w-12 h-12"
      />
      <div class="flex flex-col">
        <span class="font-semibold">Publicado por Jorge</span>
        <span
          >{new Intl.DateTimeFormat("es-ES", {
            dateStyle: "long",
          }).format(new Date(createdOn))}</span
        >
      </div>
    </div>
  </div>
</div>
