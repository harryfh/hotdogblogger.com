/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/_includes/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/_includes/base.njk",
  ],
  theme: {
    colors: {
      "yellow": "#ffd966",
      "red": "#990000",
      "red-2": "#ff3333",
      "light-gray": "#eee",
      "dark-gray": "#222",
      "brown": "#C4A484",
    },
  },
}
