const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("Server del mio Blog");
});

app.get("/bacheca", (req, res) => {

    const posts = [
        {titolo: "che bella gionata", immagine: "img/ciambellone.jpeg", contenuto: "non so che scriverci", tags: ["sole", "mare"]},
        {titolo: "che caldo", immagine: "img/cracker_barbabietola.jpeg", contenuto: "non so che scriverci", tags: ["mare"]},
        {titolo: "che freddo", immagine: "img/pane_fritto_dolce.jpeg", contenuto: "non so che scriverci", tags: ["radio"]},
        {titolo: "ciao", immagine: "img/pasta_barbabietola.jpeg", contenuto: "non so che scriverci", tags: ["vip"]},
        {titolo: "ho fame", immagine: "img/torta_paesana.jpeg", contenuto: "non so che scriverci", tags: ["tv"]},
    ];

    const tag = req.query.tag;

    const newPosts = posts.filter((post) => {
        return post.tags.includes(tag.toLowerCase())
    })

    res.json({posts: newPosts, numeroElementi: newPosts.length});
});


app.listen(port, () => {
    console.log("Server online sulla porta: " + port);
});