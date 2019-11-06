
const express = require('express')


const painterApi = require('../models/template.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const templateRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
templateRouter.get('/', (req, res) => {
  res.json(templateApi.getHelloWorldString())
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  templateRouter
}
