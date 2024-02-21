# <center> Leaflet Challenge

## Autor
> **David Castano.** 

><strong>Email:</strong> David.castanoe@yahoo.com

><strong>Linkedin:</strong> https://www.linkedin.com/in/davidcastanoe/

## Description 
The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Instructions
The aim for this project is to <strong>`Create the Earthquake Visualization`</strong>

### <center> Create the Earthquake Visualization
Your first task is to visualize an earthquake dataset. Complete the following steps:
Get your dataset. To do so, follow these steps:

`1` Get your dataset. To do so, follow these steps:

`1.1` The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed Links to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:

<p align='center'> <img alt='USGS Data' src="https://github.com/Dav9nchi/Leaflet-challenge/blob/main/Leaflet-Part-1/Images/3-Data.png"> </p>

`1.2` When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:

<p align='center'> <img alt='JSON Data' src="https://github.com/Dav9nchi/Leaflet-challenge/blob/main/Leaflet-Part-1/Images/4-JSON.png"> </p>

<hr>

`2` Import and visualize the data by doing the following:

`2.1` Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

- Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

- <strong> Hint: </strong> The depth of the earth can be found as the third coordinate for each earthquake.

`2.2` Include popups that provide additional information about the earthquake when its associated marker is clicked.

`2.3` Create a legend that will provide context for your map data.

`2.4` Your visualization should look something like the preceding map.

## Results 
In this seccion of the report we include the results of our analysis taking into consideration the instruction above.

> Map
<p align='center'> <img alt='JSON Data' src="https://github.com/Dav9nchi/Leaflet-challenge/blob/main/Leaflet-Part-1/Images/Results.png"> </p>

> Legend 
<p align='center'> <img alt='JSON Data' src="https://github.com/Dav9nchi/Leaflet-challenge/blob/main/Leaflet-Part-1/Images/Legend.png"> </p>

## Credits
 The research support to make this challenge succesfull comes from edX Tutors, Chat Gpt, AskBCS, Teachers, TA, Google.







