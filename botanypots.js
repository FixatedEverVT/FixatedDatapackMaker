const {Element} = require("./main.js");


class Drop {
	output = { "item": "none" }
	chance = 0;
	constructor (item, chance) {
		if (item) this.output = item;
		if (chance) this.chance = chance;
	}
}
class Crop extends Element {
	STRUCTURE = ["$PACKNAME", "data", "$NAMESPACE:pack", "recipes", "$NAMESPACE:dependency", "crop"];
	DATA = {
		seed: { "item" : "none" },
		type: "botanypots:crop",
		categories: [],
		growthTicks: 1200,
		display: { "block": "none" },
		drops: []
	};
	constructor (filename, pack, dependency) {
		super({filename, pack, dependency});
	}
	SetSeed (seed) {
		this.DATA.seed.item = seed;
	}
	AddCategories (cats) {
		this.DATA.categories.push(...cats);
	}
	SetSpeed (speed) {
		this.DATA.growthTicks = speed;
	}
	SetDisplay (block) {
		this.DATA.display.block = block;
	}
	AddDrops (drops) {
		this.DATA.drops.push(...drops);
	}
}
class Soil extends Element {
	STRUCTURE = ["$PACKNAME", "data", "$NAMESPACE:pack", "recipes", "$NAMESPACE:dependency", "soil"];
	DATA = {
		input: [],
		type: "botanypots:soil",
		display: { "block": "none" },
		categories: [],
		growthModifier: 1
	};
	constructor (filename, pack, dependency) {
		super({filename, pack, dependency});
	}
	AddInputs (inputs) {
		for (const input in inputs) {
			this.DATA.input.push({ "item": inputs[input] });
		}
	}
	AddCategories (cats) {
		this.DATA.categories.push(...cats);
	}
	SetSpeed (speed) {
		this.DATA.growthModifier = speed;
	}
	SetDisplay (block) {
		this.DATA.display.block = block;
	}
	
}


module.exports = {Drop, Crop, Soil};