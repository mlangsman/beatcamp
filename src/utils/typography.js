import Typography from "typography";


const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Montserrat', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'serif'],
  scaleRatio: 3,
  headerGray:20,
  bodyGray:20,
  googleFonts: [
  {
    name: 'Montserrat',
    styles: [ '700', '700i','700italic','600','500','400', '400italic']
  },
  {
    name: 'Open Sans',
    styles: [ '400', '700' ]
  }
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontStyle: 'italic',
      lineHeight: 0.8,
      letterSpacing: '-2px'
    },
    button: {
      fontFamily: 'Montserrat',
      fontWeight: 600
    },
    img: {
      margin:0
    }

  })

  // See below for the full list of options.
})


/* const typography = new Typography({ baseFontSize: "41px" }); */

export default typography;
