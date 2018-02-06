<template>
    <div id="example-container" class="wrapper">
        <HotTable :root="root" :settings="hotSettings"></HotTable>
    </div>
</template>

<script>
  import HotTable from 'vue-handsontable-official';
  import Vue from 'vue';

  export default {
    data: function () {
      return {
        root: 'test-hot',
        hotSettings: {
          colHeaders: colHeaders,
          rowHeaders: true,
          data: this.data
        },
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
        width: 600px;
        height: 200px;
        overflow: hidden;
    }
</style>