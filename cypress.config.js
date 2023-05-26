const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://practice.cybertekschool.com',
    video:false,
    retries:0,
    defaultCommandTimeout:10000,
    viewportHeight:800,
    viewportWidth:1200,

    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
