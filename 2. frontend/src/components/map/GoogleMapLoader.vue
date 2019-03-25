<template>
  <div class="map-content" >
    <rightMenu />
    <GmapMap class='map-wrap' ref="mapRef" 
    :center="{lat:currentLocation.lat, lng:currentLocation.lng}" 
    :zoom="16"
    :options="{fullscreenControl: false,  streetViewControl: false}"
    >

  </GmapMap>
  <div class="search-myLocation">
    <input type="text" v-model="searchAddressInput" v-on:change="searchLocation()"></input>
  </div>
</div>
</template>
<script>
  import rightMenu from '@/components/rightMenu/rightMenu'

  export default {
    components: {
      rightMenu,
    },
    async mounted () {
       // At this point, the child GmapMap has been mounted, but
       // its map has not been initialized.
       // Therefore we need to write mapRef.$mapPromise.then(() => ...)
       this.$refs.mapRef.$mapPromise.then((map) => {
        map.panTo({lat: 50, lng: 103.80})

        // #28 city country save
        const json = fetch("http://ip-api.com/json", 
          ).then(res=>res.json()).then(json=>{    
            this.city = json.city
            this.country = json.country
            this.geolocation()
          })

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
      geolocation : function() {
        navigator.geolocation.getCurrentPosition((position) => {
          this.currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      },
      searchLocation: function() {
        var geocoder = new google.map.Geocoder();
        geocoder.geocode({'address': this.searchAddressInput}, (results, status) => {
          if (status === 'OK') {
            this.currentLocation.lat = results[0].geometry.location.lat();
            this.currentLocation.lng = results[0].geometry.location.lng();
          }
        });
      },
    }
    
            // #28 미완성
          //   setCountry (country) {
          //     let geocoder = new google.maps.Geocoder();
          //     geocoder.geocode({ 'address': country }, function(results, status){
          //       if (status == google.maps.GeocoderStatus.OK) {
          //     // this.setCenter(results[0].geometry.location);
          //   } else {
          //     alert("Could not find location: " + country);
          //   }
          // });

        }

      </script>


