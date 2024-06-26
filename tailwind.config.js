/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*"
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xsm:'480px',
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'primary':'#0093FF',
        'secondary':'#303A42',
        'tersery':'#0093FF',
        'input':'#303A42',
        'footer':'#161B1F'
      },
      lineHeight: {
        '82': '82px',
        '45': '45px',
        '52':'52px',
      },
      letterSpacing: {
        '2': '0.02em',
      },
      padding: {
        '70': '70px',
      }
    },
  },
  plugins: [],
}

