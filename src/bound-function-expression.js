const named = function () {
  console.log(`bound function expression, this => ${JSON.stringify(this)}`);
};

module.exports = named;
