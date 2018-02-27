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
        mounted: function() {
			this.$nextTick(() => {
				document.getElementById('test-hot').style.height = 'auto';
            });
        }
	}
</script>

<style>
    #test-hot {
        min-width: 600px;
        height: 600px;
        overflow: hidden;
    }

    .wtHolder {
        height: auto !important;
    }
</style>