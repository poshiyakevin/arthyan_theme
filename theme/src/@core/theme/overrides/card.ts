// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const card = (skin: Skin): Theme['components'] => {
  return {
    MuiCard: {
      defaultProps: {
        ...(skin === 'bordered' && {
          variant: 'outlined'
        })
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 16,
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transformStyle: 'preserve-3d',
          perspective: '1200px',
          position: 'relative' as const,
          overflow: 'hidden',
          ...(ownerState.variant !== 'outlined' && {
            boxShadow: `
              0 4px 6px -1px rgba(0, 0, 0, 0.07),
              0 10px 20px -5px rgba(0, 0, 0, 0.1),
              0 1px 3px rgba(0, 0, 0, 0.06),
              inset 0 1px 0 rgba(255, 255, 255, 0.06)
            `,
            '&::before': {
              content: '""',
              position: 'absolute' as const,
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              zIndex: 1,
              opacity: 0,
              transition: 'opacity 0.4s ease'
            },
            '&:hover': {
              transform: 'translateY(-8px) translateZ(20px)',
              boxShadow: `
                0 20px 40px -10px rgba(0, 0, 0, 0.2),
                0 12px 25px -8px rgba(0, 0, 0, 0.15),
                0 0 30px rgba(102, 108, 255, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `,
              '&::before': {
                opacity: 1
              }
            },
            '&:active': {
              transform: 'translateY(-2px) translateZ(5px)',
              transition: 'all 0.15s ease'
            }
          })
        })
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
          '& + .MuiCardContent-root, & + .MuiCardActions-root': {
            paddingBlockStart: 0
          },
          '& + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child':
          {
            paddingBlockStart: 0
          }
        }),
        subheader: ({ theme }) => ({
          ...theme.typography.subtitle1,
          color: 'rgb(var(--mui-palette-text-primaryChannel) / 0.55)'
        }),
        action: ({ theme }) => ({
          ...theme.typography.body1,
          color: 'var(--mui-palette-text-disabled)',
          marginBlock: 0,
          marginInlineEnd: 0,
          '& .MuiIconButton-root': {
            color: 'inherit'
          }
        })
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
          color: 'var(--mui-palette-text-secondary)',
          '&:last-child': {
            paddingBlockEnd: theme.spacing(5)
          },
          '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
            paddingBlockStart: 0
          },
          '& + .MuiCollapse-root .MuiCardHeader-root:first-child, & + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child':
          {
            paddingBlockStart: 0
          }
        })
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
          '& .MuiButtonBase-root:not(:first-of-type)': {
            marginInlineStart: theme.spacing(4)
          },
          '&:where(.card-actions-dense)': {
            padding: theme.spacing(2.5),
            '& .MuiButton-text': {
              paddingInline: theme.spacing(2.5)
            }
          },
          '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
            paddingBlockStart: 0
          },
          '& + .MuiCollapse-root .MuiCardHeader-root:first-child, & + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child':
          {
            paddingBlockStart: 0
          }
        })
      }
    }
  }
}

export default card
