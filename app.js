const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var campgrounds = [
    {
        name: "Spring",
        image:
            "https://images.pexels.com/photos/612807/pexels-photo-612807.jpeg?auto=compress&cs=tinysrgb&h=350",
    },

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
    {
        name: "Spring",
        image:
            "https://images.pexels.com/photos/612807/pexels-photo-612807.jpeg?auto=compress&cs=tinysrgb&h=350",
    },

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

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/yelp", (req, res) => {
    res.send("Yelp Project is starting!!!!");
});

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", (req, res) => {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image };
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new.ejs");
});

app.listen(3333, () => {
    console.log("Yelp Server has started");
});
