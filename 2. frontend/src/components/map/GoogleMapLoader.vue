<template>
	<div class="map-content">
		<rightMenu />
		<GmapMap class='map-wrap'
		:center="{lat:10, lng:10}"
		:zoom="7"
		map-type-id="terrain"

		>


	</GmapMap>
</div>
</template>
<script>
	import rightMenu from '@/components/rightMenu/rightMenu'

	export default {
		components: {
			rightMenu,
		}	
	};
</script>

