'use client'

import type { HolidaysTypes } from './Holidays.types'
import styles from './Holiday.styles.module.css'

const isHoliday = (date: Date): boolean => {
  return false
}

export const Holidays = (variant: HolidaysTypes) => {
  return <div className={styles.holidaycontainer}>{isHoliday() ? 'Ja' : 'Nein'}</div>
}
