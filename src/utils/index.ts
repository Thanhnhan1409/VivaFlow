
export const getPercent = (amount: number, total: number) => {
  return (amount / total) * 100
}


export const seconds_to_mm_ss = (seconds?: number) => {
  if (!seconds) return "0:00"

  const minutes = Math.floor(seconds / 60)
  const sec = Math.floor(seconds % 60)

  return `${minutes}:${sec < 10 ? `0${sec}` : sec}`
}
