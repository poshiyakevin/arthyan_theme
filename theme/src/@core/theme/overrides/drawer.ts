// MUI Imports
import type { Theme } from '@mui/material'

// Type Imports
import type { Skin } from '@core/types'

const drawer = (skin: Skin): Theme['components'] => ({
  MuiDrawer: {
    defaultProps: {
      ...(skin === 'bordered' && {
        PaperProps: {
          elevation: 0
        }
      })
    },
    styleOverrides: {
      paper: {
        ...(skin !== 'bordered' && {
          boxShadow: `
            0 20px 60px -12px rgba(0, 0, 0, 0.25),
            0 8px 24px -8px rgba(0, 0, 0, 0.15),
            0 0 40px rgba(102, 108, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.06)
          `
        }),
        animation: 'drawerSlide3D 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '@keyframes drawerSlide3D': {
          '0%': {
            opacity: 0.8,
            transform: 'translateX(20px) perspective(800px) rotateY(-3deg)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0) perspective(800px) rotateY(0)'
          }
        }
      }
    }
  }
})

export default drawer
