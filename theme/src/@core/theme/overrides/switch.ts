// MUI Imports
import type { Theme } from '@mui/material/styles'

const switchOverrides: Theme['components'] = {
  MuiSwitch: {
    defaultProps: {
      disableRipple: true
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        '&:has(.Mui-disabled)': {
          opacity: 0.45
        },
        ...(ownerState.size !== 'small'
          ? {
              width: 46,
              height: 38,
              padding: theme.spacing(2.5, 2)
            }
          : {
              width: 42,
              height: 30,
              padding: theme.spacing(1.75, 2),
              '& .MuiSwitch-thumb': {
                width: 12,
                height: 12
              },
              '& .MuiSwitch-switchBase': {
                padding: 7,
                left: 3,
                '&.Mui-checked': {
                  left: -3
                }
              }
            })
      }),
      switchBase: ({ ownerState }) => ({
        ...(ownerState.size !== 'small'
          ? {
              top: 3,
              left: 1
            }
          : {
              top: 2,
              left: 1
            }),
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '&.Mui-checked': {
          left: -7,
          color: 'var(--mui-palette-common-white)',
          '& + .MuiSwitch-track': {
            opacity: 1
          },
          '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2), 0 0 8px rgba(102, 108, 255, 0.3)'
          }
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 1
        },
        '&:hover:not(:has(span.MuiTouchRipple-root))': {
          backgroundColor: 'transparent'
        }
      }),
      thumb: {
        width: 14,
        height: 14,
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
      },
      track: {
        opacity: 1,
        borderRadius: 10,
        backgroundColor: 'var(--mui-palette-action-focus)',
        boxShadow: '0 0 4px rgb(0 0 0 / 0.16) inset',
        transition: 'all 0.3s ease'
      }
    }
  }
}

export default switchOverrides
