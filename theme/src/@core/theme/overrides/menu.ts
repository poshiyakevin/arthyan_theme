// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const menu = (skin: Skin): Theme['components'] => ({
  MuiMenu: {
    defaultProps: {
      ...(skin === 'bordered' && {
        slotProps: {
          paper: {
            elevation: 0
          }
        }
      })
    },
    styleOverrides: {
      paper: ({ theme }) => ({
        marginBlockStart: theme.spacing(0.5),
        borderRadius: 12,
        animation: 'menuSlideIn3D 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transformOrigin: 'top center',
        '@keyframes menuSlideIn3D': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-8px) scale(0.95) perspective(600px) rotateX(-4deg)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0) scale(1) perspective(600px) rotateX(0)'
          }
        },
        ...(skin !== 'bordered' && {
          boxShadow: `
            0 10px 30px -5px rgba(0, 0, 0, 0.15),
            0 4px 12px rgba(0, 0, 0, 0.08),
            0 0 20px rgba(102, 108, 255, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.06)
          `
        })
      })
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        paddingBlock: theme.spacing(2),
        paddingInline: theme.spacing(5),
        gap: theme.spacing(2),
        color: 'var(--mui-palette-text-primary)',
        transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        borderRadius: 6,
        marginInline: theme.spacing(1),
        '& i, & svg': {
          fontSize: '1.375rem',
          transition: 'transform 0.2s ease'
        },
        '& .MuiListItemIcon-root': {
          minInlineSize: 0
        },
        '&:hover': {
          transform: 'translateX(4px)',
          '& i, & svg': {
            transform: 'scale(1.1)'
          }
        },
        '&.Mui-selected': {
          backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
          color: 'var(--mui-palette-primary-main)',
          '& .MuiListItemIcon-root': {
            color: 'var(--mui-palette-primary-main)'
          },
          '&:hover, &.Mui-focused, &.Mui-focusVisible': {
            backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
          }
        },
        '&.Mui-disabled': {
          color: 'var(--mui-palette-text-disabled)',
          opacity: 1
        }
      })
    }
  }
})

export default menu
