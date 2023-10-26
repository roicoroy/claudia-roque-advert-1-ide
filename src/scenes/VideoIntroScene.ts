
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import WebFontFile from '../components/webFonts'
/* END-USER-IMPORTS */

export default class VideoIntroScene extends Phaser.Scene {

	constructor() {
		super("VideoIntroScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		const background = this.add.image(0, 0, "background");
		background.setOrigin(0, 0);
		background.alpha = 0.9;
		background.alphaTopLeft = 0.9;
		background.alphaTopRight = 0.9;
		background.alphaBottomLeft = 0.9;
		background.alphaBottomRight = 0.9;

		// mirro_bg
		const mirro_bg = this.add.image(0, 0, "mirro-bg");
		mirro_bg.scaleY = 1.519113321693877;
		mirro_bg.setOrigin(0, 0);

		// hair2_hd
		const hair2_hd = this.add.image(-21, 268, "hair2-hd");
		hair2_hd.scaleX = 0.5583839353249043;
		hair2_hd.scaleY = 0.5583839353249043;
		hair2_hd.setOrigin(0, 0);

		// hair3_hd
		const hair3_hd = this.add.image(-27, 301, "hari3-hd");
		hair3_hd.scaleX = 0.5367917759871222;
		hair3_hd.scaleY = 0.5367917759871222;
		hair3_hd.setOrigin(0, 0);
		hair3_hd.alpha = 0;
		hair3_hd.alphaTopLeft = 0;
		hair3_hd.alphaTopRight = 0;
		hair3_hd.alphaBottomLeft = 0;
		hair3_hd.alphaBottomRight = 0;

		// hair4_hd
		const hair4_hd = this.add.image(4, 327, "hair4-hd");
		hair4_hd.scaleX = 0.5002102380655717;
		hair4_hd.scaleY = 0.5002102380655717;
		hair4_hd.setOrigin(0, 0);
		hair4_hd.alpha = 0;
		hair4_hd.alphaTopLeft = 0;
		hair4_hd.alphaTopRight = 0;
		hair4_hd.alphaBottomLeft = 0;
		hair4_hd.alphaBottomRight = 0;

		// text
		const text = this.add.text(10, 15, "", {});
		text.text = "Claudia";
		text.setStyle({ "fontFamily": "Dancing Script", "fontSize": "98px" });

		// text_1
		const text_1 = this.add.text(168, 100, "", {});
		text_1.text = "Roque";
		text_1.setStyle({ "fontFamily": "Dancing Script", "fontSize": "96px" });

		// text_2
		const text_2 = this.add.text(8.5, 253, "", {});
		text_2.text = "+7510963961 - Fraserburgh, UK";
		text_2.setStyle({ "fontFamily": "Tahoma", "fontSize": "26px" });

		// flowers_bg
		const flowers_bg = this.add.image(0, 305, "flowers-bg");
		flowers_bg.scaleY = 0.973138119372924;
		flowers_bg.setOrigin(0, 0);

		// text_3
		const text_3 = this.add.text(67.5, 202, "", {});
		text_3.text = "Hair and Beauty";
		text_3.setStyle({ "fontFamily": "Tahoma", "fontSize": "36px" });

		// brazil0
		const brazil0 = this.add.image(332, 9, "brazil", 0);
		brazil0.scaleX = 0.03;
		brazil0.scaleY = 0.03;
		brazil0.angle = 21;
		brazil0.setOrigin(0, 0);

		// flag_of_brazil
		const flag_of_brazil = this.add.image(387, 9, "flag-of-brazil");
		flag_of_brazil.scaleX = 0.06;
		flag_of_brazil.scaleY = 0.06;
		flag_of_brazil.setOrigin(1, 0);
		flag_of_brazil.visible = false;

		// scotland_flag
		const scotland_flag = this.add.image(387, 56, "scotland-flag");
		scotland_flag.scaleX = 0.06;
		scotland_flag.scaleY = 0.06;
		scotland_flag.setOrigin(1, 0);
		scotland_flag.visible = false;

		this.hair2_hd = hair2_hd;
		this.hair3_hd = hair3_hd;
		this.hair4_hd = hair4_hd;
		this.text = text;
		this.text_1 = text_1;

		this.events.emit("scene-awake");
	}

	private hair2_hd!: Phaser.GameObjects.Image;
	private hair3_hd!: Phaser.GameObjects.Image;
	private hair4_hd!: Phaser.GameObjects.Image;
	private text!: Phaser.GameObjects.Text;
	private text_1!: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here
	preload() {
		this.load.video('claudia-blonde-2', 'assets/claudia-blonde-2.mp4',);

		this.load.addFile(new WebFontFile(this.load, ['Dancing Script', 'Pixelify Sans']))
	}

	create() {
		this.editorCreate();
		// this.startTextAnimations();
		// this.startFadeSlidesAnimations();
	}

	startTextAnimations() {
		let line = 0;
		let line1 = 0;

		const message = [this.text.text];
		const message1 = [this.text_1.text];

		const text: any = this.text_1;
		text.setResolution(window.devicePixelRatio);

		const text1: any = this.text;
		text1.setResolution(window.devicePixelRatio);

		// const gradient = text.context.createLinearGradient(0, 0, 0, text.height);
		// gradient.addColorStop(0, '#CF8002');
		// gradient.addColorStop(0.5, '#fbff00');
		// gradient.addColorStop(0.5, '#fbff00');
		// gradient.addColorStop(1, '#CF8002');

		// text.setFill(gradient);

		// text1.setFill(gradient);

		const localfx: any = text.preFX.addReveal();
		const localfx1: any = text1.preFX.addReveal();

		this.tweens.add({
			targets: [localfx, localfx1],
			progress: 1,
			hold: 5000,
			duration: 4500,
			repeat: -1,
			onRepeat: () => {
				line++;
				if (line === message.length) {
					line = 0;
				}
				text.setText(message[line]);
				localfx.progress = 0;
			},
		});
	}

	startFadeSlidesAnimations() {
		this.tweens.add({
			targets: [this.hair2_hd],
			duration: 3000,
			alpha: 0,
			yoyo: false,
			ease: "Sine.easeInOut",
		}).on('complete', () => {
			this.tweens.add({
				targets: [this.hair3_hd],
				duration: 3000,
				alpha: 1,
				yoyo: true,
				ease: "Sine.easeInOut",
			}).on('complete', () => {
				this.tweens.add({
					targets: [this.hair4_hd],
					duration: 3000,
					alpha: 1,
					yoyo: true,
					ease: "Sine.easeInOut",
				}).on('complete', () => {
					this.tweens.add({
						targets: [this.hair2_hd],
						duration: 3000,
						alpha: 1,
						yoyo: false,
						ease: "Sine.easeInOut",
					}).on('complete', () => {
						this.startFadeSlidesAnimations();
					});
				});
			});
		});
	}


	setVideo() {
		const intro = this.add.video(165, 420, 'claudia-blonde-2');
		intro.setSize(
			this.game.canvas.width,
			this.game.canvas.height
		);
		intro.setOrigin(
			0,
			0
		);
		intro.setOrigin(0.5, 0.5);
		intro.play();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
