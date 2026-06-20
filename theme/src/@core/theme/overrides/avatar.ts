// MUI Imports
import type { Theme } from '@mui/material/styles'

const avatar: Theme['components'] = {
  MuiAvatarGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        justifyContent: 'flex-end',
        '& .MuiAvatar-root': {
          borderColor: 'var(--mui-palette-background-paper)',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
        },
        '&.pull-up .MuiAvatar-root': {
          cursor: 'pointer',
          transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&:hover': {
            zIndex: 2,
            transform: 'translateY(-8px) scale(1.15) translateZ(10px)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2), 0 0 12px rgba(102, 108, 255, 0.15)'
          }
        }
      })
    }
  },
  MuiAvatar: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: 'var(--mui-palette-text-primary)',
        fontSize: theme.typography.body1.fontSize,
        lineHeight: 1.2,
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        '&:hover': {
          transform: 'scale(1.08) translateZ(5px)',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15), 0 0 8px rgba(102, 108, 255, 0.1)'
        }
      }),
      rounded: {
        borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
      }
    }
  }
}

export default avatar
