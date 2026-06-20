// MUI Imports
import type { Theme } from '@mui/material/styles'

const backdrop: Theme['components'] = {
  MuiBackdrop: {
    styleOverrides: {
      root: {
        '&:not(.MuiBackdrop-invisible)': {
          backgroundColor: 'var(--backdrop-color)',
          backdropFilter: 'blur(6px) saturate(150%)',
          WebkitBackdropFilter: 'blur(6px) saturate(150%)'
        }
      }
    }
  }
}

export default backdrop
