module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./*.html",
    "./public/**/*.{html, js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}