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
          <span v-for="repo in repos" :key="repo.name">
            {{ repo.name }}, 
          </span>
        </p>
      </b-col>
      <b-col sm="12" md="8">
        <Bar :chart-data="repoCommitCounts" />
        <Linechart />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
// import { Bar } from 'vue-chartjs'
import Linechart from './BarChart.vue'

export default {
  name: "Work",
  components: {
    Linechart
  },
  data() {
    return {
      repos: [],
      languages: [],
      commits: [],
      repoCommitCounts: []
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
  color: #F8F8F2;
}

.work span {
  color: #A6E22E;
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
