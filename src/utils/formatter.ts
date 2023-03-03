const DAY_MILLISECONDS = 1000 * 60 * 60 * 24

export function getRelativeTime(date: string) {
  const timestamp = new Date(date).getTime()

  const rtf = new Intl.RelativeTimeFormat('pt-BR', {
    numeric: 'auto',
  })

  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / DAY_MILLISECONDS,
  )

  return rtf.format(daysDifference, 'day')
}
