const app = require("./app")
const config = require("./config")

const PORT = config.app.port
// Start the Express server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
