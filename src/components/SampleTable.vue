<template>
    <div id="example-container" class="wrapper">
        <HotTable :root="root" :settings="Object.assign(this.hotSettings, {data:this.data})"></HotTable>
    </div>
</template>

<script>
	import HotTable from 'vue-handsontable-official';
	import Vue from 'vue';

	export default {
		data: function () {
			return {
				root: 'test-hot',
				hotSettings: hotSettings
			}
		},
		name: 'SampleApp',
		components: {
			HotTable
		},
		props: ['data'],
	}
</script>

<style>
    #test-hot {
        min-width: 600px;
        min-height: 1500px;
        overflow: hidden;
    }
</style>