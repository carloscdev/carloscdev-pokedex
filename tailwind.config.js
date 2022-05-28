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
        'customBrown': '#B1736C'
      },
      animation: {
        'spinSlow': 'loading 5s linear infinite',
        'fadeUp': 'fadeUp 1s ease forwards',
      }
    },
  },
  plugins: [],
}
