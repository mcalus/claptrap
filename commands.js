module.exports = {
    rand: function (min, max) {
        console.log(min);
        console.log(max);
        return Math.floor(Math.random() * (max + min + 1)) + min;

    }
  };


