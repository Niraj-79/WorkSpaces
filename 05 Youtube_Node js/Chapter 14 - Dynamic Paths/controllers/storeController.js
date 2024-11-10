const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getAddHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Home List",
      currentPage: "Home",
    })
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites(favourites => {
    Home.fetchAll((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id));
      res.render("store/favourites-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favorites",
        currentPage: "favourites",
      })
    });
  })
};

exports.postAddToFavourite = (req, res, next) => {
  console.log("Came to to add to Favourite", req.body);
  Favourite.addToFavourite(req.body.id, error => {
    if (error) {
      console.log("Error while marking favourite", error);
    } 
    res.redirect("/favourites");
  })
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  // console.log("At home details page", homeId);
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/homes");
    } else {
      // console.log("Home Details Found", home);
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
      });
    }
  });
};
