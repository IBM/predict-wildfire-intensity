/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 // Initialize and add the map
 var global_position = {
   lat: 39.739236,
   lng: -104.990251
 };
 var marker;
 var map;
 var geocoder;
 var infowindow;

 function initMap() {
   map = new google.maps.Map(
     document.getElementById('map'), {zoom: 4, center: global_position});

   geocoder = new google.maps.Geocoder;
   infowindow = new google.maps.InfoWindow;

   google.maps.event.addListener(map, 'click', function(event) {
     hideIntroMessage()
     global_position= {lat: event.latLng.lat(), lng: event.latLng.lng()};
     showLatLng();
     geocodeLatLng(geocoder, map, infowindow);
   });
 }

 function placeMarker(location) {
   if (marker == undefined){
     marker = new google.maps.Marker({
   	    position: location,
   	    map: map,
   	    animation: google.maps.Animation.DROP,
   	});
   }
   else{
      marker.setPosition(location);
   }
   map.setCenter(location);
 }

 /*
 * Hides the "Please select..." message and shows the predicton results
 */
 function hideIntroMessage () {
   document.getElementById('help-message').style.display = 'none';
   document.getElementById('ml').style.display = 'flex'
 }

 /*
 * Updates the lat/long values shown in the HTML
 */
 function showLatLng() {
   document.getElementById("txtLat").innerHTML = global_position.lat.toFixed(3);
   document.getElementById("txtLong").innerHTML = global_position.lng.toFixed(3);
 }

 function geocodeLatLng(geocoder, map, infowindow) {
   // check if the clicked point is over the ocean or not
   geocoder.geocode({'location': global_position}, function(results, status) {
     if (status === 'OK') {
       if (results[0]) {
         placeMarker(global_position);
         getWatsonMLIntensity(global_position);
       } else {
         window.alert('No results found');
       }
     } else {
      window.alert('We cannot predict fire brightness over the ocean!');
    }
  });
 }

 function setBarWidth(value) {
   var scale = {
     min : 225,
     max : 370
   }
   // calculate % along scale, i.e. width of the bar
   var width = 100 * (value - scale.min)/(scale.max - scale.min)
   // if width < 0, set to 0
   width = (width < 0 ? 0 : width)
   // if width > 100, set to 100
   width = (width > 100 ? 100 : width)
   // set the width of the bar
   document.getElementById('bar-fill').style.width = width + '%';

   // define an array of colors to set the bar to, depending on <width>
   var colors = ['#aa0202', '#ff5500', '#ffa500', '#ffd800', '#f8e683']
   // how big is each color category
   var binSize = (scale.max - scale.min)/(colors.length + 1)
   // get the relevant color from the array, based on the width of the bar
   color = colors[Math.round(width/binSize)]
   // set the color of the bar
   document.getElementById('bar-fill').style.backgroundColor = color;
 }

 function processOK(response) {
     console.log("response");
     console.log(response);

     document.getElementById("ml-output").innerHTML = response.values[0][3].toFixed(2);
     setBarWidth(response.values[0][3])
 }

 function processNotOK() {
     chat('Error', 'Error whilst attempting to talk to Watson Machine Learning');
 }

 function getWatsonMLIntensity(message) {
     console.log('checking stashed context data');
     console.log(message);

     var ajaxData = {};
     ajaxData = message;

     $.ajax({
     	type: 'POST',
     	url: 'modelintensity',
     	data: ajaxData,
     	success: processOK,
     	error: processNotOK
     });
 }
