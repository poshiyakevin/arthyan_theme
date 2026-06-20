// MUI Imports
import type { Theme } from '@mui/material/styles'

const badges: Theme['components'] = {
  MuiBadge: {
    styleOverrides: {
      standard: ({ theme }) => ({
        height: 22,
        minWidth: 22,
        fontSize: theme.typography.subtitle2.fontSize,
        lineHeight: 1.07692,
        padding: theme.spacing(1, 2),
        borderRadius: 11,
        animation: 'badgePop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
        '@keyframes badgePop': {
          '0%': {
            transform: 'scale(0)',
            opacity: 0
          },
          '60%': {
            transform: 'scale(1.2)'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        }
      })
    }
  }
}

export default badges
