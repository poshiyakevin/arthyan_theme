// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const snackbar = (skin: Skin): Theme['components'] => ({
  MuiSnackbarContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 12,
        padding: theme.spacing(0, 4),
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        animation: 'snackbarSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '@keyframes snackbarSlideUp': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px) scale(0.95) translateZ(-10px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0) scale(1) translateZ(0)'
          }
        },
        ...(skin !== 'bordered'
          ? {
              boxShadow: `
                0 8px 24px rgba(0, 0, 0, 0.2),
                0 2px 8px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.06)
              `
            }
          : {
              boxShadow: 'none'
            }),
        '& .MuiSnackbarContent-message': {
          paddingBlock: theme.spacing(3)
        }
      })
    }
  }
})

export default snackbar
