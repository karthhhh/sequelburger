var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.post("/", function (req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function (data) {
      res.redirect("/");
    });

  });

  app.put("/:id", function (req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    }, {
        where: {
          id: req.params.id
        }
      }).then(function (data) {
        res.redirect("/");
      });

  });
}