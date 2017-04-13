var data = [];
var datum = function(x) {
  return 15 + x * x;
}

var newData = function() {
  data.push(datum);
  return data;
}

function render() {
  var divs = d3.select("#container")
    .selectAll("div")
    .data(newData);

  divs.enter().append("div").append("span");
  divs.attr("class", "v-bar")
    .style("height", function(d, i) {
      return d(i) + "px";
    })
    .select("span")
      .text(function(d, i) {
        return d(i);
      });
  divs.exit().remove();
}

render();
