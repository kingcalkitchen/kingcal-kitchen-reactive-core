import { BASE_COLORS } from './base'

export const FLEX_BASE = { flex: 1 }

export const CONTAINER_BASE = {
    ...FLEX_BASE,
    justifyContent: 'center',
    alignItems: 'center',
}

export const APP_THEME = {
    primary: BASE_COLORS.primary,
    secondary: BASE_COLORS.secondary,
    error: BASE_COLORS.error,
}
