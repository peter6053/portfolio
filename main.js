$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  $('nav a[href*="#"]').on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      2000
    );
  });

  $("#up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true,
  });
  var primary = "#d5b9b9";
  var landingTitle = $("#landingTitle");
  var contactHeading = $("#contact-section-heading");
  var skillHeading = $("#skill-section-heading");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log("scroll", scroll);
    if (scroll > 190) {
      landingTitle.css("color", "white");
      contactHeading.css("color", "white");
    } else {
      landingTitle.css("color", primary);
    }
  });

  var checkReplace = $(".replace-me");
  if (checkReplace !== null) {
    var replace = checkReplace.ReplaceMe({
      speed: 4000, // Delay between each phrase in miliseconds
    });
  }

  $num = $(".my-card").length;
  $even = $num / 2;
  $odd = ($num + 1) / 2;

  if ($num % 2 == 0) {
    $(".my-card:nth-child(" + $even + ")").addClass("active");
    $(".my-card:nth-child(" + $even + ")")
      .prev()
      .addClass("prev");
    $(".my-card:nth-child(" + $even + ")")
      .next()
      .addClass("next");
  } else {
    $(".my-card:nth-child(" + $odd + ")").addClass("active");
    $(".my-card:nth-child(" + $odd + ")")
      .prev()
      .addClass("prev");
    $(".my-card:nth-child(" + $odd + ")")
      .next()
      .addClass("next");
  }

  $(".my-card").click(function () {
    $slide = $(".active").width();
    console.log($(".active").position().left);

    if ($(this).hasClass("next")) {
      $(".card-carousel")
        .stop(false, true)
        .animate({ left: "-=" + $slide });
    } else if ($(this).hasClass("prev")) {
      $(".card-carousel")
        .stop(false, true)
        .animate({ left: "+=" + $slide });
    }

    $(this).removeClass("prev next");
    $(this).siblings().removeClass("prev active next");

    $(this).addClass("active");
    $(this).prev().addClass("prev");
    $(this).next().addClass("next");
  });

  // Keyboard nav
  $("html body").keydown(function (e) {
    if (e.keyCode == 37) {
      // left
      $(".active").prev().trigger("click");
    } else if (e.keyCode == 39) {
      // right
      $(".active").next().trigger("click");
    }
  });

  $numFlight = $(".my-flight-card").length;
  $evenFlight = $numFlight / 2;
  $oddFlight = ($numFlight + 1) / 2;

  if ($numFlight % 2 == 0) {
    $(".my-flight-card:nth-child(" + $evenFlight + ")").addClass("active");
    $(".my-flight-card:nth-child(" + $evenFlight + ")")
      .prev()
      .addClass("prev");
    $(".my-flight-card:nth-child(" + $evenFlight + ")")
      .next()
      .addClass("next");
  } else {
    $(".my-flight-card:nth-child(" + $oddFlight + ")").addClass("active");
    $(".my-flight-card:nth-child(" + $oddFlight + ")")
      .prev()
      .addClass("prev");
    $(".my-flight-card:nth-child(" + $oddFlight + ")")
      .next()
      .addClass("next");
  }

  $(".my-flight-card").click(function () {
    $slideFlight = $(".active").width();
    console.log($(".active").position().left);

    if ($(this).hasClass("next")) {
      $(".card-flight-carousel")
        .stop(false, true)
        .animate({ left: "-=" + $slideFlight });
    } else if ($(this).hasClass("prev")) {
      $(".card-flight-carousel")
        .stop(false, true)
        .animate({ left: "+=" + $slideFlight });
    }

    $(this).removeClass("prev next");
    $(this).siblings().removeClass("prev active next");

    $(this).addClass("active");
    $(this).prev().addClass("prev");
    $(this).next().addClass("next");
  });

  // Keyboard nav
  $("html body").keydown(function (e) {
    if (e.keyCode == 37) {
      // left
      $(".active").prev().trigger("click");
    } else if (e.keyCode == 39) {
      // right
      $(".active").next().trigger("click");
    }
  });

  $numBus = $(".my-bus-card").length;
  $evenBus = $numBus / 2;
  $oddBus = ($numBus + 1) / 2;

  if ($numBus % 2 == 0) {
    $(".my-bus-card:nth-child(" + $evenBus + ")").addClass("active");
    $(".my-bus-card:nth-child(" + $evenBus + ")")
      .prev()
      .addClass("prev");
    $(".my-bus-card:nth-child(" + $evenBus + ")")
      .next()
      .addClass("next");
  } else {
    $(".my-bus-card:nth-child(" + $oddBus + ")").addClass("active");
    $(".my-bus-card:nth-child(" + $oddBus + ")")
      .prev()
      .addClass("prev");
    $(".my-bus-card:nth-child(" + $oddBus + ")")
      .next()
      .addClass("next");
  }

  $(".my-bus-card").click(function () {
    $slideBus = $(".active").width();
    console.log($(".active").position().left);

    if ($(this).hasClass("next")) {
      $(".card-bus-carousel")
        .stop(false, true)
        .animate({ left: "-=" + $slideBus });
    } else if ($(this).hasClass("prev")) {
      $(".card-bus-carousel")
        .stop(false, true)
        .animate({ left: "+=" + $slideBus });
    }

    $(this).removeClass("prev next");
    $(this).siblings().removeClass("prev active next");

    $(this).addClass("active");
    $(this).prev().addClass("prev");
    $(this).next().addClass("next");
  });

  $("html body").keydown(function (e) {
    if (e.keyCode == 37) {
      // left
      $(".active").prev().trigger("click");
    } else if (e.keyCode == 39) {
      // right
      $(".active").next().trigger("click");
    }
  });

  $numShukran = $(".my-shukran-card").length;
  $evenShukran = $numShukran / 2;
  $oddShukran = ($numShukran + 1) / 2;

  if ($numShukran % 2 == 0) {
    $(".my-shukran-card:nth-child(" + $evenShukran + ")").addClass("active");
    $(".my-shukran-card:nth-child(" + $evenShukran + ")")
      .prev()
      .addClass("prev");
    $(".my-shukran-card:nth-child(" + $evenShukran + ")")
      .next()
      .addClass("next");
  } else {
    $(".my-shukran-card:nth-child(" + $oddShukran + ")").addClass("active");
    $(".my-shukran-card:nth-child(" + $oddShukran + ")")
      .prev()
      .addClass("prev");
    $(".my-shukran-card:nth-child(" + $oddShukran + ")")
      .next()
      .addClass("next");
  }

  $(".my-shukran-card").click(function () {
    $slideShukran = $(".active").width();
    console.log($(".active").position().left);

    if ($(this).hasClass("next")) {
      $(".card-shukran-carousel")
        .stop(false, true)
        .animate({ left: "-=" + $slideShukran });
    } else if ($(this).hasClass("prev")) {
      $(".card-shukran-carousel")
        .stop(false, true)
        .animate({ left: "+=" + $slideShukran });
    }

    $(this).removeClass("prev next");
    $(this).siblings().removeClass("prev active next");

    $(this).addClass("active");
    $(this).prev().addClass("prev");
    $(this).next().addClass("next");
  });
  // Keyboard nav
  $("html body").keydown(function (e) {
    if (e.keyCode == 37) {
      // left
      $(".active").prev().trigger("click");
    } else if (e.keyCode == 39) {
      // right
      $(".active").next().trigger("click");
    }
  });
});
