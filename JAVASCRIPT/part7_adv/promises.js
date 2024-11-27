function fetchAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let key = 3;
      if (key == 5) {
        resolve("Data Matched");
      } else {
        reject("Data Unmatched");
      }
    }, 2000);
  });
}

fetchAPI()
    .then((res) => console.log(res))
    .catch((error) => console.log(error))