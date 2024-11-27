import API_BASE from './config'

export default class ApiGateway {
  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${API_BASE}${path}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`)
    }
    return response.json()
  }

  async post<T>(path: string, payload: unknown): Promise<T> {
    const response = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (!response.ok) {
      throw new Error(`Failed to post: ${response.statusText}`)
    }
    return response.json()
  }
}
