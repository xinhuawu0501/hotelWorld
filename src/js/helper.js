export const timeOut = async function () {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error("Response took too long! Please try again!"));
      console.log("rejected");
    }, "8000");
  });
};
