import * as dotenv from 'dotenv'

const { defineConfig } = require('cypress')

dotenv.config({ path: '.env.local' })

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
