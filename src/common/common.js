export const forEach = (obj, callback) => {
  Object.keys(obj).forEach((key) => {
    callback(key, obj[key])
  })
}

export const isFunction = (fn) => {
  return Object.prototype.toString.call(fn)=== '[object Function]';
}

export const typeOfValue = (value) => {
  return Object.prototype.toString.call(value)
}

export const getTypeName = (value) => {
  let str = typeOfValue(value).slice(8, -1)
  return str.toLocaleLowerCase()
}

export const isEn = () => {
  return localStorage.getItem("lan") === 'en'
}