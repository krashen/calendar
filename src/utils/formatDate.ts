export function formatDate(date: Date, options?: {})  {
    return  new Intl.DateTimeFormat(undefined, options).format(date)
}