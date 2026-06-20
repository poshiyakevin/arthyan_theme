// MUI Imports
import type { Theme } from '@mui/material/styles'

const tabs: Theme['components'] = {
  MuiTabs: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        minBlockSize: 38,
        ...(ownerState.orientation === 'horizontal'
          ? {
              borderBlockEnd: '1px solid var(--mui-palette-divider)'
            }
          : {
              borderInlineEnd: '1px solid var(--mui-palette-divider)'
            }),
        '& .MuiTab-root:hover': {
          ...(ownerState.orientation === 'horizontal'
            ? {
                paddingBlockEnd: theme.spacing(1.5),
                ...(ownerState.textColor === 'secondary'
                  ? {
                      color: 'var(--mui-palette-secondary-main)',
                      borderBlockEnd: '2px solid var(--mui-palette-secondary-lightOpacity)'
                    }
                  : {
                      color: 'var(--mui-palette-primary-main)',
                      borderBlockEnd: '2px solid var(--mui-palette-primary-lightOpacity)'
                    })
              }
            : {
                paddingInlineEnd: theme.spacing(5),
                ...(ownerState.textColor === 'secondary'
                  ? {
                      color: 'var(--mui-palette-secondary-main)',
                      borderInlineEnd: '2px solid var(--mui-palette-secondary-mainOpacity)'
                    }
                  : {
                      color: 'var(--mui-palette-primary-main)',
                      borderInlineEnd: '2px solid var(--mui-palette-primary-mainOpacity)'
                    })
              }),
          '& .MuiTabScrollButton-root': {
            borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
          }
        },
        '& ~ .MuiTabPanel-root': {
          ...(ownerState.orientation === 'horizontal'
            ? {
                paddingBlockStart: theme.spacing(5)
              }
            : {
                paddingInlineStart: theme.spacing(5)
              })
        },
        '& .MuiTabs-indicator': {
          transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
          borderRadius: 4,
          height: 3,
          boxShadow: '0 0 8px rgba(102, 108, 255, 0.4)'
        }
      }),
      vertical: {
        minWidth: 131,
        '& .MuiTab-root': {
          minWidth: 130
        },
        '& .MuiTabs-indicator': {
          width: 3,
          height: 'auto !important'
        }
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        lineHeight: 1.4667,
        padding: theme.spacing(2, 5.5),
        minBlockSize: 38,
        color: 'var(--mui-palette-text-primary)',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        position: 'relative' as const,
        '&.Mui-selected': {
          transform: 'translateY(-1px)'
        },
        '&:hover': {
          transform: 'translateY(-1px)'
        },
        '& > .MuiTab-icon': {
          fontSize: '1.125rem',
          transition: 'transform 0.2s ease',
          ...(ownerState.iconPosition === 'top' && {
            marginBlockEnd: theme.spacing(2)
          }),
          ...(ownerState.iconPosition === 'bottom' && {
            marginBlockStart: theme.spacing(2)
          }),
          ...(ownerState.iconPosition === 'start' && {
            marginInlineEnd: theme.spacing(2)
          }),
          ...(ownerState.iconPosition === 'end' && {
            marginInlineStart: theme.spacing(2)
          })
        },
        '&:hover > .MuiTab-icon': {
          transform: 'scale(1.15)'
        }
      })
    }
  },
  MuiTabPanel: {
    styleOverrides: {
      root: {
        padding: 0,
        animation: 'tabPanelFadeIn 0.35s ease-out',
        '@keyframes tabPanelFadeIn': {
          '0%': {
            opacity: 0,
            transform: 'translateY(8px) translateZ(-5px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0) translateZ(0)'
          }
        }
      }
    }
  }
}

export default tabs
