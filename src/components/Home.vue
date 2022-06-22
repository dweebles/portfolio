<template>
  <div class="work">
    <b-row>
      <b-col sm="12">
        <b>Coffee Consumption and Hours Coding</b>
        <D3LineChart :config="chart_config" :datum="chart_data"></D3LineChart>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import { D3LineChart } from "vue-d3-charts";

export default {
  name: "Home",
  components: {
    D3LineChart,
  },
  data() {
    return {
      repos: [],
      languages: [],
      commits: [],
      repoCommitCounts: [],
      chart_data: [
        { hoursCoding: 805, coffeeConsumption: 184, date: 2010 },
        { hoursCoding: 612, coffeeConsumption: 215, date: 2011 },
        { hoursCoding: 1300, coffeeConsumption: 203, date: 2012 },
        { hoursCoding: 2700, coffeeConsumption: 490, date: 2013 },
        { hoursCoding: 2805, coffeeConsumption: 402, date: 2014 },
        { hoursCoding: 2921, coffeeConsumption: 416, date: 2015 },
        { hoursCoding: 2713, coffeeConsumption: 220, date: 2016 },
        { hoursCoding: 2845, coffeeConsumption: 553, date: 2017 },
        { hoursCoding: 2179, coffeeConsumption: 480, date: 2018 },
        { hoursCoding: 3200, coffeeConsumption: 915, date: 2019 },
      ],
      chart_config: {
        values: ["hoursCoding", "coffeeConsumption"],
        color: {
          scheme: "schemeSet2",
          axis: "#a6e22e",
        },
        curve: "curveLinear",
        date: {
          key: "date",
          inputFormat: "%Y",
          outputFormat: "%Y",
        },
        axis: {
          yTicks: 3
        },
        points: {
          visibleSize: 3,
          hoverSize: 6,
        },
        tooltip: {
          labels: false,
        },
        margin: {
          top: 0,
          right: 0,
          bottom: 130,
          left: 0,
        },
      },
    };
  },
  methods: {},
  async mounted() {
    await axios
      .get("https://api.github.com/users/dweebles/repos")
      .then((response) => {
        this.languages = [
          ...new Set(
            response.data.map((repo) => {
              return repo.language;
            })
          ),
        ];

        this.repos = response.data;
      });

    await axios
      .get("https://api.github.com/users/dweebles/events")
      .then((response) => {
        this.commits = response.data;

        const repoArr = this.repos.map((repo) => {
          const commitCount = this.commits.map((commit) => {
            let count = 0;

            if (commit.repo.id === repo.id) {
              count++;
            }

            return count;
          });

          const commitDate = this.commits.map((commit) => {
            return commit.created_at;
          });

          return {
            name: repo.name,
            total: commitCount.reduce(
              (accumulator, current) => accumulator + current
            ),
            date: commitDate,
          };
        });

        this.repoCommitCounts = repoArr;
      });
  },
};
</script>

<style scoped>
.work {
  text-align: center;
}

.work b {
  color: #f8f8f2;
}

.work span {
  color: #a6e22e;
}

svg.chart {
  position: relative;
  bottom: 43px;
  width: 100%;
  height: 248px;
}
</style>
