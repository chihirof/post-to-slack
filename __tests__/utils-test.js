const util = require('../src/util')

describe('utils', () => {

  describe('isLink', () => {
    
    it('input "true"', () => {
      expect(util.isLink("true")).toBe(true)
    })

    it('input "false"', () => {
      expect(util.isLink("false")).toBe(false)
    })

    it('input "otherwords"', () => {
      expect(util.isLink("otherwords")).toBe(false)
    })

    it('input null', () => {
      expect(util.isLink(null)).toBe(false)
    })

    it('input "" ', () => {
      expect(util.isLink("")).toBe(false)
    })
  })

})
