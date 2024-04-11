module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: '11.5px',
      m: '14px',
      base: '18px',
      xl: '32px',
      '2xl': '52px',
      '3xl': '82px',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors:{
        primary: '#023321',
        secondary:'#2A5D4A',
        bdrlGray:'#F5F5F7',
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
        '10': '40px'
      }
    },
  },
  plugins: [],
}