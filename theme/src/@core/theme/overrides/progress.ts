// MUI Imports
import type { Theme } from '@mui/material/styles'

const progress: Theme['components'] = {
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        blockSize: 8,
        borderRadius: 'var(--mui-shape-borderRadius)',
        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
        '& .MuiLinearProgress-bar': {
          borderRadius: 'var(--mui-shape-borderRadius)',
          backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)',
          backgroundSize: '200% 100%',
          animation: 'progressShimmer 2s ease-in-out infinite',
          boxShadow: '0 0 8px rgba(102, 108, 255, 0.3)'
        },
        '@keyframes progressShimmer': {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '100%': {
            backgroundPosition: '200% 0'
          }
        },
        '& .MuiLinearProgress-dashed': {
          marginBlockStart: theme.spacing(0.2)
        }
      })
    }
  }
}

export default progress
