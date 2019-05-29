const promise = new Promise(function(resolve, reject) {
  resolve("I FIRED");
  reject(new Error("I DID NOT FIRE"));
});

promise.then(
  result => {
    console.log(result);
  },
  error => {
    console.log(error.message);
  }
);
