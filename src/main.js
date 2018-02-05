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
    setTimeout(() => {
      this.tableData = [{"name":"apple","price":200},{"name":"orange","price":120}];
      this.show = true;
    }, 1000);
  },
  methods: {
    register() {
      alert(JSON.stringify(this.tableData) + '登録しました！');
    }
  },
});