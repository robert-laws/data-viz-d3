# Data Visualization with D3.js

## Resources

* The [D3 gallery](https://github.com/d3/d3/wiki/Gallery) contains some of the most interesting examples that you can find online regarding D3 usage. It contains examples on different visualization charts, specific techniques, and some interesting visualization implementations in the wild, among others.
* [Christophe Viau's D3 Gallery](http://christopheviau.com/d3list/gallery.html) is another D3 gallery with categorization that helps you find your desired visualization example online quickly.
* The [D3 tutorials page](https://github.com/d3/d3/wiki/Tutorials) contains a collection of tutorials, talks, and slides created by various contributors over time that demonstrates in detail how to use different D3 concepts and techniques.
* [D3 plugins](https://github.com/d3/d3-plugins) can be found at https://github.com/d3/d3-plugins . Maybe some features are missing in D3 for your visualization needs? Before you decide to implement your own, make sure that you check out the D3 plugin repository. It contains a wide variety of plugins that provide some of the common and, sometimes, uncommon features in the visualization world.
* The [D3 API](https://github.com/d3/d3/blob/master/API.md) is very well documented. This is where you can find detailed explanations for every function and property that the D3 library has to offer.
* [Mike Bostok's Blocks](http://bl.ocks.org/mbostock) is a D3 example site, where some of the more intriguing visualization examples can be found and is maintained by its author Mike Bostock.
* [JS Bin](http://jsbin.com/ugacud/1/edit) is a prebuilt D3 test and experiment environment completely hosted online. You can easily prototype a simple script using this tool or share your creation with other members in the community.
* [JS Fiddle](http://jsfiddle.net/qAHC2/) is similar to JS Bin; it also is a hosted-online JavaScript code prototyping and sharing platform.
* [D3.js on Stack Overflow](http://stackoverflow.com/questions/tagged/d3.js): Stack Overflow is the most popular community-based free Q&A site for technologists. D3 is a specific category on the Stack Overflow site to help you reach the experts and get an answer to your question quickly.
* The [D3 Google group](https://groups.google.com/forum/?fromgroups#!forum/d3-js): This is the official user group for not just D3 but also other related libraries in its ecosystem.

## CSS3 Selectors

* #foo: Selects elements with foo as the value of id
     <div id="foo">
* foo: Selects element foo
     <foo>
* .foo: Selects elements with foo as the value of class
     <div class="foo">
* [foo=goo]: Selects elements with the foo attribute value and sets it to goo
     <div foo="goo">
* foo goo: Selects the goo element inside the foo element
     <foo><goo></foo>
* foo#goo: Selects the foo element with goo as the value of id
     <foo id="goo">
* foo.goo: Selects the foo element with goo as the value of class
     <foo class="goo">
* foo:first-child: Selects the first child of the foo elements
     <foo> // <-- this one
     <foo>
     <foo>  
* foo:nth-child(n): Selects the nth child of the foo elements (n is one-based, starting at 1 for the first child)
     <foo>
     <foo> // <-- foo:nth-child(2)
     <foo> // <-- foo:nth-child(3)

## Single Element Selection

* selection.attr: This function allows you to retrieve or modify a given attribute on the selected element(s):
     // set foo attribute to goo on p element
     d3.select("p").attr("foo", "goo");  
     // get foo attribute on p element
     d3.select("p").attr("foo");

* selection.classed: This function allows you to add or remove CSS classes on the selected element(s):
     // test to see if p element has CSS class goo
     d3.select("p").classed("goo");
     // add CSS class goo to p element
     d3.select("p").classed("goo", true);
     // remove CSS class goo from p element. classed function
     // also accepts a function as the value so the decision  
     // of adding and removing can be made dynamically
     d3.select("p").classed("goo", function(){return false;});

* selection.style: This function lets you set the CSS style with a specific name to the specific value on the selected element(s):
     // get p element's style for font-size
     d3.select("p").style("font-size");
     // set font-size style for p to 10px
     d3.select("p").style("font-size", "10px");
     // set font-size style for p to the result of some  
     // calculation. style function also accepts a function as  
     // the value can be produced dynamically
     d3.select("p").style("font-size", function(){  
         return parseFloat(d3.select(this).style('font-size')) + 10 + 'px';
     });

* Variable this in the preceding anonymous function is the DOM element object for the selected element <p>; therefore, it needs to be wrapped in d3.select again in order to access its style attribute.

* selection.text: This function allows you to access and set the text content of the selected element(s) as follows:
     // get p element's text content
     d3.select("p").text();
     // set p element's text content to "Hello"
     d3.select("p").text("Hello");
     // text function also accepts a function as the value,  
     // thus allowing setting text content to some dynamically  
     // produced content
     d3.select("p").text(function(){
       return Date();
     });

* selection.html: This function lets you modify the element's inner HTML content as shown in the following:
     // get p element's inner html content
     d3.select("p").html();
     // set p element's inner html content to "<b>Hello</b>"
     d3.select("p").html("<b>Hello</b>");
     // html function also accepts a function as the value,  
     // thus allowing setting html content to some dynamically  
     // produced message
     d3.select("p").html(function(){
       return d3.select(this).text() +  
         "<span style='color: blue;'>D3.js</span>";
     });

## Multiple Element Selection

* d3.selectAll
    <div></div>
    <div></div>
    <div></div>

    <script type="text/javascript">
    d3.selectAll("div") // <-- A
      .attr("class", "red box"); // <-- B
    </script>

## Iterating through a selection

* selection.each(function)
    <div></div>
    <div></div>
    <div></div>

    <script type="text/javascript">
    d3.selectAll("div") // <-- A
      .attr("class", "red box") // <-- B
      .each(function (d, i) { // <-- C
          d3.select(this).append("h1").text(i); // <-- D
      });
    </script>

## Subselection

* The descendant combinator: This combinator has the syntax just like selector selector. The descendant combinator, as suggested by its name, is used to describe a loose parent-child relationship between two selections. The reason why it is called a loose parent-child relationship is that the descendant combinatory does not care if the second selection is a child or a grandchild or a great-grandchild of the parent selection.
    div em

* Child combinator: This combinator has the syntax such as selector > selector. The child combinator offers a more restrictive way to describe a parent-child relationship between two elements. A child combinator is defined using a greater-than sign (U+003E, >) character separating the two selectors, as follows:
    span > em
