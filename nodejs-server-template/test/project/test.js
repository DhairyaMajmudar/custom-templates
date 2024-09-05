const { app } = require('./client.js');
const { consola } = require("consola");

const port = 8000;

app.listen(port, () => {
    consola.box("AsyncAPI is Amazing");
    consola.success(`Server is running on port ${port}`);
})