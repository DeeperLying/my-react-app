// src/utils/debounce.js
export const debounce = (func, timeout, immediate) => {
  let timer

  return function () {
    const self = this
    let args = arguments

    if (timer) clearTimeout(timer)
    if (immediate) {
      var callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, timeout)
      if (callNow) func.apply(self, args)
    } else {
      timer = setTimeout(function () {
        func.apply(self, args)
      }, timeout)
    }
  }
}
