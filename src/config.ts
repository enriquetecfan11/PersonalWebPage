// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Enrique Rodriguez Vela";
export const SITE_DESCRIPTION =
  "Bienvenido a mi sitio web personal. Aquí encontrarás información sobre mi trabajo, proyectos y artículos sobre tecnología y desarrollo web.";
export const TWITTER_HANDLE = "@kikerodrivela";
export const MY_NAME = "Enrique Rodríguez Vela";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
