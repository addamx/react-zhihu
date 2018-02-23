const getQueryKeys = function(query) {
  let queryObj = new URLSearchParams(query)
  let args = [].slice.call(arguments, 1);
  return args.map((el) => (
    queryObj.get(el)
  )).join(' ')
}

export {getQueryKeys}