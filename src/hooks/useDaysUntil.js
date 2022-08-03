import { useEffect, useState } from 'react'

const oneDay = 24 * 60 * 60 * 1000

export default target => {
  const [ daysUntil, setDaysUntil ] = useState(0)

  useEffect(() => {
    const now = new Date()

    setDaysUntil(
      Math.max(0, Math.ceil(((target.getTime() - now.getTime()) / oneDay)))
    )
  }, [ target ])

  return daysUntil
}
