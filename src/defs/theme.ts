import type { ConfigProviderProps } from 'antd/es/config-provider'

const theme: ConfigProviderProps['theme'] = {
  token: {
    colorPrimary: '#4F8F68',
    colorLink: '#F6511D',
    borderRadius: 8,
    colorText: '#1F3529',
    colorTextSecondary: '#59665E',
    fontFamily: 'var(--font-geist-sans), Arial, Helvetica, sans-serif',
  },
  components: {
    Button: {
      controlHeight: 44,
      fontWeight: 700,
      primaryShadow: '0 12px 28px rgba(79, 143, 104, 0.26)',
    },
    Card: {
      borderRadiusLG: 8,
    },
    Typography: {
      colorTextHeading: '#1F3529',
    },
    Carousel: {
      dotActiveWidth: '30px',
      dotHeight: '5px',
    },
  },
}

export default theme
