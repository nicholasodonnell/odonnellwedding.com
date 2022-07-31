import { useEffect } from 'react'

export default theme => {
  useEffect(() => {
    document.documentElement.style.setProperty('--theme', `var(--${theme}`)
  }, [ theme ])
}
