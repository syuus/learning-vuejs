import Vue from 'vue';

const app = new Vue({
  el: '#app',
  data: {
    uri: '',
  },
  computed: {
    timeLineUri: function() {
      let separator = this.uri.match(/\?/) ? '&' : '?';
      return this.uri + separator + 'm=ln_tl';
    },
    messageUri: function () {
      let separator = this.uri.match(/\?/) ? '&' : '?';
      return this.uri + separator + 'm=ln_ms';
    },
  }
})