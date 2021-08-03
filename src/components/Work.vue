<template>
  <div class="work">
    <b-row class="imagetiles">
      <b-col sm="12" md="12" lg="12">
        <D3BarChart
          :config="chart_config"
          :datum="chart_data"
          title="Github Repos"
        ></D3BarChart>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import { D3BarChart } from "vue-d3-charts";

export default {
  name: "Work",
  components: {
    D3BarChart,
  },
  data() {
    return {
      repos: [],
      languages: [],
      commits: [],
      repoCommitCounts: [],
      chart_data: [
        {
          name: "Lorem",
          total: 30,
        },
        {
          name: "Ipsum",
          total: 21,
        },
        {
          name: "Dolor",
          total: 20,
        },
      ],
      chart_config: {
        key: false,
        values: false,
        axis: {
          yTitle: false,
          xTitle: "false",
          yFormat: ".0f",
          xFormat: ".0f",
          yTicks: 10,
          xTicks: 10,
        },
        color: {
          key: false,
          keys: false,
          scheme: false,
          current: "#1f77b4",
          default: "#AAA",
          axis: "#000",
        },
        currentKey: false,
        labelRotation: 0,
        margin: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        },
        orientation: "vertical",
        tooltip: { label: false },
        transition: {
          duration: 350,
          ease: "easeLinear",
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

    // await this.renderRepoChart(this.repoCommitCounts);
  },
};
</script>

<style scoped>
.work {
  text-align: center;
}
.repo-charts {
  /* rotate: -90deg; */
  /* width: 100%; */
  /* height: 100%; */
}

.repo-charts rect {
  fill: #9effff;
}

.repo-charts text {
  fill: white;
  font: 10px sans-serif;
  text-anchor: end;
}

.x-axis text {
  /* Translate and rotate labels so they fit below bars better. */
  -moz-transform: rotate(-45) !important;
  transform: rotate(-45) !important;
}
</style>
