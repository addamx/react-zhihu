const getQueryKeys = function(query) {
  let queryObj = new URLSearchParams(query)
  let args = [].slice.call(arguments, 1);
  return args.map((el) => (
    queryObj.get(el)
  )).join(' ')
}

const debounce = (idle, action) => {
  let last;
  return function () {
    let ctx = this, args = arguments;
    clearTimeout(last)
    return last = setTimeout(() => {
      action.apply(ctx, args)
    }, idle)
  }
}

export { getQueryKeys, debounce }