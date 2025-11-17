$(document).ready(function () {
  $(".mobile_nav .nav__btn").click(function () {
    const navList = $(".mobile_nav .nav__list");
    const cover = $(".mobile_nav .cover");

    navList.show().css("width", "0").animate({ width: "90%" }, 300);

    cover
      .show()
      .off("click")
      .on("click", function () {
        navList.animate({ width: "0" }, 300, function () {
          navList.hide();
        });
        cover.hide();
      });
  });
});
