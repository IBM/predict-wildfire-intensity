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

/* eslint-env browser */

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
    global_position= {lat: event.latLng.lat(), lng: event.latLng.lng()};
    document.getElementById("txtLat").value = event.latLng.lat().toFixed(3);
    document.getElementById("txtLong").value = event.latLng.lng().toFixed(3);
    onLatClick();
  });

  placeMarker(global_position);

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

function  setLatLng(){
    global_position = {lat: parseFloat(txtLat.value).toFixed(3), lng: parseFloat(txtLong.value).toFixed(3)};
    onLatClick();
  };

function onLatClick() {
    geocodeLatLng(geocoder, map, infowindow);
//    placeMarker(global_position);
    //invokeAjax(global_position);
}

function geocodeLatLng(geocoder, map, infowindow) {

  geocoder.geocode({'location': global_position}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        placeMarker(global_position);
        invokeAjax(global_position);
      } else {
        window.alert('No results found');
      }
    } else {
     window.alert('We cannot predict fire brightness over the ocean!');
   }
 });
}

function processOK(response) {
    console.error("response");
    console.error(response);

    document.getElementById("txtOut").value = response.values[0][3].toFixed(3);
}

function processNotOK() {
    chat('Error', 'Error whilst attempting to talk to Bot');
}

function invokeAjax(message) {
    console.error('checking stashed context data');
    console.error(message);

    var ajaxData = {};
    ajaxData = message;

    $.ajax({
	type: 'POST',
	url: 'upload',
	data: ajaxData,
	success: processOK,
	error: processNotOK
    });
}
