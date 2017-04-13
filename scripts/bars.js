var data = [12, 17, 25, 45, 52, 65, 43, 22, 15, 9];
function render(data) {
  var bars = d3.select("body").selectAll("div.h-bar")
    .data(data);

    bars.enter()
      .append("div")
      .attr("class", "h-bar")
      .merge(bars)
      .style("width", function(d) {
        return (d * 3) + "px";
      })
      .text(function(d) {
        return d;
      });

    bars.exit().remove();
}

// setInterval(function() {
//   data.shift();
//   data.push(Math.round(Math.random() * 100));
//   render(data);
// }, 1500);

render(data);
