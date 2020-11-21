const app = require('./src/app.js');
const port = process.env.PORT || 3000;


(async () => {
    const database = require('./db');
    try {
        const resultado = await database.sync();
    } catch (error) {
        console.log(error);
    }
})();

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})



