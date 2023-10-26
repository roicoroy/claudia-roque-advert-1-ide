
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import Parallax from 'parallax-js';
// import GlowFilterPipelinePlugin from '../components/plugins/glowfilterpipeline'
// declare var dat: any;
/* END-USER-IMPORTS */

export default class ParallaxScene extends Phaser.Scene {

	constructor() {
		super("ParallaxScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// text_1
		const text_1 = this.add.text(48, 46, "", {});
		text_1.text = "New text";
		text_1.setStyle({ "color": "#0f56ffff", "fontSize": "32px" });

		// flag_of_brazil
		const flag_of_brazil = this.add.image(189.99999850988388, 147.00000104308128, "flag-of-brazil");
		flag_of_brazil.scaleX = 0.2;
		flag_of_brazil.scaleY = 0.2;
		flag_of_brazil.setOrigin(0, 1);

		this.text_1 = text_1;
		this.flag_of_brazil = flag_of_brazil;

		this.events.emit("scene-awake");
	}

	private text_1!: Phaser.GameObjects.Text;
	private flag_of_brazil!: Phaser.GameObjects.Image;

	/* START-USER-CODE */
	fadeCamera: any;
	flashCamera: any;
	shakeCamera: any;
	iter = 0;
	image: any;
	glowTask: any;
	// Write your code here

	update() {
		// this.image.x = Math.sin(this.iter) * 200;
		// this.image.y = Math.cos(this.iter) * 200;
		this.iter += 0.04;
	}
	create() {

		this.editorCreate();

		// const cc = this.cameras.main.setViewport(0, 0, 390, 845);
		// cc.setOrigin(0, 0);
		// const cam = this.cameras.main;
		// cam.setSize(390, 845);
		// // cam.y = 845;
		// cam.preFX?.addBloom();
		// // cam.x = 0;
		// cam.setOrigin(0, 1);
		// cam.setViewport(0, 0, 390, 845);
		// cam.fadeIn(2000);


		// const Between = Phaser.Math.Between;
		// var postFxPlugin: any = this.plugins.get('rexGlowFilterPipeline');
		// console.log(postFxPlugin);

		// let gameObject: any = this.add.image(190, 400, "flowers-bg")
		// 	.setRandomPosition(10, 10, 200, 150)

		// for (var i = 0; i < 20; i++) {
		// 	gameObject
		// 		.setInteractive()
		// 		.on('pointerover', () => {
		// 			// Add postfx pipeline
		// 			var pipeline = postFxPlugin.add(gameObject);

		// 			gameObject.glowTask = gameObject.scene.tweens.add({
		// 				targets: pipeline,
		// 				intensity: 0.02,
		// 				ease: 'Linear',
		// 				duration: Between(500, 1000),
		// 				repeat: -1,
		// 				yoyo: true
		// 			});
		// 		})

		// 		.on('pointerout', () => {
		// 			// Remove postfx pipeline
		// 			postFxPlugin.remove(this);
		// 			gameObject.glowTask.stop();
		// 			gameObject.glowTask = null;
		// 		})
		// }


		// if (this.text_1?.preFX) {

		// 	const graphics = this.add.graphics();
		// 	graphics.fillStyle(0x009c3b, 1);
		// 	graphics.fillRoundedRect(3, 342, 384, 500, { tl: 25, tr: 25, bl: 25, br: 25 });
		// 	const fx1 = graphics.postFX.addGlow(0xffd700, 0, 0, false, 0.1, 24);

		// 	this.tweens.add({
		// 		targets: fx1,
		// 		outerStrength: 20,
		// 		yoyo: true,
		// 		loop: -1,
		// 		duration: 3000,
		// 		ease: 'sine.inout'
		// 	});

		// 	// const graphics = this.add.graphics();
		// 	// ;

		// 	// graphics.fillStyle(0xfbff00, 1);
		// 	// graphics.fillRect(30, 200, 256, 256);

		// 	// graphics.fillStyle(0x0039d3, 1);
		// 	// graphics.fillRect(30, 450, 256, 256);

		// 	// const fx1 = graphics.postFX.addGlow(0xffffff, 0, 0, false, 0.1, 24);

		// 	// this.tweens.add({
		// 	// 	targets: fx1,
		// 	// 	outerStrength: 4,
		// 	// 	yoyo: true,
		// 	// 	loop: -1,
		// 	// 	ease: 'sine.inout'
		// 	// });

		// }

		// 
		const flowers_bg: any = this.add.sprite(0, 844, 'flowers-bg').setOrigin(0, 1).setScale(1);
		flowers_bg.preFX.setPadding(32);
		// const fx = flowers_bg.preFX.addGlow();
		const fx = flowers_bg.postFX.addGlow(0xffd700, 0, 0, false, 0.1, 2);
		this.tweens.add({
			targets: fx,
			outerStrength: 10,
			duration: 3000,
			yoyo: true,
			loop: -1,
			ease: 'sine.inout'
		});

		// 
		const parallaxElContainer: HTMLDivElement | any = document.createElement('div');
		parallaxElContainer.setAttribute('id', 'parallaxContainer');
		// parallaxElContainer.setAttribute('', 'parallaxContainer');
		parallaxElContainer.style = 'background-color: yellow';
		parallaxElContainer.innerText = 'Container';

		// const divFront: HTMLDivElement | any = document.createElement('div');
		// divFront.setAttribute('id', 'parallaxFront');
		// divFront.setAttribute('data-depth', '0.3');
		// divFront.style = 'background-color: green; width: 250px; height: 100px; font: 48px Arial';
		// divFront.innerText = 'Phaser Front';

		// const divBack: HTMLDivElement | any = document.createElement('div');
		// divBack.style = 'background-color: purple; width: 250px; height: 100px; font: 48px Arial';
		// divBack.setAttribute('id', 'parallaxBack');
		// divFront.setAttribute('data-depth', '0.1');
		// divBack.innerText = 'Phaser Back';

		// parallaxElContainer.appendChild(divBack);
		// parallaxElContainer.appendChild(divFront);

		// const container = this.add.dom(0, 0, parallaxElContainer);
		// container.x = 10;
		// container.y = 10;
		// container.setOrigin(0, 0);
		// startParallax();
		//		

		// parallaxElContainer.appendChild(this.hari3_hd);
		// parallaxElContainer.appendChild(divFront);
		// parallaxElContainer.

		// console.log(this.children.getAll());
		// console.log(this.children?.texture.key);
		// this.children.each((element) => {
		// 	console.log(element);
		// });


		let startParallax = () => {
			this.time.addEvent({
				delay: 10,
				callback: () => {
					var parallaxScene = document.getElementById('parallaxContainer');
					var parallaxInstance = new Parallax(parallaxScene);
					parallaxInstance.friction(0.2, 0.2);
					console.log(parallaxElContainer);
				}
			});
		};


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
