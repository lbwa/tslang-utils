import { isServer, isBrowser } from './env'

describe('Environment detector', () => {
  it('should be browser env', () => {
    expect(isBrowser()).toBeTruthy()
  })

  it('should be server env', () => {
    expect(isServer()).toBeTruthy()
  })
})
