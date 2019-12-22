window.fluidboxGhost = $.when(
  $.getScript(
    "//cdnjs.cloudflare.com/ajax/libs/jquery-throttle-debounce/1.1/jquery.ba-throttle-debounce.min.js"
  ),
  $.getScript(
    "//cdnjs.cloudflare.com/ajax/libs/fluidbox/2.0.5/js/jquery.fluidbox.min.js"
  ),
  $.Deferred(function(deferred) {
    $(deferred.resolve);
  })
).done(function() {
  // Comment out lines depending on what you want to have flexbox triggered on
  let targetImages = window.fluidboxGhostConfig.matchImageSelectors || [
    ".kg-gallery-image img", // Gallery Images
    ".kg-card img" // All Inline Images
    // 'p > img', // All images added via markdown
  ];

  let showCaption = true;

  let activeImage = null;
  // Appends a cpation to the page
  var $caption = $("<div />", { id: "caption-overlay" });
  $caption.html('<div class="img-caption"></div>').appendTo($("body"));

  // Finds all of our
  $(targetImages.join(",")).each(function(index, el) {
    $("<a href='" + $(this).attr("src") + "' class='zoom'></a>").insertAfter(
      $(this)
    );
    $(this).appendTo($(this).next("a"));
  });

  // Initialize Fluidbox
  $(".zoom:not(.fluidbox--opened)")
    .fluidbox({
      loader: true,
      immediateOpen: true
    })
    .on("openstart.fluidbox", function() {
      if (theme === "image-backdrop") {
        var $img = $(this).find("img");
        let imgSrc = $img.attr("src");
        let newRule = 'background-image: url("' + imgSrc + '") !important;';
        document.styleSheets[0].insertRule(
          ".fluidbox__overlay::before{" + newRule + "}",
          document.styleSheets[0].cssRules.length
        );
      }
    })
    .on("openend.fluidbox", function() {
      activeImage = this;
      if (showCaption) {
        let caption = $(this)
          .parents("figure")
          .find("figcaption")
          .html();
        if (caption && caption.length > 0) {
          $("#caption-overlay")
            .addClass("visible")
            .find(".img-caption")
            .text(caption);
        }
      }
    })
    .on("closestart.fluidbox", function() {
      activeImage = null;
      $("#caption-overlay").removeClass("visible");
    });

  var scrollPosition = 0;
  $(window).scroll(
    $.throttle(250, function() {
      var currentScrollPosition = $(window).scrollTop();

      // If has scrolled beyond plus/minus 60 pixels
      if (Math.abs(currentScrollPosition - scrollPosition) > 60)
        $("a").fluidbox("close");

      // Update global scroll position store
      scrollPosition = currentScrollPosition;
    })
  );

  setTimeout(() => {
    let allImages = $(".zoom");

    window.addEventListener("keydown", function(event) {
      if (!activeImage) {
        return;
      }
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();
      const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

      let currentImageIndex = allImages.index(activeImage);

      if (key === "ArrowRight" || key === "ArrowDown") {
        currentImageIndex++;
      } else if (key === "ArrowLeft" || key === "ArrowUp") {
        currentImageIndex--;
      }
      $(allImages[currentImageIndex]).trigger("click");
    });
  }, 500);
});
