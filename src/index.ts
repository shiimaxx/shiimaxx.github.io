import Vue from "vue";
import * as request from "superagent";

let v = new Vue({
  el: "#app",
  data: {
    entries: []
  },
  created: function() {
    var url:string = "https://qiita.com/api/v2/users/shiimaxx/items";
    request
      .get(url)
      .then((res) => {
        this.entries = JSON.parse(res.text);
      })
  }
})