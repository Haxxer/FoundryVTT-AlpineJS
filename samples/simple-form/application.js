import AlpineFormApplication from "../../scripts/alpine-form-application.js";

export default class ExampleFormApplication extends AlpineFormApplication{

	constructor(dialogData={}, options={}) {
		super(dialogData, options);
	}

	/* -------------------------------------------- */

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			title: "Simple AlpineJS Form",
			template: `modules/alpinejs/samples/simple-form/template.html`,
			classes: ["dialog"],
			width: 150,
			height: 250
		});
	}

	initializeAlpineData(){
		return {
			new_item: "",
			items: [
				"several",
				"individual",
				"strings",
				"like",
				"this"
			],
			addItem(){
				this.items.push(this.new_item)
				this.new_item = "";
			}
		};
	}

	_updateObject(){
		console.log(this.alpineData.items);
	}

}