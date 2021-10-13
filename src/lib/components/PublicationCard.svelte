<script>
  export let id = "";
  export let title = "";
  export let content = "";
  export let coverImage = "";
  export let inverted = false;
  export let createdOn = "";
</script>

<div class="w-full grid xl:grid-cols-2 xl:grid-rows-1 grid-rows-2 gap-2 lg:gap-10 bg-white shadow-sm p-5 rounded-md">
  <div
    class="rounded-md h-72 bg-gray-300 bg-cover bg-center shadow-sm relative hover:cursor-pointer"
    style="background-image: url('{coverImage}');"
    class:xl:col-start-2={inverted}
  />
  <div class="flex flex-col justify-between" class:xl:row-start-1={inverted}>
    <div class="flex flex-col gap-2">
      <h1 class="text-2xl font-semibold">{title}</h1>
      <h2 class="text-lg text-justify font-normal text-gray-600">
        {content.slice(0, 300) + "..."}
        <a href="/post/{id}" class="font-bold text-green-800 m-2">Seguir leyendo</a>
      </h2>
    </div>
    <div class="flex gap-3">
        <img
          src="https://avatars.githubusercontent.com/u/11428398?v=4"
          alt=""
          class="rounded-full w-12"
        />
        <div class="flex flex-col">
          <span class="font-semibold">Publicado por Jorge</span>
          <span>{new Intl.DateTimeFormat("es-ES", {
            dateStyle: "long",
          }).format(new Date(createdOn))}</span>
        </div>
      </div>
  </div>
</div>
