<template>
  <div class="work">
    <b-row class="imagetiles">
      <b-col sm="12" md="6" lg="3">
        <b-img
          src="https://picsum.photos/100/100/?image=41"
          fluid
          alt="Responsive image"
        ></b-img>
      </b-col>
      <b-col sm="12" md="6" lg="3">
        <b-img
          src="https://picsum.photos/100/100/?image=41"
          fluid
          alt="Responsive image"
        ></b-img>
      </b-col>
      <b-col sm="12" md="6" lg="3">
        <b-img
          src="https://picsum.photos/100/100/?image=41"
          fluid
          alt="Responsive image"
        ></b-img>
      </b-col>
      <b-col sm="12" md="6" lg="3">
        <b-img
          src="https://picsum.photos/100/100/?image=41"
          fluid
          alt="Responsive image"
        ></b-img>
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
      repoCommitCounts: [],
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
            repo: repo.name,
            commitcount: commitCount.reduce(
              (accumulator, current) => accumulator + current
            ),
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
</style>
