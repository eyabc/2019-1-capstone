import Vue from 'vue'
import store from './store/index'

const bus = new Vue({
	data: {
		map: null,
		locationTarget: null,
		rightFold: false,
		rightMenu: 'groupList'
	},
	methods: {
		initMap(currentLocation, groups) {
		//	if(currentLocation.lat === 0 || currentLocation.lng === 0) {
		//		currentLocation = {lat: -33.8688, lng: 151.2195}
		//	}
		this.rightMenu = 'groupList'
		this.map = new google.maps.Map(document.getElementById('map'), {
			center: {lat:currentLocation.lat, lng:currentLocation.lng},
			zoom: 13,
			mapTypeId: 'roadmap'
		});
		this.initSearchBox(document.getElementById('pac-input'))
		groups.forEach((item, key)=> {
			this.setMarker({ lat: item.lat ,lng: item.lng }, item )
		})

	},
	initSearchBox (input) {
		    // Create the search box and link it to the UI element.
		    const map = this.map
		    const searchBox = new google.maps.places.SearchBox(input);
		    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

		    // Bias the SearchBox results towards current map's viewport.
		    let markers = []
		    const bounds_changed = () => { searchBox.setBounds(map.getBounds()); }
		    const places_changed = () => {
		    	const places = searchBox.getPlaces()
		    	if (places.length == 0) return;
		      // Clear out the old markers.
		      markers.forEach(marker => marker.setMap(null))
		      markers = [];

		      // For each place, get the icon, name and location.
		      const bounds = new google.maps.LatLngBounds();
		      places.forEach(place => {
		      	if (!place.geometry) return;
		      	const icon = { url: place.icon, size: new google.maps.Size(71, 71), origin: new google.maps.Point(0, 0), anchor: new google.maps.Point(17, 34), scaledSize: new google.maps.Size(25, 25) };
			      // Create a marker for each place.
			      markers.push(new google.maps.Marker({map, icon, title: place.name, position: place.geometry.location}))
			      if (this.locationTarget !== null) {
			      	const location = place.geometry.location
			      	this.locationTarget.$emit('getLocation', {
			      		lat: location.lat(),
			      		lng: location.lng()
			      	})
			      }
			      place.geometry.viewport ? bounds.union(place.geometry.viewport) : bounds.extend(place.geometry.location)
			  });
		      map.fitBounds(bounds);
		  }
		  map.addListener('bounds_changed', bounds_changed);
		  searchBox.addListener('places_changed', places_changed);
		},
		initLocation (target) {
			this.map.setZoom(18);
			this.locationTarget = target
		},
		memberLocation(Location, data) {
			var $this = this
			this.map.setZoom(18);
			this.map.setCenter({lat: Location.lat, lng: Location.lng}); 
			var marker = new google.maps.Marker({
				position: Location,
				map: this.map,
				title: "hle",
				icon: 'http://maps.google.com/mapfiles/ms/icons/yellow.png'

			});
			var contentString = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h3 id="firstHeading" class="firstHeading">'+data.nickname+'</h3>'+
			'<div id="bodyContent">'+
			'<p>'+data.place+'</p>'+
			'</div>'+
			'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			marker.addListener('mouseover', function() {
				infowindow.open($this.map, marker);
			});
			marker.addListener('mouseout', function() {
				infowindow.close($this.map, marker);
			});

		},
		setLocation(Location) {
			if(Location.lat === 0 || Location.lng === 0) {
				alert('지도에 등록된 그룹이 아닙니다.') 
				return 
			}
			this.map.setZoom(18);
			this.map.setCenter({lat: Location.lat, lng: Location.lng}); 
		},
		setMarker(Location, data) {
			if(Location.lat === 0 || Location.lng === 0) {
				return 
			}
			var $this = this
			var marker = new google.maps.Marker({
				position: Location,
				map: this.map,
				title: "hle",
				icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
			});
			var contentString = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h3 id="firstHeading" class="firstHeading">'+data.name+'</h3>'+
			'<div id="bodyContent">'+
			'<p>'+data.place+'</p>'+
			'</div>'+
			'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			marker.addListener('mouseover', function() {
				infowindow.open($this.map, marker);
			});
			marker.addListener('mouseout', function() {
				infowindow.close($this.map, marker);
			});
			// console.log($this.rightFold)

			marker.addListener('click', async () => {
				store.dispatch('getGroupInfo', { cgidx: data.cgidx })
				store.dispatch('getGroupMemberRelation', {commit: 'getGroupMemberRelation'})
				this.rightMenu = 'groupInfo'
				this.rightFold = true
			});
		},
	}
})


export default bus