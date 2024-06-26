module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: '12px',
      m: '14px',
      base: '16px',
      l: '20px',
      xl: '24px',
      '2xl': '36px',
      '3xl': '48px',
      '4xl': '60px',
      '5xl': '72px',
    },
    extend: {
      colors:{
        primary: '#023321',
        secondary:'#2A5D4A',
        bdrlGray:'#F5F5F7',
        bdrlGrayLight:'#F7F7F7',
        bodyCopy: '#474747'
        
      },
      fontSize:{
        '20':'20px'
      },
      spacing: {
        '24.5': '4.5rem',
        '144': '36rem',
      },
      borderRadius:{
        '5': '20px',
        '10': '40px'
      }
    },
  },
  plugins: [],
}