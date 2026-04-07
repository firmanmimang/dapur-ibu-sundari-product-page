import { joinURL } from 'ufo'

export const useWithBase = (path: string) => {
  const runtimeConfig = useRuntimeConfig()

  return joinURL(runtimeConfig.app.baseURL || '/', path)
}
