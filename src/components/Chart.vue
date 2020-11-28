<template>
  <div class="container">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { namesRef } from "../firebase/init";
import axios from "axios";
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
Exporting(Highcharts);

import { mapActions } from "vuex";

export default {
  name: "Chart",
  components: {
    highcharts: Chart
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "column"
        },
        title: {
          text: "Blood Group Demographics"
        },
        subtitle: {
          text: "Source: WorldClimate.com"
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: "Blood Group"
          }
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            name: "blood-group",
            data: [
              49.9,
              71.5,
              106.4,
              129.2,
              144.0,
              176.0,
              135.6,
              148.5,
              216.4,
              194.1,
              95.6,
              54.4
            ]
          },
          {
            name: "age range",
            data: [
              49.9,
              71.5,
              106.4,
              129.2,
              144.0,
              176.0,
              135.6,
              148.5,
              216.4,
              194.1,
              95.6,
              54.4
            ]
          }
        ]
      }
    };
  },

  methods: {
    ...mapActions({
      getPatients: "auth/getPatients"
    }),
    getUser() {
      this.getPatients();
    }
  }

  // mounted() {
  //   this.getUser();
  // }
};
</script>

<style scoped>
.container {
  width: 80%;
  height: 700px;
  margin: 30px auto 0 auto;
}
</style>
