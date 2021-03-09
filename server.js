const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.use(express.static("public/style"))
server.use(express.static("images"))

server.set("view engine", "html")

nunjucks.configure("./src/pages", {
    express: server
})

server
    .get("/", function(req, res) {
        return res.render("index");
})
    .get("/cart", ((req, res) => {
        return res.render("carrinho");
}))
    .get("/details", (req, res) => {
        return res.render("detalhesDoProduto");
})
    .get("/product", (req, res) => {
        return res.render("produto")
    })

server.listen(5000, function() {
    console.log("Server running at port 5000")
})
