import { Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height

export const ResponsiveSize = (size) => {
  if (deviceHeight === 568) {
  } else if (deviceHeight === 667) {
    size = size * 1.17
  } else if (deviceHeight === 736) {
    size = size * 1.29
  } else if (deviceHeight === 1024) {
    size = size * 1.8
  }

  return Number(size)
}
