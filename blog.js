const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("Server del mio Blog");
});

app.get("/bacheca", (req, res) => {

    const lista = [
        {titolo: "che bella gionata", immagine: "img/ciambellone.jpeg", contenuto: "", tags: []},
        {titolo: "che caldo", immagine: "img/cracker_barbabietola.jpeg", contenuto: "", tags: []},
        {titolo: "che freddo", immagine: "img/pane_fritto_dolce.jpeg", contenuto: "", tags: []},
        {titolo: "ciao", immagine: "img/pasta_barbabietola.jpeg", contenuto: "", tags: []},
        {titolo: "ho fame", immagine: "img/torta_paesana.jpeg", contenuto: "", tags: []},
    ];



    res.json({posts: lista, numeroElementi: lista.length});
});


app.listen(port, () => {
    console.log("Server online sulla porta: " + port);
});