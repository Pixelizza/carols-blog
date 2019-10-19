/* eslint-disable */
import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.7,
  googleFonts: [
    {
      name: 'Bungee',
      styles: ['400', '400i']
    },
    {
      name: 'Cousine',
      styles: ['400', '400i', '700']
    }
  ],
  headerFontFamily: ['Bungee', 'sans-serif'],
  bodyFontFamily: ['Cousine', 'monospace'],
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: {
      fontSize: '4.2rem',
      fontWeight: 900
    },
    h2: {
      fontSize: '2.6rem',
      fontWeight: 900
    },
    h3: {
      fontSize: '1.6rem',
      marginBottom: '0.74rem'
    }
  })
});

/* eslint-enable */
export default typography;
