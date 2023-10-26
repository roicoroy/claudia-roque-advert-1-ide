
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import WebFontFile from '../components/webFonts'
/* END-USER-IMPORTS */

export default class ShineScene extends Phaser.Scene {

	constructor() {
		super("ShineScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// mirro_bg
		const mirro_bg = this.add.image(197, -56, "mirro-bg");
		mirro_bg.visible = false;

		// spark_04
		const spark_04 = this.add.image(436, -5, "spark_04");
		spark_04.scaleX = 0.5948994577015478;
		spark_04.scaleY = 0.43767445774129865;
		spark_04.setOrigin(1, 0);

		// flowers_bg
		const flowers_bg = this.add.image(391, 0, "flowers-bg");
		flowers_bg.scaleX = 0.4;
		flowers_bg.scaleY = 0.4;
		flowers_bg.setOrigin(1, 0);
		flowers_bg.visible = false;

		// hari3_hd
		const hari3_hd = this.add.image(302, 118, "hari3-hd");
		hari3_hd.scaleX = 0.196;
		hari3_hd.scaleY = 0.196;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 0, 235, 221);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;

		// text_2
		const text_2 = this.add.text(18, 16, "", {});
		text_2.text = "Night Out?";
		text_2.setStyle({ "fontFamily": "Bangers", "fontSize": "22px" });

		// text_4
		const text_4 = this.add.text(21, 195, "", {});
		text_4.text = "+7802882163 - Fraserburgh - UK";
		text_4.setStyle({ "fontFamily": "Bangers" });

		// LogoLayer
		const logoLayer = this.add.layer();

		// text_1
		const text_1 = this.add.text(13, 39, "", {});
		text_1.text = "Claudia";
		text_1.setStyle({ "color": "#ffffffff", "fontFamily": "Bangers", "fontSize": "50px" });
		logoLayer.add(text_1);

		// text
		const text = this.add.text(85, 81, "", {});
		text.text = "Roque";
		text.setStyle({ "color": "#ffffffff", "fontFamily": "Bangers", "fontSize": "72px" });
		logoLayer.add(text);

		// lips_stick
		const lips_stick = this.add.image(164, 50, "lips-stick");
		lips_stick.scaleX = 0.08;
		lips_stick.scaleY = 0.08;
		lips_stick.angle = -12.000000000000002;
		lips_stick.setOrigin(0, 0);
		logoLayer.add(lips_stick);

		// lipstick
		const lipstick = this.add.image(198, 15, "lipstick");
		lipstick.scaleX = 0.030279586106219378;
		lipstick.scaleY = 0.030279586106219378;
		lipstick.angle = 38;
		lipstick.setOrigin(0, 0);
		lipstick.visible = false;
		logoLayer.add(lipstick);

		// lipstick_1
		const lipstick_1 = this.add.image(207, 41, "lipstick");
		lipstick_1.scaleX = 0.030279586106219378;
		lipstick_1.scaleY = 0.030279586106219378;
		lipstick_1.angle = 38;
		lipstick_1.setOrigin(0, 0);
		lipstick_1.visible = false;
		logoLayer.add(lipstick_1);

		// lipstick_2
		const lipstick_2 = this.add.image(219, 8, "lipstick");
		lipstick_2.scaleX = 0.030279586106219378;
		lipstick_2.scaleY = 0.030279586106219378;
		lipstick_2.angle = 38;
		lipstick_2.setOrigin(0, 0);
		lipstick_2.visible = false;
		logoLayer.add(lipstick_2);

		// flag_of_brazil
		const flag_of_brazil = this.add.image(388, 216, "flag-of-brazil");
		flag_of_brazil.scaleX = 0.02;
		flag_of_brazil.scaleY = 0.02;
		flag_of_brazil.setOrigin(1, 1);

		// text_3
		const text_3 = this.add.text(38, 156, "", {});
		text_3.text = "Hair & Beauty";
		text_3.setStyle({ "fontFamily": "Bangers", "fontSize": "32px" });

		// slash_010
		const slash_010 = this.add.sprite(157, 22, "slash_01", 0);
		slash_010.scaleX = 0.098;
		slash_010.scaleY = 0.098;
		slash_010.angle = 59.99999999999999;

		// jack
		const jack = this.add.image(42, 123, "jack");
		jack.scaleX = 0.5;
		jack.scaleY = 0.5;

		this.flowers_bg = flowers_bg;
		this.hari3_hd = hari3_hd;
		this.text_1 = text_1;
		this.text = text;
		this.lips_stick = lips_stick;
		this.lipstick = lipstick;
		this.lipstick_1 = lipstick_1;
		this.lipstick_2 = lipstick_2;
		this.logoLayer = logoLayer;
		this.slash_010 = slash_010;

		this.events.emit("scene-awake");
	}

	private flowers_bg!: Phaser.GameObjects.Image;
	private hari3_hd!: Phaser.GameObjects.Image;
	private text_1!: Phaser.GameObjects.Text;
	private text!: Phaser.GameObjects.Text;
	private lips_stick!: Phaser.GameObjects.Image;
	private lipstick!: Phaser.GameObjects.Image;
	private lipstick_1!: Phaser.GameObjects.Image;
	private lipstick_2!: Phaser.GameObjects.Image;
	private logoLayer!: Phaser.GameObjects.Layer;
	private slash_010!: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */

	// Write your code here
	preload() {
		this.load.video('claudia-blonde-2', 'assets/claudia-blonde-2.mp4',);

		this.load.addFile(new WebFontFile(this.load, ['Dancing Script', 'Pixelify Sans', 'Bangers']))

	}
	create() {

		this.editorCreate();

		this.slash_010.play('SlashAnimation');

		const claudiaFx = this.text_1.postFX.addGlow(0x4b0082, 10, 5, true, 1, 1);
		this.text.setResolution(1);
		const roqueFx = this.text.postFX.addGlow(0x4b0082, 10, 5, true, 1, 1);


		this.tweens.add({
			targets: [claudiaFx, roqueFx],
			outerStrength: 1,
			yoyo: true,
			loop: -1,
			ease: 'sine.inout'
		});

		// @ts-ignore
		const fx = this.flowers_bg.postFX.addGlow(0x4b0082, 10, 5, false, 1, 1);
		this.tweens.add({
			targets: fx,
			outerStrength: 5,
			duration: 3000,
			yoyo: true,
			loop: -1,
			ease: 'sine.inout'
		});

		// @ts-ignore
		// const hairFx = this.hari3_hd.preFX.addGlow(0xffd700, 1, 0, false, 1, 1);
		// this.tweens.add({
		// 	targets: hairFx,
		// 	outerStrength: 5,
		// 	duration: 3000,
		// 	yoyo: true,
		// 	loop: -1,
		// 	ease: 'sine.inout'
		// });

		// @ts-ignore
		const lipsFx = this.lips_stick.preFX.addGlow(0xff1717, 0, 0, false, 0.1, 2);
		this.tweens.add({
			targets: lipsFx,
			outerStrength: 1,
			duration: 1000,
			yoyo: true,
			loop: -1,
			ease: 'sine.inout'
		});

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
