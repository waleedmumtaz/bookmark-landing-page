const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            'soft-blue': 'hsl(231, 69%, 60%)',
            'soft-red': 'hsl(0, 94%, 66%)',
          },
          neutral: {
            'grayish-blue': 'hsl(229, 8%, 60%)',
            'dark-blue': 'hsl(229, 31%, 21%)',
          },
        },
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
