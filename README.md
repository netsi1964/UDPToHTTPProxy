# UDPToHTTPProxy
An app which will fetch UDP data and exposes it on HTTP

## Inspiration
* [Node js udp server and client](http://www.hacksparrow.com/node-js-udp-server-and-client-example.html)
* [Generate flight data](http://www.findlatitudeandlongitude.com/click-lat-lng-list/#.VlnNsN8ve_A)  
* [Google Maps Custom marker](https://developers.google.com/maps/documentation/javascript/examples/marker-symbol-custom)
* [Google Maps Marker options](https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions)
* [Tornado SVG](https://da.wikipedia.org/wiki/Panavia_Tornado#/media/File:Panavia_Tornado_IDS.svg)

# Running
Run `npm test` from terminal

## Internal file format (master path)
```
id,country,city,type,sim,LAT,LONG,ALT,color;id,country,city,type,sim,LAT,LONG,ALT,color
```

## TODOs
A list containing an autogenerated list of TODOs.
[TODOs](udptohttpproxy.md)
*	Remove marker after 30 seconds of inactivity



# Planes SVG icons
I have drawn a airplanes in SVG and will be using the path for drawing them on the map.
The plane marker will automatically rotate according to the direction using Google Maps API.
![A320](https://cdn.rawgit.com/netsi1964/UDPToHTTPProxy/master/planes/A320_min.svg)
![B737](https://cdn.rawgit.com/netsi1964/UDPToHTTPProxy/master/planes/b737_min.svg)
![F-35](https://cdn.rawgit.com/netsi1964/UDPToHTTPProxy/master/planes/f35_min.svg)
![Tornado](https://cdn.rawgit.com/netsi1964/UDPToHTTPProxy/master/planes/tornado_min.svg)
