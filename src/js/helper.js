export const timeOut = async function () {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error("Response took too long! Please try again!"));
    }, "8000");
  });
};

//get json data
export const getJSON = async function (url, option) {
  try {
    const res = await fetch(url, option);
    const timeOutRes = timeOut();
    const raceResult = await Promise.race([res, timeOutRes]);
    if (!raceResult.ok) throw new Error();

    const data = await raceResult.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
