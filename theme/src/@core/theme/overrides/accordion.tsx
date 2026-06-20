// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const accordion = (skin: Skin): Theme['components'] => ({
  MuiAccordion: {
    defaultProps: {
      ...(skin === 'bordered' && {
        variant: 'outlined'
      })
    },
    styleOverrides: {
      root: ({ theme }) => ({
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transformStyle: 'preserve-3d',
        ...(skin !== 'bordered'
          ? {
              boxShadow: `
                0 2px 8px rgba(0, 0, 0, 0.06),
                0 1px 2px rgba(0, 0, 0, 0.04),
                inset 0 1px 0 rgba(255, 255, 255, 0.04)
              `
            }
          : {
              '&:not(.Mui-expanded) + &:not(.Mui-expanded)': {
                borderBlockStart: 0
              },
              '&:not(.Mui-expanded):has(+ &:not(.Mui-expanded))': {
                borderBlockEnd: 0
              }
            }),
        '&:not(.Mui-expanded):has(+ .Mui-expanded)': {
          borderBottomLeftRadius: 'var(--mui-shape-borderRadius)',
          borderBottomRightRadius: 'var(--mui-shape-borderRadius)'
        },
        '&.Mui-expanded': {
          borderRadius: 'var(--mui-shape-borderRadius)',
          transform: 'translateZ(8px)',
          ...(skin !== 'bordered' && {
            boxShadow: `
              0 8px 24px rgba(0, 0, 0, 0.1),
              0 4px 12px rgba(0, 0, 0, 0.06),
              0 0 16px rgba(102, 108, 255, 0.04),
              inset 0 1px 0 rgba(255, 255, 255, 0.06)
            `
          }),
          margin: theme.spacing(2, 0),
          '& + .MuiAccordion-root': {
            borderTopLeftRadius: 'var(--mui-shape-borderRadius)',
            borderTopRightRadius: 'var(--mui-shape-borderRadius)',
            '&:before': {
              opacity: 0
            }
          }
        }
      })
    }
  },
  MuiAccordionSummary: {
    defaultProps: {
      expandIcon: <i className='ri-arrow-down-s-line' />
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3, 5),
        color: 'var(--mui-palette-text-primary)',
        minHeight: 46,
        transition: 'all 0.3s ease',
        '&.Mui-expanded': {
          minHeight: 46
        },
        '&:hover': {
          backgroundColor: 'rgba(102, 108, 255, 0.03)'
        },
        '& .MuiTypography-root': {
          color: 'inherit',
          fontWeight: theme.typography.fontWeightMedium
        }
      }),
      content: {
        margin: '0 !important'
      },
      expandIconWrapper: {
        color: 'var(--mui-palette-text-primary)',
        fontSize: '1.25rem',
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '& i, & svg': {
          fontSize: 'inherit'
        }
      }
    }
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(0, 5, 5),
        animation: 'accordionSlideDown 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '@keyframes accordionSlideDown': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-8px) translateZ(-5px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0) translateZ(0)'
          }
        },
        '& .MuiTypography-root': {
          color: 'var(--mui-palette-text-secondary)'
        }
      })
    }
  }
})

export default accordion
