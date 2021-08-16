export default class AlpineFormApplication extends FormApplication{

	constructor(dialogData={}, options={}) {
		super(dialogData, options);
		Hooks.once("renderAlpineFormApplication", () => {
			this.form.setAttribute("x-data", `ui.windows[${this.appId}]`);
		})
	}

}