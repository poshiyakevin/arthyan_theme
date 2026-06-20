// MUI Imports
import type { Theme } from '@mui/material/styles'

// Config Imports
import themeConfig from '@configs/themeConfig'

const iconStyles = (size?: string) => ({
  '& > *:nth-of-type(1)': {
    ...(size === 'small'
      ? {
          fontSize: '14px'
        }
      : {
          ...(size === 'medium'
            ? {
                fontSize: '16px'
              }
            : {
                fontSize: '20px'
              })
        })
  }
})

const button: Theme['components'] = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: themeConfig.disableRipple
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        variants: [
          {
            props: { variant: 'text', color: 'primary' },
            style: {
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
                {
                  backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
                },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-primary-main)'
              }
            }
          },
          {
            props: { variant: 'text', color: 'secondary' },
            style: {
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
                {
                  backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
                },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-secondary-main)'
              }
            }
          },
          {
            props: { variant: 'text', color: 'error' },
            style: {
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
                {
                  backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
                },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-error-main)'
              }
            }
          },
          {
            props: { variant: 'text', color: 'warning' },
            style: {
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
                {
                  backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
                },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-warning-main)'
              }
            }
          },
          {
            props: { variant: 'text', color: 'info' },
            style: {
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
                {
                  backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
                },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-info-main)'
              }
            }
          },
          {
            props: { variant: 'text', color: 'success' },
            style: {
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
                {
                  backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
                },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-success-main)'
              }
            }
          },
          {
            props: { variant: 'outlined', color: 'primary' },
            style: {
              borderColor: 'var(--mui-palette-primary-main)',
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
                {
                  backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
                },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-primary-main)',
                borderColor: 'var(--mui-palette-primary-main)'
              }
            }
          },
          {
            props: { variant: 'outlined', color: 'secondary' },
            style: {
              borderColor: 'var(--mui-palette-secondary-main)',
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
                {
                  backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
                },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-secondary-main)',
                borderColor: 'var(--mui-palette-secondary-main)'
              }
            }
          },
          {
            props: { variant: 'outlined', color: 'error' },
            style: {
              borderColor: 'var(--mui-palette-error-main)',
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
                {
                  backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
                },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-error-main)',
                borderColor: 'var(--mui-palette-error-main)'
              }
            }
          },
          {
            props: { variant: 'outlined', color: 'warning' },
            style: {
              borderColor: 'var(--mui-palette-warning-main)',
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
                {
                  backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
                },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-warning-main)',
                borderColor: 'var(--mui-palette-warning-main)'
              }
            }
          },
          {
            props: { variant: 'outlined', color: 'info' },
            style: {
              borderColor: 'var(--mui-palette-info-main)',
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
                {
                  backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
                },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-info-main)',
                borderColor: 'var(--mui-palette-info-main)'
              }
            }
          },
          {
            props: { variant: 'outlined', color: 'success' },
            style: {
              borderColor: 'var(--mui-palette-success-main)',
              '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
                {
                  backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
                },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-success-main)',
                borderColor: 'var(--mui-palette-success-main)'
              }
            }
          },
          {
            props: { variant: 'contained', color: 'primary' },
            style: {
              '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                backgroundColor: 'var(--mui-palette-primary-dark)'
              },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-primary-contrastText)',
                backgroundColor: 'var(--mui-palette-primary-main)'
              }
            }
          },
          {
            props: { variant: 'contained', color: 'secondary' },
            style: {
              '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                backgroundColor: 'var(--mui-palette-secondary-dark)'
              },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-secondary-contrastText)',
                backgroundColor: 'var(--mui-palette-secondary-main)'
              }
            }
          },
          {
            props: { variant: 'contained', color: 'error' },
            style: {
              '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                backgroundColor: 'var(--mui-palette-error-dark)'
              },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-error-contrastText)',
                backgroundColor: 'var(--mui-palette-error-main)'
              }
            }
          },
          {
            props: { variant: 'contained', color: 'warning' },
            style: {
              '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                backgroundColor: 'var(--mui-palette-warning-dark)'
              },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-warning-contrastText)',
                backgroundColor: 'var(--mui-palette-warning-main)'
              }
            }
          },
          {
            props: { variant: 'contained', color: 'info' },
            style: {
              '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                backgroundColor: 'var(--mui-palette-info-dark)'
              },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-info-contrastText)',
                backgroundColor: 'var(--mui-palette-info-main)'
              }
            }
          },
          {
            props: { variant: 'contained', color: 'success' },
            style: {
              '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                backgroundColor: 'var(--mui-palette-success-dark)'
              },
              '&.Mui-disabled': {
                color: 'var(--mui-palette-success-contrastText)',
                backgroundColor: 'var(--mui-palette-success-main)'
              }
            }
          }
        ],
        borderRadius: 'var(--mui-shape-customBorderRadius-lg)',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transformStyle: 'preserve-3d',
        position: 'relative' as const,
        '&.Mui-disabled': {
          opacity: 0.45
        },
        ...(ownerState.variant === 'text'
          ? {
              ...(ownerState.size === 'small' && {
                padding: theme.spacing(2, 2.25)
              }),
              ...(ownerState.size === 'medium' && {
                padding: theme.spacing(2, 3)
              }),
              ...(ownerState.size === 'large' && {
                padding: theme.spacing(2, 5.5)
              })
            }
          : {
              ...(ownerState.variant === 'outlined'
                ? {
                    ...(ownerState.size === 'small' && {
                      padding: theme.spacing(1.75, 2.75)
                    }),
                    ...(ownerState.size === 'medium' && {
                      padding: theme.spacing(1.75, 5.25)
                    }),
                    ...(ownerState.size === 'large' && {
                      padding: theme.spacing(1.75, 6.25)
                    }),
                    '&:hover': {
                      transform: 'translateY(-2px) translateZ(4px)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    },
                    '&:active': {
                      transform: 'translateY(0) translateZ(0)',
                      transition: 'all 0.1s ease'
                    }
                  }
                : {
                    ...(ownerState.size === 'small' && {
                      padding: theme.spacing(2, 3)
                    }),
                    ...(ownerState.size === 'medium' && {
                      padding: theme.spacing(2, 5.5)
                    }),
                    ...(ownerState.size === 'large' && {
                      padding: theme.spacing(2, 6.5)
                    })
                  })
            })
      }),
      contained: ({ ownerState }) => ({
        boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        ...(!ownerState.disabled && {
          '&:hover': {
            transform: 'translateY(-3px) translateZ(8px)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2), 0 0 20px rgba(102, 108, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          },
          '&:active': {
            transform: 'translateY(1px) translateZ(-2px)',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15), inset 0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.1s ease'
          }
        })
      }),
      sizeSmall: ({ theme }) => ({
        lineHeight: 1.38462,
        fontSize: theme.typography.body2.fontSize,
        borderRadius: 'var(--mui-shape-customBorderRadius-md)'
      }),
      sizeLarge: {
        fontSize: '1.0625rem',
        lineHeight: 1.529412,
        borderRadius: 'var(--mui-shape-customBorderRadius-xl)'
      },
      startIcon: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              marginInlineEnd: theme.spacing(1.5)
            }
          : {
              ...(ownerState.size === 'medium'
                ? {
                    marginInlineEnd: theme.spacing(2)
                  }
                : {
                    marginInlineEnd: theme.spacing(2.5)
                  })
            }),
        ...iconStyles(ownerState.size)
      }),
      endIcon: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              marginInlineStart: theme.spacing(1.5)
            }
          : {
              ...(ownerState.size === 'medium'
                ? {
                    marginInlineStart: theme.spacing(2)
                  }
                : {
                    marginInlineStart: theme.spacing(2.5)
                  })
            }),
        ...iconStyles(ownerState.size)
      })
    }
  }
}

export default button
