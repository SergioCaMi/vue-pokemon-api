import {
  createApp,
  ref,
  onMounted,
  computed
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const pokemons = ref([]);
    const search = ref("");
    const selectedPokemon = ref(null);

    onMounted(() => {
      getInfo();
    });

    const getInfo = async () => {
      try {
        const response = await fetch("https://pokemon-server-3a2p.onrender.com/api/pokemons");
        if (!response.ok) {
          throw new Error(`Error en la API: ${response.status}`);
        }
        const data = await response.json();
        pokemons.value = data;
        console.log(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    const filterPokemons = computed(() => {
      if (search.value) {
        return pokemons.value.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.value.toLowerCase())
        );
      }
      return pokemons.value;
    });

    return {
      getInfo,
      pokemons,
      filterPokemons,
      search,
      selectedPokemon,
    };
  },
}).mount("#app");
