import AlpineFormApplication from "../../scripts/alpine-form-application.js";

export default class ExampleFormApplication extends AlpineFormApplication{

	constructor(dialogData={}, options={}) {
		super(dialogData, options);
		this.items = [
			"several",
			"individual",
			"strings",
			"like",
			"this"
		]
	}

	/* -------------------------------------------- */

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			title: "Simple AlpineJS Form",
			template: `modules/alpinejs/samples/simple-form/template.html`,
			classes: ["dialog"],
			width: 150,
			height: 150
		});
	}

	_updateObject(){
		console.log(this.items)
	}

}