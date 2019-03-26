<template>
  <div class="map-content" >
    <rightMenu />
      <GmapMap  ref="mapRef" id="map"  class='map-wrap'
    :center="{lat:currentLocation.lat, lng:currentLocation.lng}" ></GmapMap>
  </div>
</template>
<script>
  import rightMenu from '@/components/rightMenu/rightMenu'
  import eventBus from '@/eventBus'

  export default {
    components: {
      rightMenu,
    },
    async mounted () {
			// At this point, the child GmapMap has been mounted, but
			// its map has not been initialized.
			// Therefore we need to write mapRef.$mapPromise.then(() => ...)
      navigator.geolocation.getCurrentPosition(position => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
	      this.$refs.mapRef.$mapPromise.then(map => {
	        map.panTo({lat: 50, lng: 103.80})
	        eventBus.initMap(this.currentLocation)
	      })
      })
     },
     data() {
      return {
        currentLocation : { lat : 0, lng : 0},
        searchAddressInput: '',
        map: '',
        marker: '',
      }
    },
  }
</script>


