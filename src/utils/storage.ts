import type { AppItem } from '../types'
const KEY = 'heroio_installed_apps'

export function getInstalled(): AppItem[] {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function isInstalled(id: number) {
  return getInstalled().some(a => a.id === id)
}

export function install(app: AppItem) {
  const list = getInstalled()
  if (!list.some(a => a.id === app.id)) {
    localStorage.setItem(KEY, JSON.stringify([app, ...list]))
  }
}

export function uninstall(id: number) {
  const list = getInstalled().filter(a => a.id !== id)
  localStorage.setItem(KEY, JSON.stringify(list))
}
