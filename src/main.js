let box = dom.find(".red");
console.log(box);

dom.each(box, function(n) {
  dom.style(n, "color", "red");
});
