const { createApp } = Vue;

createApp({
  template: `
    <div>
      <h1>Lista de Comidas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Comida</th>
            <th>País</th>
            <th>Continente</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="comida in paginatedComidas" :key="comida.id">
            <td>{{ comida.id }}</td>
            <td>{{ comida.comida }}</td>
            <td>{{ comida.country }}</td>
            <td>{{ comida.continent }}</td>
            <td><img :src="comida.imagen" :alt="comida.comida" width="100" height="100" /></td>
          </tr>
        </tbody>
      </table>

      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>
    </div>
  
  `,
  data() {
    return {
      comidas: [
        { id: 1, comida: "Rollo de primavera",  country: "China", continent: "Asia", imagen: "img/comida1.webp" },
        { id: 2, comida: "Hamburguesa", country: "Estados Unidos", continent: "América", imagen: "img/comida2.webp" },
        { id: 3, comida: "Ravioles ",  country: "Italia", continent: "Europa", imagen: "img/comida3.webp" },
        { id: 4, comida: "Espárragos y Filete",  country: "España", continent: "Europa", imagen: "img/comida4.webp" },
        { id: 5, comida: "Plato de queso",  country: "Australia", continent: "Oceanía", imagen: "img/comida5.webp" },
        { id: 6, comida: "Ramencito",  country: "Japon", continent: "Asia", imagen: "img/comida6.webp" },
        { id: 7, comida: "Ensalada",  country: "Argentina", continent: "América", imagen: "img/comida7.webp" },
        { id: 8, comida: "Panqueques",  country: "Mexico", continent: "America", imagen: "img/comida8.webp" },
        { id: 9, comida: "Aceitunas", country: "Espana", continent: "Europa", imagen: "img/comida9.webp" },
        { id: 10, comida: "Pastel",  country: "Turquía", continent: "Europa", imagen: "img/comida10.webp" },
        { id: 11, comida: "Pizza",  country: "Italia", continent: "Europa", imagen: "img/comida11.webp" },
        { id: 12, comida: "Bizcocho y cafe", country: "España", continent: "Europa", imagen: "img/comida12.webp" },
        { id: 13, comida: "Sushi", country: "Japon", continent: "Asia", imagen: "img/comida13.webp" },
        { id: 14, comida: "Papitas fritas",  country: "Estados Unidos", continent: "América", imagen: "img/comida14.webp" },
        { id: 15, comida: "Tortilla patata", country: "España", continent: "Europa", imagen: "img/comida15.webp" } 
      ],
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.comidas.length / this.itemsPerPage);
    },
    paginatedComidas() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.comidas.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');