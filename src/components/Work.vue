<template>
  <div class="work">
    <b-row class="imagetiles">
      <b-col sm="12" md="6" lg="6">
        <svg class="repo-charts"></svg>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import * as d3 from "d3";

export default {
  name: "Work",
  data() {
    return {
      repos: [],
      languages: [],
      commits: [],
      repoCommitCounts: [],
    };
  },
  methods: {
    renderRepoChart: (data) => {
      // let width = 420;
      let barHeight = 20;
      let x = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(
            data.map((repo) => {
              return repo.commitcount;
            })
          ),
        ])
        .range([0, 50]);
      let chart = d3
        .select(".repo-charts")
        .attr("width", 50)
        .attr("height", 200);
      let bar = chart
        .selectAll("g")
        .data(
          data.map((repo) => {
            return repo.commitcount;
          })
        )
        .enter()
        .append("g")
        .attr("transform", function (d, i) {
          return "translate(0," + i * barHeight + ")";
        });
      bar
        .append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);
      bar
        .append("text")
        .attr("x", function (d) {
          return x(d) - 6;
        })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function (d) {
          return d;
        });
    },
  },
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
            repo: repo.name,
            commitcount: commitCount.reduce(
              (accumulator, current) => accumulator + current
            ),
          };
        });

        this.repoCommitCounts = repoArr;
      });

    await this.renderRepoChart(this.repoCommitCounts);
  },
};
</script>

<style scoped>
.work {
  text-align: center;
}
.repo-charts {
  rotate: -90deg;
}

.repo-charts rect {
  fill: #9effff;
}

.repo-charts text {
  fill: white;
  font: 10px sans-serif;
  text-anchor: end;
}
</style>
