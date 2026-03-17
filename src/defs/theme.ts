import { ConfigProviderProps } from 'antd'

const theme: ConfigProviderProps['theme'] = {
  token: {
    colorPrimary: '#7FB800',
    colorLink: '#F6511D',
  },
  components: {
    Typography: {
      colorTextHeading: '#7FB800',
    },
    Carousel: {
      dotActiveWidth: '30px',
      dotHeight: '5px',
    },
  },
}

export default theme
