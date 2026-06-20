// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { SystemMode } from '@core/types'

const customShadows = (mode: SystemMode): Theme['customShadows'] => {
  const color = `var(--mui-mainColorChannels-${mode}Shadow)`
  const glow = mode === 'light' ? '102, 108, 255' : '133, 137, 255'

  return {
    xs: `0px 2px 8px rgb(${color} / ${mode === 'light' ? 0.1 : 0.18}), 0px 1px 4px rgb(${color} / ${mode === 'light' ? 0.06 : 0.12})`,
    sm: `0px 4px 14px rgb(${color} / ${mode === 'light' ? 0.12 : 0.22}), 0px 2px 6px rgb(${color} / ${mode === 'light' ? 0.08 : 0.14}), 0 0 8px rgba(${glow}, 0.03)`,
    md: `0px 6px 20px rgb(${color} / ${mode === 'light' ? 0.14 : 0.24}), 0px 3px 10px rgb(${color} / ${mode === 'light' ? 0.08 : 0.16}), 0 0 12px rgba(${glow}, 0.04)`,
    lg: `0px 10px 32px rgb(${color} / ${mode === 'light' ? 0.16 : 0.26}), 0px 5px 16px rgb(${color} / ${mode === 'light' ? 0.1 : 0.18}), 0 0 20px rgba(${glow}, 0.05)`,
    xl: `0px 16px 48px rgb(${color} / ${mode === 'light' ? 0.18 : 0.28}), 0px 8px 24px rgb(${color} / ${mode === 'light' ? 0.12 : 0.2}), 0 0 30px rgba(${glow}, 0.06)`
  }
}

export default customShadows
