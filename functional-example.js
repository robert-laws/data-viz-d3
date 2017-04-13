// functional example - javascript

function SimpleWidget(spec) {
  var instance = {};
  var headline, description;
  instance.render = function() {
    var div = d3.select('body').append('div');
    div.append('h3').text(headline);
    div.attr('class', 'box')
      .attr('style', 'color:' + spec.color)
      .append('p')
      .text(description);
    return instance;
  }

  instance.headline = function(h) {
    if(!arguments.length) return headline;
    headline = h;
    return instance;
  }

  instance.description = function(d) {
    if(!arguments.length) return description;
    description = d;
    return instance;
  }

  return instance;
}

var widget = SimpleWidget({color: '#11AED3'})
  .headline('Basic Widget')
  .description('This is a very basic widget demo of functional js...')
  .render();
