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
  },
  filters: {
    toReadableDate: function(strDate: string) {
      var date = new Date(strDate);
      var year = date.getFullYear();
      var month = ("0"+(date.getMonth() + 1)).slice(-2);
      var day = ("0"+date.getDate()).slice(-2);
      return year+"-"+month+"-"+day
    }
  }
})