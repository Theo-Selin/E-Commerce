<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2>Add new owner</h2>
          <form>
            <!--- Name --->
            <div class="a-spacing-top-medium">
              <label>Name</label>
              <input class="a-input-text" style="width: 100%" v-model="name" />
            </div>

            <!--- About --->
            <div class="a-spacing-top-medium">
              <label>About</label>
              <input class="a-input-text" style="width: 100%" v-model="about" />
            </div>

            <!--- Photo selection --->
            <div class="a-spacing-top-medium">
              <label style="margin-bottom: 0px">Photo</label>
              <div class="a-row a-spacing-top-medium">
                <label class="choosefile-button">
                  <i class="fal fa-plus"></i>
                  <input type="file" @change="onFileSelected" />
                </label>
                <p>{{ fileName }}</p>
              </div>
            </div>

            <!--- Button --->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddOwner">Add</span>
                </span>
              </span>
            </div>
          </form>
          <br />
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="owner in owners"
              :key="owner._id"
            >
              {{ owner.name }}
            </li>
          </ul>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:8000/api/owners");
      return {
        owners: response.owners,
      };
    } catch (error) {
      console.log(error);
    }
  },

  data() {
    return {
      name: "",
      about: "",
      selectedFile: null,
      fileName: "",
    };
  },

  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },
    async onAddOwner() {
      try {
        let data = new FormData();
        data.append("name", this.name);
        data.append("about", this.about);
        data.append("photo", this.selectedFile, this.selectedFile.name);
        let response = await this.$axios.$post(
          "http://localhost:8000/api/owners",
          data
        );

        this.owners.push({ name: this.name });
        console.log(owners);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
