// MUI Imports
import type { Theme } from '@mui/material/styles'

const tooltip: Theme['components'] = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }) => ({
        fontSize: theme.typography.subtitle2.fontSize,
        lineHeight: 1.53846,
        color: 'var(--mui-palette-customColors-tooltipText)',
        borderRadius: 10,
        paddingInline: theme.spacing(3),
        paddingBlock: theme.spacing(1.5),
        margin: 0,
        backdropFilter: 'blur(12px)',
        boxShadow: `
          0 8px 20px rgba(0, 0, 0, 0.15),
          0 2px 6px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.08)
        `,
        animation: 'tooltipFloat3D 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '@keyframes tooltipFloat3D': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9) translateZ(-10px)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1) translateZ(0)'
          }
        }
      }),
      popper: {
        '&[data-popper-placement*="bottom"] .MuiTooltip-tooltip': {
          marginBlockStart: '6px !important'
        },
        '&[data-popper-placement*="top"] .MuiTooltip-tooltip': {
          marginBlockEnd: '6px !important'
        },
        '&[data-popper-placement*="left"] .MuiTooltip-tooltip': {
          marginInlineEnd: '6px !important'
        },
        '&[data-popper-placement*="right"] .MuiTooltip-tooltip': {
          marginInlineStart: '6px !important'
        }
      }
    }
  }
}

export default tooltip
