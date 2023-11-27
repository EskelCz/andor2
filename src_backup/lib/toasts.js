
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

export const notyf = new Notyf({
  duration: 5000,
  position: { x: 'right', y: 'top' },
  types: [
    { type: 'success', background: 'var(--green)', icon: false }
  ]
})

export const showToast = () => {
  const url = new URL(window.location.href)
  const toast = url.searchParams.get('toast')
  if (toast === 'game-added') { notyf.success('Hra byla přidána') }
  if (toast) {
    url.searchParams.delete('toast')
    window.history.pushState({}, '', url.href)
  }
}
