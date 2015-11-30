# UDPToHTTPProxy
An app which will fetch UDP data and exposes it on HTTP

# F-35 icon
I have drawn a F-35 airplane in SVG and will be using the path for drawing a F-35 on the map.
The F-35 marker will automatically rotate according to the direction using Google Maps API.
Here is the F-35 SVG vector drawing.

![F-35](https://dl.dropboxusercontent.com/u/3260327/svg/f35_marker.svg)

## Inspiration
* [Node js udp server and client](http://www.hacksparrow.com/node-js-udp-server-and-client-example.html)
* [Generate flight data](http://www.findlatitudeandlongitude.com/click-lat-lng-list/#.VlnNsN8ve_A)  
* [Google Maps Custom marker](https://developers.google.com/maps/documentation/javascript/examples/marker-symbol-custom)
* [Google Maps Marker options](https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions)


## Internal file format
```
id,country,city,type,sim,LAT,LONG,ALT,color;id,country,city,type,sim,LAT,LONG,ALT,color
```
