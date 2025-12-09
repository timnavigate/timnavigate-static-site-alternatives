module.exports = function (conf) {
  conf.addPassthroughCopy('./src/style.css')
  conf.addPassthroughCopy('./src/script.css')
  conf.addPassthroughCopy('./src/index.js')
  conf.addPassthroughCopy('./src/assets');

  return {
    dir: {
      input: './src',
      includes: './includes'
    },
    htmlTemplateEngine: 'njk'
  }
}
