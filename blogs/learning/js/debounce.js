function debounce(fn, wait) {
  let timeout = null;

  return function () {
    const context = this;
    const args = arguments;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.apply(context, args)
    }, wait);
  }
}

var obj = {
  a: 123,
  test: function() {
    console.log(this.a)
  },
}

obj.fn = debounce(obj.test, 500);

obj.fn();
