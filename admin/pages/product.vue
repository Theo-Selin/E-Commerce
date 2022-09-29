<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add new product</h2>
            <form>
              <!--- Category dropdown --->
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <select class="a-select-option">
                  <option
                    v-for="category in categories"
                    :value="category._id"
                    :key="category._id"
                  >
                    {{ category.type }}
                  </option>
                  <option value="2">2</option>
                </select>
              </div>

              <!--- Owner dropdown --->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option">
                  <option
                    v-for="owner in owners"
                    :value="owner._id"
                    :key="owner._id"
                  >
                    {{ owner.name }}
                  </option>
                </select>
              </div>

              <!--- Title input --->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Title</label>
                <input type="text" class="a-input-text" style="width: 100%" />
              </div>

              <!--- Price input --->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Price</label>
                <input type="number" class="a-input-text" style="width: 100%" />
              </div>

              <!--- Description input --->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Description</label>
                <textarea
                  placeholder="Provide details about the product"
                  style="width: 100%"
                ></textarea>
              </div>

              <!--- Photo selection --->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Photo</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" />
                    <p>Name</p>
                  </label>
                </div>
              </div>

              <!--- Button --->
              <hr />
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text">Add product</span>
                  </span>
                </span>
              </div>
            </form>
          </div>
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
      let categories = $axios.$get("http://localhost:8000/api/categories");
      let owners = $axios.$get("http://localhost:8000/api/owners");

      const [categoriesResponse, ownersResponse] = await Promise.all([
        categories,
        owners,
      ]);

      return {
        categories: categoriesResponse.categories,
        owners: ownersResponse.owners,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
