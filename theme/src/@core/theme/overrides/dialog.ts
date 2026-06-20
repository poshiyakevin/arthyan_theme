// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const dialog = (skin: Skin): Theme['components'] => ({
  MuiDialog: {
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRadius: 20,
        ...(skin !== 'bordered'
          ? {
              boxShadow: `
                0 24px 48px -12px rgba(0, 0, 0, 0.25),
                0 12px 24px -8px rgba(0, 0, 0, 0.15),
                0 0 40px rgba(102, 108, 255, 0.06),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
            }
          : {
              boxShadow: 'none'
            }),
        animation: 'dialogPopIn3D 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '@keyframes dialogPopIn3D': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.85) translateZ(-60px) rotateX(8deg)'
          },
          '60%': {
            opacity: 1,
            transform: 'scale(1.02) translateZ(5px) rotateX(-1deg)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1) translateZ(0) rotateX(0)'
          }
        },
        [theme.breakpoints.down('sm')]: {
          '&:not(.MuiDialog-paperFullScreen)': {
            margin: theme.spacing(6)
          }
        }
      })
    }
  },
  MuiDialogTitle: {
    defaultProps: {
      variant: 'h5'
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(5),
        '& + .MuiDialogActions-root': {
          paddingBlockStart: 0
        }
      })
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(5),
        '& + .MuiDialogContent-root, & + .MuiDialogActions-root': {
          paddingBlockStart: 0
        }
      })
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(5),
        '& .MuiButtonBase-root:not(:first-of-type)': {
          marginInlineStart: theme.spacing(4)
        },
        '&:where(.dialog-actions-dense)': {
          padding: theme.spacing(2.5),
          '& .MuiButton-text': {
            paddingInline: theme.spacing(2.5)
          }
        }
      })
    }
  }
})

export default dialog
