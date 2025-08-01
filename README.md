
# 🧪 Prueba Técnica Frontend - Listado de Pokémon

Este proyecto es el **frontend** de una prueba técnica realizada en equipo, que consiste en construir una aplicación web que muestre una lista de Pokémon con posibilidad de filtrar y consultar detalles.
Está desarrollado con **Vue 3** y **CSS** (estilizado personalizado), y se conecta a una **API REST** creada por el equipo de backend con Node.js, Express y MongoDB.

## 🧩 Objetivo del proyecto
El objetivo principal es mostrar un listado de Pokémon obtenidos desde un endpoint de una API y permitir al usuario:
- Buscar Pokémon por nombre (filtro)
- Ver una tarjeta con los detalles de cada Pokémon
- Alternar entre vista general y vista detalle

## 🚀 Tecnologías usadas
- **Vue 3** (usando Composition API)
- **CSS personalizado** (sin framework externo)
- HTML 5

## 📡 Fuente de datos: API de Pokémon
Este proyecto **consume una API creada por el equipo backend** como parte del mismo ejercicio técnico. Inicialmente, esta API devuelve un array de Pokémon mockeados y más adelante accede a una base de datos MongoDB con los Pokémon de primera generación.
La API está desplegada en Render: [https://pokemon-server-3a2p.onrender.com/api/pokemons](https://pokemon-server-3a2p.onrender.com/api/pokemons)

## 🧠 Estructura del proyecto
```bash
📁 frontend/
├── index.html          # Página principal
├── style.css           # Hoja de estilos
├── app.js              # Lógica Vue (JS)
```

## 💻 Cómo probarlo
Puedes ver el proyecto online mediante GitHub Pages.
También puedes clonarlo y ejecutarlo en local:
```bash
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio
# Luego abre index.html con tu navegador
```

## ⚠️ No se requiere instalación ni build
Todo funciona con archivos estáticos y Vue por CDN.

## 🛠️ Funcionalidades
- Filtro por nombre de Pokémon en tiempo real
- Vista de detalle con información individual
- Diseño responsive con CSS personalizado
- Integración directa con API externa en producción

## 🔗 Relación con el equipo Backend
Este proyecto se conecta con la API creada por el equipo backend del ejercicio. Ellos fueron responsables de:
- Crear la API REST con Express y Node.js
- Servir un array de Pokémon o datos desde MongoDB
- Desplegar el backend en Render.com

## 📬 Créditos
Trabajo colaborativo realizado por: SergioCaMi, ErebosXYZ y danfin09.

