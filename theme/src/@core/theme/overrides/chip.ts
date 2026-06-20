// MUI Imports
import type { Theme } from '@mui/material/styles'

const chip: Theme['components'] = {
  MuiChip: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        variants: [
          {
            props: { variant: 'tonal', color: 'primary' },
            style: {
              backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
              color: 'var(--mui-palette-primary-main)',
              '&.Mui-focusVisible': {
                backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
              },
              '& .MuiChip-deleteIcon': {
                color: 'rgb(var(--mui-palette-primary-mainChannel) / 0.7)',
                '&:hover': {
                  color: 'var(--mui-palette-primary-main)'
                }
              },
              '&.MuiChip-clickable:hover': {
                backgroundColor: 'var(--mui-palette-primary-main)',
                color: 'var(--mui-palette-common-white)'
              }
            }
          },
          {
            props: { variant: 'tonal', color: 'secondary' },
            style: {
              backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
              color: 'var(--mui-palette-secondary-main)',
              '&.Mui-focusVisible': {
                backgroundColor: 'var(--mui-palette-secondary-mainOpacity)'
              },
              '& .MuiChip-deleteIcon': {
                color: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.7)',
                '&:hover': {
                  color: 'var(--mui-palette-secondary-main)'
                }
              },
              '&.MuiChip-clickable:hover': {
                backgroundColor: 'var(--mui-palette-secondary-main)',
                color: 'var(--mui-palette-common-white)'
              }
            }
          },
          {
            props: { variant: 'tonal', color: 'error' },
            style: {
              backgroundColor: 'var(--mui-palette-error-lightOpacity)',
              color: 'var(--mui-palette-error-main)',
              '&.Mui-focusVisible': {
                backgroundColor: 'var(--mui-palette-error-mainOpacity)'
              },
              '& .MuiChip-deleteIcon': {
                color: 'rgb(var(--mui-palette-error-mainChannel) / 0.7)',
                '&:hover': {
                  color: 'var(--mui-palette-error-main)'
                }
              },
              '&.MuiChip-clickable:hover': {
                backgroundColor: 'var(--mui-palette-error-main)',
                color: 'var(--mui-palette-common-white)'
              }
            }
          },
          {
            props: { variant: 'tonal', color: 'warning' },
            style: {
              backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
              color: 'var(--mui-palette-warning-main)',
              '&.Mui-focusVisible': {
                backgroundColor: 'var(--mui-palette-warning-mainOpacity)'
              },
              '& .MuiChip-deleteIcon': {
                color: 'rgb(var(--mui-palette-warning-mainChannel) / 0.7)',
                '&:hover': {
                  color: 'var(--mui-palette-warning-main)'
                }
              },
              '&.MuiChip-clickable:hover': {
                backgroundColor: 'var(--mui-palette-warning-main)',
                color: 'var(--mui-palette-common-white)'
              }
            }
          },
          {
            props: { variant: 'tonal', color: 'info' },
            style: {
              backgroundColor: 'var(--mui-palette-info-lightOpacity)',
              color: 'var(--mui-palette-info-main)',
              '&.Mui-focusVisible': {
                backgroundColor: 'var(--mui-palette-info-mainOpacity)'
              },
              '& .MuiChip-deleteIcon': {
                color: 'rgb(var(--mui-palette-info-mainChannel) / 0.7)',
                '&:hover': {
                  color: 'var(--mui-palette-info-main)'
                }
              },
              '&.MuiChip-clickable:hover': {
                backgroundColor: 'var(--mui-palette-info-main)',
                color: 'var(--mui-palette-common-white)'
              }
            }
          },
          {
            props: { variant: 'tonal', color: 'success' },
            style: {
              backgroundColor: 'var(--mui-palette-success-lightOpacity)',
              color: 'var(--mui-palette-success-main)',
              '&.Mui-focusVisible': {
                backgroundColor: 'var(--mui-palette-success-mainOpacity)'
              },
              '& .MuiChip-deleteIcon': {
                color: 'rgb(var(--mui-palette-success-mainChannel) / 0.7)',
                '&:hover': {
                  color: 'var(--mui-palette-success-main)'
                }
              },
              '&.MuiChip-clickable:hover': {
                backgroundColor: 'var(--mui-palette-success-main)',
                color: 'var(--mui-palette-common-white)'
              }
            }
          }
        ],
        ...theme.typography.body2,
        fontWeight: theme.typography.fontWeightMedium,
        transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transformStyle: 'preserve-3d',
        '&.MuiChip-clickable:hover': {
          transform: 'translateY(-2px) scale(1.04) translateZ(6px)',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12), 0 0 12px rgba(102, 108, 255, 0.08)'
        },
        '&.MuiChip-clickable:active': {
          transform: 'translateY(0) scale(0.98) translateZ(0)',
          transition: 'all 0.1s ease'
        },
        '&.MuiChip-outlined:not(.MuiChip-colorDefault)': {
          borderColor: `var(--mui-palette-${ownerState.color}-main)`
        },
        '& .MuiChip-deleteIcon': {
          transition: 'all 0.2s ease',
          ...(ownerState.size === 'small'
            ? {
                fontSize: '1rem',
                marginInlineEnd: theme.spacing(1),
                marginInlineStart: theme.spacing(-1)
              }
            : {
                fontSize: '1.25rem',
                marginInlineEnd: theme.spacing(1.5),
                marginInlineStart: theme.spacing(-2)
              }),
          '&:hover': {
            transform: 'scale(1.2) rotate(90deg)'
          }
        },
        '& .MuiChip-avatar, & .MuiChip-icon': {
          '& i, & svg': {
            ...(ownerState.size === 'small'
              ? {
                  fontSize: 13
                }
              : {
                  fontSize: 15
                })
          },
          ...(ownerState.size === 'small'
            ? {
                blockSize: 16,
                inlineSize: 16,
                marginInlineStart: theme.spacing(1),
                marginInlineEnd: theme.spacing(-1)
              }
            : {
                blockSize: 20,
                inlineSize: 20,
                marginInlineStart: theme.spacing(1.5),
                marginInlineEnd: theme.spacing(-2)
              })
        }
      }),
      label: ({ ownerState, theme }) => ({
        ...(ownerState.size === 'small'
          ? {
              paddingInline: theme.spacing(2)
            }
          : {
              paddingInline: theme.spacing(3)
            })
      }),
      iconMedium: {
        fontSize: '1.25rem'
      },
      iconSmall: {
        fontSize: '1rem'
      }
    }
  }
}

export default chip
