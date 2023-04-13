<template>
  <div class="form-image">
    {{ filterselected }}
    <img :src="previewImage" class="uploading-image" />
    <img :src="dataimage" class="uploading-image" />
    <form>
      <select v-model="filterselected">
        <option disabled value="">Please select one</option>
        <option>sobel</option>
        <option>roberts</option>
        <option>canny</option>
        <option>lighten</option>
        <option>blur</option>
      </select>
      <input type="file" accept="image/*" @change="uploadImage" />
      <input type="button" value="Submit" @click="submitImage" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FormImage",
  props: {
    msg: String,
  },
  data() {
    return {
      previewImage: null,
      filedownImage: null,
      dataimage: null,
      filterselected: '',
    };
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      this.filedownImage = image;
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    },
    submitImage() {
      console.log("how");
      const { imageFileResponse } = axios
        .post(
          "http://127.0.0.1:8000/upload?filtername="+this.filterselected+"&base64_output=true",
          {
            file: this.filedownImage,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          this.dataimage = `data:image/jpeg;base64,${response.data}`;
        });

      console.log(imageFileResponse);
    },
  },
};
</script>

<style scoped>
.uploading-image{
  width: 400px;
}
</style>
