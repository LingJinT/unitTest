module.exports = function myJestPlugin() {
  return new Promise((resolve) => {
    console.log("============");
    resolve();
  });
};
