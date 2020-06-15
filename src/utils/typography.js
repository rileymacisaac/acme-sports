import Typography from "typography"
const typography = new Typography({
  googleFonts: [
    {
      name: 'Red Hat Display',
      styles: [
        '900i',
      ],
    },
    {
      name: 'Montserrat',
      styles: [
        '500',
      ],
    }
  ],
  scaleRatio: 3,
  headerFontFamily: ['Red Hat Display', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'sans-serif'],
  overrideStyles: ({ scale }) => ({
    'h1,h2,h3,h4,h5,h6': {
      textTransform: 'uppercase',
      fontStyle: 'italic'
    },
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
