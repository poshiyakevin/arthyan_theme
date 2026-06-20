// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const popover = (skin: Skin): Theme['components'] => ({
  MuiPopover: {
    styleOverrides: {
      paper: {
        borderRadius: 12,
        animation: 'popoverFadeIn3D 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '@keyframes popoverFadeIn3D': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.95) translateZ(-10px)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1) translateZ(0)'
          }
        },
        ...(skin === 'bordered'
          ? { boxShadow: 'none', border: '1px solid var(--mui-palette-divider)' }
          : {
              boxShadow: `
                0 8px 24px rgba(0, 0, 0, 0.12),
                0 4px 10px rgba(0, 0, 0, 0.08),
                0 0 12px rgba(102, 108, 255, 0.04),
                inset 0 1px 0 rgba(255, 255, 255, 0.06)
              `
            })
      }
    }
  }
})

export default popover
