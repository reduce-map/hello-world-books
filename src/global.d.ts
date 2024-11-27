type ApiResponse<T = any> = {
  status: 'ok' | 'error'
  message?: string
  data?: T
}
