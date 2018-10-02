const Generator = require('yeoman-generator')

const chalk = require('chalk')
const yosay = require('yosay')

class CiscoWebexTeamsBotGenerator extends Generator {

	install () {
		this.installDependencies()
	}

	prompting () {

		this.log(yosay(`Welcome to the incredible ${chalk.red('generator-cwt-bot')} generator!`))

		const prompts = []
		prompts.push({
			default: true,
			message: 'Would you like to enable this option?',
			name: 'someAnswer',
			type: 'confirm',
		})

		return this.prompt(prompts)
			.then((props) => {
				this.props = props
			})

	}

	writing () {
		this.fs.copy(this.templatePath('dummyfile.txt'), this.destinationPath('dummyfile.txt'))
	}

}

module.exports = CiscoWebexTeamsBotGenerator
