import Phaser from "phaser";
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";
import AdvertScene from "./scenes/AdvertScene";
import VideoIntroScene from "./scenes/VideoIntroScene";
import ParallaxScene from "./scenes/ParallaxScene";
import Parallax from 'parallax-js'
import ShineScene from "./scenes/ShineScene";
// import GlowFilterßPipelinePlugin from './components/plugins/glow/glowfilterpipeline-plugin.js';

class Boot extends Phaser.Scene {
	snapshotCount = 0;
	setIntervalStoper: any;

	constructor() {
		super("Boot");
	}

	preload() {
		// @ts-ignore
		this.load.pack("pack", preloadAssetPackUrl);
	}

	create() {
		this.scene.start("Preload");

		this.initRecordWebm();
		this.initExportPng();
	}

	initRecordWebm() {

		const canvas: any = document.querySelector("#gameContainer canvas");
		const recordBtn: any = document.querySelector("#startRecordWebm");
		let recording = false;
		let mediaRecorder: any;
		let recordedChunks: any;

		recordBtn.addEventListener("click", () => {
			recording = !recording;
			if (recording) {
				recordBtn.textContent = "Stop";
				const stream = canvas.captureStream(25);
				mediaRecorder = new MediaRecorder(stream, {
					mimeType: 'video/webm;codecs=vp9',
					// ignoreMutedMedia: true
				});
				recordedChunks = [];
				mediaRecorder.ondataavailable = (e: any) => {
					if (e.data.size > 0) {
						recordedChunks.push(e.data);
					}
				};
				mediaRecorder.start();
			} else {
				recordBtn.textContent = "Record"
				mediaRecorder.stop();
				setTimeout(() => {
					const blob = new Blob(recordedChunks, {
						type: "video/webm"
					});
					const url = URL.createObjectURL(blob);
					const a = document.createElement("a");
					console.log(url);
					a.href = url;
					a.download = "recording.webm";
					a.click();
					URL.revokeObjectURL(url);
				}, 0);
			}
		});

	}

	initExportPng() {
		const stopRecording: any = document.getElementById('stopRecording');
		stopRecording.addEventListener('click', () => {
			startRecording.innerText = 'Start';
			clearInterval(this.setIntervalStoper);
		});

		const startRecording: HTMLElement | any = document.getElementById('startRecordPng');
		startRecording.addEventListener('click', () => {
			startRecording.innerText = 'Started';
			this.setIntervalStoper = setInterval(() => {
				this.renderer.snapshot((image: any) => {
					this.exportCanvasAsPNG(`${this.snapshotCount}`, image.src);
				});
			}, 250);
		});
	}
	exportCanvasAsPNG(fileName?: any, dataUrl?: any) {
		var canvasElement = document.getElementById('gameContainer');
		console.log(canvasElement);
		var MIME_TYPE = "image/png";
		var imgURL = dataUrl;
		var dlLink = document.createElement('a');
		dlLink.download = fileName;
		dlLink.href = imgURL;
		dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
		document.body.appendChild(dlLink);
		dlLink.click();
		document.body.removeChild(dlLink);
	}

}

window.addEventListener('load', function () {

	const game = new Phaser.Game({
		type: Phaser.WEBGL,
		pixelArt: false,
		antialias: true,
		width: 390,
		height: 844,
		backgroundColor: "#00000",
		parent: "gameContainer",
		fullscreenTarget: 'gameContainer',
		render: {
			roundPixels: true,
		},
		dom: {
			createContainer: true
		},
		fps: {
			// target: 24,
			// Change framerate to a very low value when exporting frames
			target: 12,
			forceSetTimeOut: true
		},
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		// plugins: {
		// 	global: [{
		// 		key: 'rexGlowFilterPipeline',
		// 		plugin: GlowFilterPipelinePlugin,
		// 		start: true
		// 	}]
		// },
		scene: [Boot, Preload,
			AdvertScene,
			VideoIntroScene,
			ParallaxScene,
			ShineScene

		]
	});

	game.scene.start("Boot");



});