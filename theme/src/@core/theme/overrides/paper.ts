// MUI Imports
import type { Theme } from '@mui/material/styles'

const paper: Theme['components'] = {
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transformStyle: 'preserve-3d',
        '&.MuiPaper-elevation1': {
          boxShadow: `
            0 2px 8px rgba(0, 0, 0, 0.08),
            0 1px 2px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.05)
          `
        },
        '&.MuiPaper-elevation2': {
          boxShadow: `
            0 4px 12px rgba(0, 0, 0, 0.1),
            0 2px 4px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.06)
          `
        },
        '&.MuiPaper-elevation4': {
          boxShadow: `
            0 8px 24px rgba(0, 0, 0, 0.12),
            0 4px 8px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.08)
          `
        },
        '&.MuiPaper-elevation8': {
          boxShadow: `
            0 12px 32px rgba(0, 0, 0, 0.14),
            0 6px 12px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `
        }
      }
    }
  }
}

export default paper
