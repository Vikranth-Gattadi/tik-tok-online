import express from 'express'
import mongoose from 'mongoose'
import Cors from "cors";
import Videos from "./dbmodel.js";

const app = express();
const port = 2953;
const conn_url = "mongodb+srv://vikranth:1853@clust-1.asktuin.mongodb.net/tiktokposts?retryWrites=true&w=majority"


app.use(express.json())
app.use(Cors())

mongoose.connect(conn_url, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

app.get('/', (req, res) => res.status(200).send("Hello nithin boys!!!!...."))

app.post("/tiktok/addpost", (req, res) => {
    const dbCard = req.body;

    Videos.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })

});

app.get("/tiktok/posts", (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            req.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

//listner
app.listen(port, () => console.log(`listening on localhost:${port}`));

