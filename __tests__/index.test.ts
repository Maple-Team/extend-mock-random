import { Random } from 'mockjs'
import { constellations } from '../src/index'

describe('mock-extend test cases', () => {
  it('Random.constellations() should return one element of constellations', () => {
    const constellation = Random.constellation()
    expect(constellations.includes(constellation)).toBe(true)
  })
  it('Random.jwt() should return three string split by .', () => {
    const jwt: string = Random.jwt()
    const strings = jwt.split('.')
    expect(strings.length).toBe(3)
    expect(strings[0].length).toBeGreaterThanOrEqual(20)
    expect(strings[0].length).toBeLessThanOrEqual(40)
    expect(strings[1].length).toBeGreaterThanOrEqual(20)
    expect(strings[1].length).toBeLessThanOrEqual(40)
    expect(strings[2].length).toBeGreaterThanOrEqual(20)
    expect(strings[2].length).toBeLessThanOrEqual(40)
  })
})
