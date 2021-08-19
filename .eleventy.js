module.exports = config => {
  config.addPassthroughCopy("src/img");
  config.addPassthroughCopy("src/css");

  return {
	markdownTemplateEngine: 'njk',
	dataTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
    dir: {
      input: 'src'
    }
  };
};
