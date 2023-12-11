import { defineConfig } from "cypress";


export default defineConfig({
  video:true,
  
  e2e: {
    
    reporter:'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    require('cypress-mochawesome-reporter/plugin')(on);
   
      
    
      
  },
  defaultCommandTimeout: 3000,
  
  },
  
 
  
})
