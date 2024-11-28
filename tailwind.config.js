module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 10px 10px 0px rgba(0,0,0,0.3)',
        'customSmall': '0px 5px 5px 0px rgba(0,0,0,0.2)'
      },
      borderRadius: {
        'customCard': '15px'
      },
      colors: {
        'customGreen': '#49D0B0',
        'customRed': '#FC6C6D',
        'customBlue': '#58AAF6',
        'customYellow': '#FFCE4B',
        'customPurple': '#7C538C',
        'customBrown': '#B1736C',
        'customBlack': '#282828'
      },
      animation: {
        'spinSlow': 'loading 10s ease infinite',
        'fadeUp': 'fadeUp 1s ease forwards',
        'fadeIn': 'fadeIn 1s ease forwards',
        'bar': 'bar 2s ease forwards',
        'slideLeft': 'slideLeft 1s ease forwards',
        'slideRight': 'slideRight 1s ease forwards',
      },
      keyframes: {
        'loading': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        },
        'fadeUp': {
          'from': { filter: 'alpha(opacity=0)', opacity: '0', transform: 'translateY(20%)'},
          'to': { filter: 'alpha(opacity=100)', opacity: '1', transform: 'translateY(0)'},
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '60%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'bar': {
          'from': { width: '0%'},
          'to': {width: 'auto'}
        },
        'slideLeft': {
          'from': { transform: 'translateX(100%)'},
          'to': { transform: 'translateX(0)'}
        },
        'slideRight': {
          'from': { transform: 'translateX(-100%)'},
          'to': { transform: 'translateX(0)'}
        }
      }
    },
  },
  plugins: [],
}
