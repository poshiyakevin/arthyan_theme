// MUI Imports
import type { Theme } from '@mui/material/styles'

const fab: Theme['components'] = {
  MuiFab: {
    styleOverrides: {
      root: {
        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transformStyle: 'preserve-3d',
        boxShadow: `
          0 6px 20px rgba(0, 0, 0, 0.18),
          0 2px 6px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.15)
        `,
        '&:hover': {
          transform: 'translateY(-4px) translateZ(10px) scale(1.08)',
          boxShadow: `
            0 12px 30px rgba(0, 0, 0, 0.22),
            0 4px 10px rgba(0, 0, 0, 0.12),
            0 0 20px rgba(102, 108, 255, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
          `
        },
        '&:active': {
          transform: 'translateY(1px) translateZ(-2px) scale(0.96)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15), inset 0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.1s ease'
        },
        '& i, & svg': {
          transition: 'transform 0.3s ease'
        },
        '&:hover i, &:hover svg': {
          transform: 'rotate(90deg) scale(1.1)'
        },
        variants: [
          {
            props: { color: 'default' },
            style: {
              color: 'rgb(var(--mui-mainColorChannels-light) / 0.9)',
              '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                backgroundColor: 'var(--mui-palette-grey-A100)'
              }
            }
          },
          {
            props: { color: 'primary' },
            style: {
              '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                backgroundColor: 'var(--mui-palette-primary-dark)'
              }
            }
          },
          {
            props: { color: 'secondary' },
            style: {
              '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                backgroundColor: 'var(--mui-palette-secondary-dark)'
              }
            }
          },
          {
            props: { color: 'error' },
            style: {
              '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                backgroundColor: 'var(--mui-palette-error-dark)'
              }
            }
          },
          {
            props: { color: 'warning' },
            style: {
              '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                backgroundColor: 'var(--mui-palette-warning-dark)'
              }
            }
          },
          {
            props: { color: 'info' },
            style: {
              '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                backgroundColor: 'var(--mui-palette-info-dark)'
              }
            }
          },
          {
            props: { color: 'success' },
            style: {
              '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                backgroundColor: 'var(--mui-palette-success-dark)'
              }
            }
          }
        ]
      }
    }
  }
}

export default fab
