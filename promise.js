function fun1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function fun2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function fun3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function fun4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("All functions completed.");
    }, 1000);
  });
}

// fun1().then(() => {
//     console.log("Function 1 completed");
//     return fun2();
//   })
//   .then(() => {
//     console.log("Function 2 completed");
//     return fun3();
//   })
//   .then(() => {
//     console.log("Function 3 completed");
//     return fun4();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });

