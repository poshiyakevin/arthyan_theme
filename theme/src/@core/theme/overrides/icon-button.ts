// MUI Imports
import type { Theme } from '@mui/material/styles'

// Config Imports
import themeConfig from '@configs/themeConfig'

const iconButton: Theme['components'] = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        variants: [
          {
            props: { color: 'default' },
            style: {
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                backgroundColor: 'rgb(var(--mui-palette-text-primaryChannel) / 0.08)'
              },
              ...(themeConfig.disableRipple && {
                '&.Mui-focusVisible:not(.Mui-disabled)': {
                  backgroundColor: 'rgb(var(--mui-palette-text-primaryChannel) / 0.08)'
                }
              }),
              '&.Mui-disabled': {
                opacity: 0.45,
                color: 'var(--mui-palette-action-active)'
              }
            }
          },
          {
            props: { color: 'primary' },
            style: {
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
              },
              ...(themeConfig.disableRipple && {
                '&.Mui-focusVisible:not(.Mui-disabled)': {
                  backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
                }
              }),
              '&.Mui-disabled': {
                opacity: 0.45,
                color: 'var(--mui-palette-primary-main)'
              }
            }
          },
          {
            props: { color: 'secondary' },
            style: {
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
              },
              ...(themeConfig.disableRipple && {
                '&.Mui-focusVisible:not(.Mui-disabled)': {
                  backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
                }
              }),
              '&.Mui-disabled': {
                opacity: 0.45,
                color: 'var(--mui-palette-secondary-main)'
              }
            }
          },
          {
            props: { color: 'error' },
            style: {
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
              },
              ...(themeConfig.disableRipple && {
                '&.Mui-focusVisible:not(.Mui-disabled)': { backgroundColor: 'var(--mui-palette-error-lighterOpacity)' }
              }),
              '&.Mui-disabled': {
                opacity: 0.45,
                color: 'var(--mui-palette-error-main)'
              }
            }
          },
          {
            props: { color: 'warning' },
            style: {
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
              },
              ...(themeConfig.disableRipple && {
                '&.Mui-focusVisible:not(.Mui-disabled)': {
                  backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
                }
              }),
              '&.Mui-disabled': {
                opacity: 0.45,
                color: 'var(--mui-palette-warning-main)'
              }
            }
          },
          {
            props: { color: 'info' },
            style: {
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
              },
              ...(themeConfig.disableRipple && {
                '&.Mui-focusVisible:not(.Mui-disabled)': { backgroundColor: 'var(--mui-palette-info-lighterOpacity)' }
              }),
              '&.Mui-disabled': {
                opacity: 0.45,
                color: 'var(--mui-palette-info-main)'
              }
            }
          },
          {
            props: { color: 'success' },
            style: {
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
              },
              ...(themeConfig.disableRipple && {
                '&.Mui-focusVisible:not(.Mui-disabled)': {
                  backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
                }
              }),
              '&.Mui-disabled': {
                opacity: 0.45,
                color: 'var(--mui-palette-success-main)'
              }
            }
          }
        ],
        transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '&:not(.Mui-disabled):hover': {
          transform: 'scale(1.12) translateZ(4px)'
        },
        '&:not(.Mui-disabled):active': {
          transform: 'scale(0.95) translateZ(0)',
          transition: 'all 0.1s ease'
        },
        '& .MuiSvgIcon-root, & i, & svg': {
          fontSize: 'inherit',
          transition: 'transform 0.25s ease'
        },
        '&:hover .MuiSvgIcon-root, &:hover i, &:hover svg': {
          transform: 'rotate(8deg)'
        }
      },
      sizeSmall: ({ theme }) => ({
        padding: theme.spacing(1.75),
        fontSize: '1.25rem'
      }),
      sizeMedium: ({ theme }) => ({
        padding: theme.spacing(2),
        fontSize: '1.375rem'
      }),
      sizeLarge: ({ theme }) => ({
        padding: theme.spacing(2.25),
        fontSize: '1.5rem'
      })
    }
  }
}

export default iconButton
