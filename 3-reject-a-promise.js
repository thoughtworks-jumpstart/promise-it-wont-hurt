const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(new Error("REJECTED!"));
  }, 300);
});

promise.then(
  result => {
    console.log(result);
  },
  error => {
    console.log(error.message);
  }
);
