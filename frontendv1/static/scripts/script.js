const axios = require('axios').default;

function submitImage(filedownImage, filtername) {
  var dataimage = '';

  axios
    .post(
      `http://127.0.0.1:8000/upload?filtername=${filtername}&base64_output=true`,
      {
        file: filedownImage,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      dataimage = `data:image/jpeg;base64,${response.data}`;
      console.log(dataimage)
    });

}

export default submitImage;
