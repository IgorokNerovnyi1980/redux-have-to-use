import { baseColors, darkColors, FS, other } from './variables'

const base = {
  ...baseColors,
  ...FS,
  ...other,
}
const dark = {
  ...darkColors,
  ...FS,
  ...other,
}

export default {
  base,
  dark,
}
