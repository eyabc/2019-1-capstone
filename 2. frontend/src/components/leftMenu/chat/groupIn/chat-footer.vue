<template>
	<div class="chat-footer">

		<form>
		<textarea rows="1" class="chat-input"></textarea>
		<input type="submit" name="" value="send" >
		</form>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			
		},
		data(){
			return {
			}
		},
		methods: {
			resizeTextarea (event) {
				if(100 < event.target.scrollHeight) {
					event.target.style.overflowY = 'scroll'
				} else {
					event.target.style.height = 'auto'
					event.target.style.height = (event.target.scrollHeight) + 'px'
					event.target.style.top = 30 - (event.target.scrollHeight) + 'px'
					event.target.style.overflowY = 'hidden'
				}
			},
		},
		mounted () {
			this.$el.addEventListener('input', this.resizeTextarea)
		},
		beforeDestroy () {
			this.$el.removeEventListener('input', this.resizeTextarea)
		},
		render () {
			return this.$slots.default[0]
		},
	}


</script>
<style type="text/css">



.outline-0 {
	outline: 0;
}
</style>