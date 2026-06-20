// MUI Imports
import type { Theme } from '@mui/material/styles'

const slider: Theme['components'] = {
  MuiSlider: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        boxSizing: 'border-box',
        ...(ownerState.orientation === 'horizontal'
          ? ownerState.size !== 'small'
            ? { blockSize: 6 }
            : { blockSize: 4 }
          : ownerState.size !== 'small'
            ? { inlineSize: 6 }
            : { inlineSize: 4 }),
        '&.Mui-disabled': {
          opacity: 0.45,
          color: `var(--mui-palette-${ownerState.color}-main)`
        }
      }),
      thumb: ({ ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              blockSize: 14,
              inlineSize: 14,
              border: '2px solid currentColor',
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0 0 0 7px var(--mui-palette-${ownerState.color}-lightOpacity)`
              },
              '&.Mui-active.Mui-focusVisible': {
                boxShadow: `0 0 0 10px var(--mui-palette-${ownerState.color}-lightOpacity)`
              }
            }
          : {
              blockSize: 22,
              inlineSize: 22,
              border: '4px solid currentColor'
            }),
        backgroundColor: 'var(--mui-palette-common-white)',
        transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
        ...(!ownerState.disabled && {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15), 0 0 6px rgba(102, 108, 255, 0.1)'
        }),
        '&:before': {
          boxShadow: 'none'
        },
        '&:after': {
          ...(ownerState.size === 'small'
            ? {
                blockSize: 28,
                inlineSize: 28
              }
            : {
                blockSize: 38,
                inlineSize: 38
              })
        },
        '&:hover, &.Mui-focusVisible': {
          transform: 'scale(1.2)',
          boxShadow: `0 0 0 8px var(--mui-palette-${ownerState.color}-lightOpacity), 0 0 12px rgba(102, 108, 255, 0.2)`
        },
        '&.Mui-active': {
          transform: 'scale(1.3)'
        },
        '&.Mui-active.Mui-focusVisible': {
          boxShadow: `0 0 0 13px var(--mui-palette-${ownerState.color}-lightOpacity), 0 0 16px rgba(102, 108, 255, 0.25)`
        }
      }),
      rail: ({ ownerState }) => ({
        opacity: 1,
        color: `var(--mui-palette-${ownerState.color}-lightOpacity)`,
        borderRadius: 10,
        boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
        ...(ownerState.track === 'inverted' && {
          backgroundColor: `var(--mui-palette-${ownerState.color}-main)`
        })
      }),
      track: ({ theme, ownerState }) => ({
        borderRadius: 10,
        boxShadow: '0 0 4px rgba(102, 108, 255, 0.2)',
        ...(ownerState.track === 'inverted' && {
          backgroundColor: `color-mix(in srgb, ${theme.palette[ownerState.color || 'primary'].main} 16%, var(--mui-palette-background-paper))`,
          borderColor: `color-mix(in srgb, ${theme.palette[ownerState.color || 'primary'].main} 16%, var(--mui-palette-background-paper))`
        })
      }),
      valueLabel: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              ...theme.typography.caption,
              borderRadius: 'var(--mui-shape-customBorderRadius-sm)',
              padding: theme.spacing(1, 2)
            }
          : {
              ...theme.typography.body2,
              fontWeight: theme.typography.fontWeightMedium,
              borderRadius: 10,
              padding: theme.spacing(1, 2.5)
            }),
        color: 'var(--mui-palette-customColors-tooltipText)',
        backgroundColor: 'var(--mui-palette-Tooltip-bg)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        animation: 'valueLabelPop 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '@keyframes valueLabelPop': {
          '0%': {
            opacity: 0,
            transform: 'translateY(4px) scale(0.8)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0) scale(1)'
          }
        },
        '&:before': {
          display: 'none'
        }
      })
    }
  }
}

export default slider
