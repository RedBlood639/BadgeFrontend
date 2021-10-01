let reg_Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let reg_URL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z0-9]{2,5}(:[0-9]{1,5})?(\/.*)?$/
let reg_Number = /[^0-9]/

export const isEmail = (value) => reg_Email.test(value)
export const isNumber = (value) => !reg_Number.test(value)
export const isUrl = (value) => reg_URL.test(value)
export const minLength = (value, length) => value.length >= length
export const maxLength = (value, length) => value.length <= length
export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0)
