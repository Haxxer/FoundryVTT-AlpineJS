import AlpineFormApplication from "./alpine-form-application.js";
import ExampleFormApplication from "../samples/simple-form/application.js";

Hooks.once('init', async function() {
	window.AlpineFormApplication = AlpineFormApplication;
	window.ExampleFormApplication = ExampleFormApplication;
});