/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/_includes/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/**/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/_includes/base.njk",
  ],
  theme: {
    colors: {
      "yellow": "#ffd966",
      "red": "#AA0000",
      "red-2": "#BB1411",
      "light-gray": "#eee",
      "dark-gray": "#222",
      "brown-1": "#ffd08a",
      "brown-2": "#f26635",
    },
  },
}
