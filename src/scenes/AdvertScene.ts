
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AdvertScene extends Phaser.Scene {

	constructor() {
		super("AdvertScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// flower_background0
		const flower_background0 = this.add.sprite(125, 110, "flower-background", 0);
		flower_background0.scaleX = 1.01;
		flower_background0.scaleY = 1.01;

		// nome
		const nome = this.add.sprite(123, 65, "nome - 00", 0);
		nome.scaleX = 0.95;
		nome.scaleY = 0.95;

		// beauty_hair
		const beauty_hair = this.add.image(-91, 128, "beauty-hair");

		// star
		const star = this.add.sprite(118, 241, "star", 0);

		// home_service
		const home_service = this.add.image(118, 266, "home-service");

		// curve
		const curve = this.add.image(118, 281, "curve");

		this.flower_background0 = flower_background0;
		this.nome = nome;
		this.beauty_hair = beauty_hair;
		this.star = star;
		this.home_service = home_service;
		this.curve = curve;

		this.events.emit("scene-awake");
	}

	private flower_background0!: Phaser.GameObjects.Sprite;
	private nome!: Phaser.GameObjects.Sprite;
	private beauty_hair!: Phaser.GameObjects.Image;
	private star!: Phaser.GameObjects.Sprite;
	private home_service!: Phaser.GameObjects.Image;
	private curve!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here
	preload() {
		this.load.video('claudia-blonde-2', 'assets/claudia-blonde-2.mp4',);
	}
	create() {

		setTimeout(() => {
			this.editorCreate();

			const intro = this.add.video(328, 380, 'claudia-blonde-2');
			intro.setVisible(false);
			intro.play();

			this.flower_background0.play('backgroundAnimation');
			this.star.play('stars-animation');
			// this.nome.play('fullNameAnimation')
			// 	.on('animationcomplete', () => {

			// 		this.tweens.add({
			// 			targets: [this.beauty_hair],
			// 			duration: 500,
			// 			x: 84,
			// 			y: 128,
			// 			ease: "Sine.easeInOut",
			// 		}).on('complete', () => {
			// 			setTimeout(() => {
			// 				this.tweens.add({
			// 					targets: [this.hair_1],
			// 					duration: 750,
			// 					x: 327,
			// 					y: 357,
			// 					ease: "Sine.easeInOut",
			// 				});
			// 			}, 1000);

			// 			setTimeout(() => {
			// 				this.tweens.add({
			// 					targets: [this.hair_2],
			// 					duration: 750,
			// 					x: 489,
			// 					y: 107,
			// 					ease: "Sine.easeInOut",
			// 				});
			// 			}, 2500);

			// 			setTimeout(() => {
			// 				this.tweens.add({
			// 					targets: [this.hair_3],
			// 					duration: 750,
			// 					x: 327,
			// 					y: -137,
			// 					ease: "Sine.easeInOut",
			// 				});
			// 			}, 3500);

			// 			intro.setVisible(true);
			// 			intro.setScale(0.30, 0.30);

			// 			setTimeout(() => {
			// 				this.tweens.add({
			// 					targets: [intro],
			// 					duration: 750,
			// 					x: 320,
			// 					y: 107,
			// 					ease: "Sine.easeInOut",
			// 				}).on('complete', () => {
			// 					// setTimeout(() => {
			// 					// 	intro.stop();
			// 					// }, 5000);
			// 					setTimeout(() => {
			// 						this.scene.start('AdvertScene');
			// 					}, 7500);
			// 				});
			// 			}, 3400);
			// 		});;

			// 		this.tweens.add({
			// 			targets: [this.star],
			// 			duration: 500,
			// 			x: 118,
			// 			y: 160,
			// 			ease: "Sine.easeInOut",
			// 		});

			// 		this.tweens.add({
			// 			targets: [this.home_service],
			// 			duration: 500,
			// 			x: 118,
			// 			y: 185,
			// 			ease: "Sine.easeInOut",
			// 		});

			// 		this.tweens.add({
			// 			targets: [this.curve],
			// 			duration: 500,
			// 			x: 118,
			// 			y: 200,
			// 			ease: "Sine.easeInOut",
			// 		});
			// 		//
			// 	});
		}, 500);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
