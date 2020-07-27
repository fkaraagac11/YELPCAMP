const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//This code is depreciated
//mongoose.connect("mongodb://localhost/yelp_camp");

mongoose
    .connect("mongodb://localhost:27017/yelp_camp", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("Connected to DB!"))
    .catch((error) => console.log(error.message));

//SCHEMA SETUP
var campgroundsSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
});

var Campground = mongoose.model("Campground", campgroundsSchema);
// Below code is written before installing MONGODB
// Campground.create(
//     {
//         name: "Spring Hill",
//         image:
//             "https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&h=350",
//     },
//     function (err, campground) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND:");
//             console.log(campground);
//         }
//     }
// );

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/yelp", (req, res) => {
    res.send("Yelp Project is starting!!!!");
});

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    // Get all campgrounds from BD
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { campgrounds: allCampgrounds });
        }
    });
    //  res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", (req, res) => {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = { name: name, image: image, description: desc };
    //CREATE a new campground and save to Database
    Campground.create(newCampground, (err, newlyCreated) => {
        if (err) {
            console.log(err);
        } else {
            //  res.render("/campgrounds", { campgrounds: newlyCreated });
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new.ejs");
});

app.get("/campgrounds/:id", (req, res) => {
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            // render show temlate with that campground
            res.render("show", { campground: foundCampground });
        }
    });
});

app.listen(3333, () => {
    console.log("Yelp Server has started");
});
