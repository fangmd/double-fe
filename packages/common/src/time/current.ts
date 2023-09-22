import dayjs from "dayjs"

/**
 * @description 获取现在时间
 */

/**
 * 获取当前年份
 */
export function getCurYear() {
  return dayjs().year()
}

/**
 * 获取当前月份, 从1开始(1月=1)
 */
export function getCurMonth(formate: boolean) {
  if (formate && dayjs().month() + 1 < 10) {
    return `0${dayjs().month() + 1}`
  }
  return dayjs().month() + 1
}

/**
 * 获取当前日
 */
export function getCurDay(formate: boolean) {
  if (formate && dayjs().date() < 10) {
    return `0${dayjs().date()}`
  }
  return dayjs().date()
}

/**
 * 获取当前 hour(0-23)
 */
export function getCurHour(formate: boolean) {
  if (formate && dayjs().hour() < 10) {
    return `0${dayjs().hour()}`
  }
  return dayjs().hour()
}

/**
 * 获取当前 minute(0-59)
 */
export function getCurMinute(formate: boolean) {
  if (formate && dayjs().minute() < 10) {
    return `0${dayjs().minute()}`
  }
  return dayjs().minute()
}

/**
 * 获取当前月份，天数
 */
export function getCurDayCntOfMonth(): number {
  const firstD = dayjs().startOf("month").date() // 1
  const lastD = dayjs().endOf("month").date() // 31/30/28
  return lastD - firstD + 1
}
