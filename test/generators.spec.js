const assert = require('assert')

const generators = require('..')

describe('module', () => {
	it('exports', () => {
		assert(generators)
	})
})
