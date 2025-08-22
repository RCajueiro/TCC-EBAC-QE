const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wqvjkp",
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br",
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
