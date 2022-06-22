<template>
  <div class="work">
    <b-row>
      <b-col sm="12" class="text-center">
        <b>Languages:</b>
        <p>
          <span v-for="(language, i) in languages" :key="language">
            {{ language }}
            <span v-if="i != Object.keys(languages).length - 1">, </span>
          </span>
        </p>
        <b>Latest projects:</b>
        <p>
          <a :href="repo.html_url" v-for="(repo, index) in repos" :key="repo.name">
            {{ repo.name }}
            <span v-if="index != Object.keys(repos).length - 1">, </span>
          </a>
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Work",
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

.work span, a {
  color: #a6e22e;
}

svg.chart {
  position: relative;
  bottom: 43px;
  width: 100%;
  height: 248px;
}
</style>
