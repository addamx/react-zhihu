const getItem = (key) => {
  let value;
  try {
    value = localStorage.getItem(key);
  } catch (ex) {
    if (process.env.NODE_ENV === 'production') {
      console.error('localStorage.getItem报错, ', ex.message)
    }
  } finally {
    return value;
  }
};
const setItem = (key, value) => {
  try {
    localStorage.setItem(key, value)
  } catch (ex) {
    if (process.env.NODE_ENV === 'production') {
      console.error('localStorage.setItem报错, ', ex.message)
    }
  }
};

export { getItem, setItem };
