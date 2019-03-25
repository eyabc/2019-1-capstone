<template>
  <div class="map-content" >
    <rightMenu />
    <input id="pac-input" class="controls" type="text" placeholder="위치를 입력해주세요">
    <GmapMap  ref="mapRef" id="map"  class='map-wrap'
    :center="{lat:currentLocation.lat, lng:currentLocation.lng}" ></GmapMap>
  </div>
</template>
<script>
  import rightMenu from '@/components/rightMenu/rightMenu'

  export default {
    components: {
      rightMenu,
    },
    created() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    async mounted () {
       // At this point, the child GmapMap has been mounted, but
       // its map has not been initialized.
       // Therefore we need to write mapRef.$mapPromise.then(() => ...)
       this.$refs.mapRef.$mapPromise.then((map) => {
        map.panTo({lat: 50, lng: 103.80})
        this.initAutocomplete ()   

      })
     },
     data() {
      return {
        currentLocation : { lat : 0, lng : 0},
        searchAddressInput: '',
        city: '',
        country: '',
        map: '',
        marker: '', 
      }
    },
    methods: {
      initAutocomplete() {
        if(this.currentLocation.lat === 0 || this.currentLocation.lng === 0) {
          this.currentLocation = {lat: -33.8688, lng: 151.2195}
        }
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat:this.currentLocation.lat, lng:this.currentLocation.lng},
          zoom: 13,
          mapTypeId: 'roadmap'
        });
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      },
    }
  }
</script>


