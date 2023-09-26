import dayjs from 'dayjs'

export * from './current'

/**
 * 按照格式获取现在时间
 * 默认: YYYY-MM-DD HH:mm
 */
export function getCurTimeStr(formate: string | undefined) {
  if (!formate) {
    formate = 'YYYY-MM-DD HH:mm'
  }
  return dayjs().format(formate)
}
