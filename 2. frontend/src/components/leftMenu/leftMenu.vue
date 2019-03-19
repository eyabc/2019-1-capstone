<template>
	<div class="left-menu-wrap">
		dfsd
		<span class="folding " @click="foldingToggle">
			<span class="folding-arrow"  v-if="!folding">></span>
			<span class="folding-arrow"  v-else><</span>
		</span>
	</div>
</template>
<script type="text/javascript">
  export default {
  data() {
    return {
      folding: false,
    }
  },
  methods: {
  	foldingToggle () {
  		this.folding = ! this.folding
  	}
  }
}
</script>