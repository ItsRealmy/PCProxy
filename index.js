require("dotenv").config();
const express = require("express");
const { get } = require("axios");
const { getRandom } = require("random-useragent");

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Live on http://localhost:${process.env.PORT}`);
});

app.get("/", async (req, res) => {
    if (req.query.url) {
        get(req.query.url, {
            headers: {
                "User-Agent": getRandom(),
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US;q=0.7,en;q=0.3",
                "Connection": "keep-alive"
            }
        })
            .then((resp) => {
                res.contentType("txt").send(resp.data);
            })
            .catch((err) => {

            });
    }
});