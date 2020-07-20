const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/yelp", (req, res) => {
    res.send("Yelp Project is starting!!!!");
});

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    var campgrounds = [
        {
            name: "Salmon Greek",
            image:
                "https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&h=350",
        },
        {
            name: "Granite hill",
            image:
                "https://images.pexels.com/photos/953241/pexels-photo-953241.jpeg?auto=compress&cs=tinysrgb&h=350",
        },
        {
            name: "Mountain Goat",
            image:
                "https://images.pexels.com/photos/981364/pexels-photo-981364.jpeg?auto=compress&cs=tinysrgb&h=350",
        },
    ];
    res.render("campgrounds", { campgrounds: campgrounds });
});
app.listen(3333, () => {
    console.log("Yelp Server has started");
});
