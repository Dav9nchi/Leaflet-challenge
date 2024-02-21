// ------------------------------------------------------------------------------------------------------------------
//  1.1 GET URL.
//  1.2 D3 JSON to request data
//  1.3 create a MAP
//  1.4 create Street tile layer

//  1.1  USGS URL All Earthquakes from the Past 7 Days 
let USGS_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

//  1.2 Perform a GET request to THE URL **
d3.json(USGS_url).then((data)=>{createFeatures(data.features)})

//  1.3 Create a map 
let myMap = L.map("map", {center: [30, -100],zoom: 3.5,})

//  1.4 Create the Street tile layer **
let street_map = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap);

// ------------------------------------------------------------------------------------------------------------------
// 2.1 Data markers size by their magnitud
// 2.2 Marker Color by the earthquake depth 

// NOTE: Data markers reflect the MAGNITUD of the earthquake by THEIR SIZE and the DEPTH of the earthquake by COLOR.
// NOTE: Earthquakes with higher magnitudes should appear larger, earthquakes with greater depth should appear darker in color.

// 2.1 Data markers size by their magnitud **
// NOTE: Earthquakes with higher magnitudes should appear larger,
function markerSize(magnitud) {return magnitud * 3;}

// 2.2 Marker Color by the earthquake depth 
// NOTE: earthquakes with greater depth should appear darker in color.
function getColor(depth) {
    return depth > 100  ? '#800026' :
           depth > 85   ? '#BD0026' :
           depth > 70   ? '#E31A1C' :
           depth > 55   ? '#FC4E2A' :
           depth > 40   ? '#FD8D3C' :
           depth > 25   ? '#FEB24C' :
           depth > 10   ? '#FED976' :
                          '#FFEDA0' ;}
// ------------------------------------------------------------------------------------------------------------------
// 3 Create features and add them to the map

// 'createFeatures' have data.features information from the URL LINE 6.
function createFeatures(earthquakeData) 

// Funcionality: 'L.geoJSON earthquakeData' create a layer from GeoJSON data.**
{L.geoJSON(earthquakeData, 

// Funcionality: pointToLayer defines how GeoJSON POINTS will be converted into Leaflet layer (circle markers). 
// For each point in the GeoJSON data, we called 2 parameters: 
// FEATURE (representing the point) and LATLNG (coordinates of the point)
{pointToLayer:(feature, latlng) =>
  
// Funcionality: L.circleMarker creates the circle at LATLNG coordinates
{return L.circleMarker(latlng, 
                                        
// NOTE: Earthquakes with higher magnitudes should appear larger   
                                    {radius:   markerSize(feature.properties.mag),

// Hint: The DEPTH of the earth can be found as the third coordinate for each earthquake.
                                    fillColor: getColor(feature.geometry.coordinates[2]),

// Funcionality: add properties like color, weight, opacity, and fillOpacity to the appearance of the marker.
                                    color:     "black",
                                    weight:    0.5,
                                    opacity:   1,
                                    fillOpacity:1})
                  
// NOTE: Include POPUPS that provide ADDITIONAL INFO about the earthquake when its associated marker is clicked.
.bindPopup(`<h4> <strong> <center> ${feature.properties.place} </strong> </h3>
      <hr> <p> <strong> Magnitude: </strong> ${feature.properties.mag}</p>
           <p> <strong> Depth: </strong> ${feature.geometry.coordinates[2]}</p>`)}}).addTo(myMap)

// ------------------------------------------------------------------------------------------------------------------
// 4. Create a LEGEND that will provide context for your map data.

// Funcionality: L.control object called LEGEND, specifies its position on the map to be at the bottom left corner.
let legend = L.control({position: 'bottomleft'})

// Funcionality: This assigns a function to the onAdd property of the legend control.
legend.onAdd = (myMap) =>

// Funcionality: "creates a new DIV with the CLASS "info legend". DIV will contain the legend content."
{let div = L.DomUtil.create('div', 'info legend');
                          
// Funcionality: inside the new DIV adds an HTML heading (<h3>) with the text "Depth" centered at the top of the LEGEND.
                                      div.innerHTML += '<h3> <center> Depth';

// Funcionality: the DEPTH intervals for the legend. Each interval represents a range of depths.
                                      let depths = [-10, 10, 25, 40, 55, 70, 85, 100];

// Funcionality: the COLORS for each DEPTH interval. These colors will be used to style the legend items.
                                      let colors = ['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];

// Funcionality: loop through each DEPTH interval.
                                      for (let i = 0; i < depths.length; i++) 

// Funcionality: inside of new DIV 
// *'<i style="background:' + colors[i] + '"></i>'* creates (<i>) with a background COLOR corresponding to the current DEPTH interval. 
{div.innerHTML +='<i style="background:' + colors[i] + '"></i>'

// Funcionality:
// * + depths[i] + * adds the depth value to the legend
// * (depths[i + 1] ? '&ndash;' + depths[i + 1] * If there is another depth interval after the current one (depths[i + 1] exists), it adds a dash and the next depth value.
// * + '<br>' : '+' * it adds a plus sign, indicating that it's the last depth interval.
// * return div} * returns the div element containing the legend content.
                                    + depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+')}return div}

// Funcionality:
// After defining the legend control and its content this line adds the legend to the Leaflet map (myMap).
                                    legend.addTo(myMap)}
// ------------------------------------------------------------------------------------------------------------------