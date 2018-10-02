const path = require('path')

const yeoman = Object.freeze({
	assert: require('yeoman-assert'),
	test: require('yeoman-test'),
})

describe('generator-cwt-bot:node-koa-omnibus', () => {

	beforeAll(() => {
		return yeoman.test.run(path.resolve(__dirname, '..', 'generators', 'node-koa-omnibus'))
			.withPrompts({
				someAnswer: true,
			})
	})

	it('creates files', () => {
		yeoman.assert.file(['dummyfile.txt'])
	})

})
