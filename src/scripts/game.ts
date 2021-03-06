import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import { GRAVITY } from './constants'

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	backgroundColor: '#ffffff',
	scale: {
		parent: 'phaser-game',
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: DEFAULT_WIDTH,
		height: DEFAULT_HEIGHT
	},
	scene: [PreloadScene, MainScene],
	physics: {
		default: 'arcade',
		arcade: {
			// debug: true,
			gravity: { y: GRAVITY }
		}
	}
}

window.addEventListener('load', () => {
	const game = new Phaser.Game(config)
})
