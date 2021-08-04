<template>
  <div class="work">
    <b-row>
      <b-col sm="12" md="4" class="text-left">
        <b>Languages:</b>
        <p>
          <span v-for="language in languages" :key="language">
            {{ language }},
          </span>
        </p>
        <b>Latest projects:</b>
        <p>
          <span v-for="repo in repos" :key="repo.name"> {{ repo.name }}, </span>
        </p>
      </b-col>
      <b-col sm="12" md="8">
        <D3LineChart :config="chart_config" :datum="chart_data"></D3LineChart>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import { D3LineChart } from "vue-d3-charts";

export default {
  name: "Work",
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
        { hours: 238, production: 134, date: 2000 },
        { hours: 938, production: 478, date: 2001 },
        { hours: 1832, production: 1392, date: 2002 },
        { hours: 2092, production: 2343, date: 2003 },
        { hours: 2847, production: 2346, date: 2004 },
        { hours: 2576, production: 2233, date: 2005 },
        { hours: 2524, production: 2325, date: 2006 },
        { hours: 1648, production: 2456, date: 2007 },
        { hours: 2479, production: 2329, date: 2008 },
        { hours: 3200, production: 2438, date: 2009 },
      ],
      chart_config: {
        values: ["hours", "production"],
        color: {
          scheme: "schemeSet2",
        },
        date: {
          key: "date",
          inputFormat: "%Y",
          outputFormat: "%Y",
        },
        axis: {
          yTicks: 3,
        },
        points: {
          visibleSize: 3,
          hoverSize: 6,
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

          return {
            name: repo.name,
            total: commitCount.reduce(
              (accumulator, current) => accumulator + current
            ),
          };
        });

        this.repoCommitCounts = repoArr;
      });

    this.renderChart(this.chartData, {});

    // await this.renderRepoChart(this.repoCommitCounts);
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
