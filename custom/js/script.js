/**
 * Created by olga on 17/02/16.
 */$(document).ready(function () {
  function init () {
    var showText, hideText;
  
    showText = "Show Answers!";
    hideText = "Hide Answers";
    
    $(".show-answers").click(function (ev) {
        var $target, toHide;
        
        toHide = text === hideText;
        $target = $(ev.currentTarget);
        text = $target.text();
        $("div.answer").toggleClass("hidden", toHide);
        $target.text(toHide ? showText : hideText);
    });
  }

  init();
  require(["gitbook"], function (gitbook) {
    gitbook.events.bind("page.change", init);
  });
});
