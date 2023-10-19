import Phaser from "phaser";
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";
import AdvertScene from "./scenes/AdvertScene";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {
        this.load.pack("pack", preloadAssetPackUrl);
    }

    create() {
       this.scene.start("Preload");
    }
}

window.addEventListener('load', function () {
	
	const game = new Phaser.Game({
		width: 390,
		height: 220,
		backgroundColor: "#ffffff",
		parent: "gameContainer",
		scale: {
			mode: Phaser.Scale.ScaleModes.NONE,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		scene: [Boot, Preload, AdvertScene]
	});

	game.scene.start("Boot");
});