import Vue from "vue";
import * as request from "superagent";

let v = new Vue({
  el: "#app",
  data: {
    entries: []
  },
  methods: {
    fetchEntries: function() {
      var url:string "https://qiita.com/api/v2/users/shiimaxx/items";
      var res = request
        .get(url)
        .then(function(res) {
          return res.body;
        })
    }
  }
})