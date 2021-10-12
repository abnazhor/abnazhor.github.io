<script>
  import PublicationCard from "$lib/components/PublicationCard.svelte";
  import LatestPublicationCard from "$lib/components/LatestPublicationCard.svelte";

  const publications = [
    {
      title: "Mi primera publicación",
      href: "",
      summary: "Esta es mi primera publicación. Espero que os guste.",
      bg: "https://images.unsplash.com/photo-1511497584788-876760111969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2232&q=80",
    },
    {
      title: "Cómo picar código sin morir en el intento",
      href: "",
      summary:
        "A veces hay que hacer las cosas como no se quieren hacer, pero así funciona el mundo. En mi opinión la verdad es que la crisis eléctrica podría resolverse tirando ranas sobre coches de políticos. O algo así.",
      bg: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Cocinando pollo braseado en horno de leña",
      href: "",
      summary:
        "A veces hay que hacer las cosas como no se quieren hacer, pero así funciona el mundo. En mi opinión la verdad es que la crisis eléctrica podría resolverse tirando ranas sobre coches de políticos. O algo así.",
      bg: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80",
    },
    {
      title: "Cómo picar código sin morir en el intento",
      href: "",
      summary:
        "A veces hay que hacer las cosas como no se quieren hacer, pero así funciona el mundo. En mi opinión la verdad es que la crisis eléctrica podría resolverse tirando ranas sobre coches de políticos. O algo así.",
      bg: "https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80",
    },
    {
      title: "Cocinando pollo braseado en horno de leña",
      href: "",
      summary:
        "A veces hay que hacer las cosas como no se quieren hacer, pero así funciona el mundo. En mi opinión la verdad es que la crisis eléctrica podría resolverse tirando ranas sobre coches de políticos. O algo así. Me gustan los macarrones con tomatico.",
      bg: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
    },
  ];
</script>

<div class="flex flex-col gap-10">
  <LatestPublicationCard {...publications[0]} />
  <div class="flex flex-col gap-4">
    <div class="rounded-md flex justify-between">
        <input type="text" class="border rounded-md p-3 border-gray-300" placeholder="Buscar publicación...">
      <select name="" id="" class="border p-3 rounded-md w-40 border-gray-300">
        <option value="">Más recientes</option>
        <option value="">Destacados</option>
        <option value="">Más populares</option>
      </select>
    </div>
    <div class="flex flex-col gap-10">
      {#each publications as publication, index}
        {#if index}
          <PublicationCard {...publication} inverted={index % 2} />
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  :root {
    @apply bg-gray-50;
  }
</style>
