// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'

// 追加
import SampleTable from './components/SampleTable.vue'
Vue.component('sample-table', SampleTable);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    tableData: null,
    show: false
  },
  created() {
    $.getJSON('tableData.php', (data) => {
      this.tableData = data;
      this.show = true;
    });
  },
  methods: {
    register() {
      $.ajax({
        type: 'POST',
        url: 'tableData.php',
        data: {data: JSON.stringify(this.tableData)}
      }).then(function () {
        alert('登録しました！');
      });
    }
  },
});
