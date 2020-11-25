// Part 1: The axis label below the X axis and next to the Y axis
// Part 2: The x-axis scale & y-axis scale
// Part 3: The tooltip popup on mouse move-over
// Part 4: The circle bubbles 
// Part 5: The (abbr state) text inside the circle bubbles

var height = window.innerHeight;
var width = window.innerWidth;

// Margin for SVG graphics
var margin = {
  top: 20,
  bottom: 60,
  right: 20,
  left: 120,
  xscale: 130,
  xlabel: 110,
  ylabel: 110
};

// Create the SVG canvas inside <div id="scatter"> in index.html
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart");

//===============================================
// Part 1: The axis label below the X axis
svg.append("g").attr("class", "x_axis_label");
var xlabel = d3.select(".x_axis_label");

// x-axis label: Poverty
xlabel
  .append("text")
  .attr("y", -26)
  .attr("label_name", "poverty")
  .attr("label_axis", "x")
  .attr("class", "aText active x")
  .text("In Poverty (%)");

// x, y coordinates for x-axis label  
// y coordinate of Poverty is (height - margin.bottom - 26)
// .attr("y", -26) determines how close to the x-axis scale
xlabel.attr(
  "transform",
  "translate(" +
  ((width - margin.xlabel) / 2 + margin.xlabel) + ", " +
  (height - margin.bottom) +
  ")"
);

// Part 1: The axis label next to the Y axis
svg.append("g").attr("class", "y_axis_label");
var ylabel = d3.select(".y_axis_label");

// y-axis label: Obesity
ylabel
  .append("text")
  .attr("y", -26)
  .attr("label_name", "obesity")
  .attr("label_axis", "y")
  .attr("class", "aText active y")
  .text("Obese (%)");

// x, y coordinates for x-axis label
// y coordinate of Obesity is ((height + margin.ylabel) / 2 - margin.ylabel - 26)
// Because of rotate(-90), // .attr("y", -26) determines how close to the y-axis scale
ylabel.attr(
  "transform",
  "translate(" +
  margin.left + ", " +
  ((height + margin.ylabel) / 2 - margin.ylabel) + ")rotate(-90)"
);

//===============================================

