// code for error 404 page

// path has to be defined (it can be anything)

exports.get404 = (req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page not found",
    path: "/404",
  });
};
