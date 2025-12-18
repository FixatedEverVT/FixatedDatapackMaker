const {Element, PackInfo} = require("./main.js");
const {Drop, Soil, Crop} = require("./botanypots.js");
process.env.packname = "FixatedCrops";

const elements = [];

(() => {
	const grapevine_stem = new Soil("grapevine_stem", "botanypots", "vinery");
	grapevine_stem.AddInputs(["vinery:grapevine_stem"]);
	grapevine_stem.AddCategories(["grape_seeds"]);
	grapevine_stem.SetDisplay("vinery:grapevine_stem");
	elements.push(grapevine_stem);
})();

(() => {
	const grapevine_lattice = new Soil("grapevine_lattice", "botanypots", "vinery");
	grapevine_lattice.AddInputs([
		"vinery:oak_lattice",
		"vinery:spruce_lattice",
		"vinery:birch_lattice",
		"vinery:jungle_lattice",
		"vinery:acacia_lattice",
		"vinery:dark_oak_lattice",
		"vinery:mangrove_lattice",
		"vinery:bamboo_lattice",
		"vinery:cherry_lattice",
		"vinery:dark_cherry_lattice"
	]);
	grapevine_lattice.AddCategories(["grape_seeds", "jungle_grape_seeds"]);
	grapevine_lattice.SetDisplay("vinery:oak_lattice");
	elements.push(grapevine_lattice);
})();

(() => {
	const grapevine_loam = new Soil("grapevine_loam", "botanypots", "vinery");
	grapevine_loam.AddInputs(["vinery:loam"]);
	grapevine_loam.AddCategories(["grape_seeds", "jungle_grape_seeds"]);
	grapevine_loam.SetDisplay("vinery:loam");
	grapevine_loam.SetSpeed(1.5);
	elements.push(grapevine_loam);
})();

(() => {
	const bush = "red_grape_bush";
	const seed = "red_grape_seeds";
	const grape = "red_grape";
	const prefix = "vinery:";
	const categories = ["grape_seeds"];
	const ele = new Crop(seed, "botanypots", "vinery");
	ele.SetDisplay(prefix+bush);
	ele.AddCategories(categories);
	ele.SetSeed(prefix+seed);
	ele.AddDrops([new Drop(prefix+grape, 100)]);
	ele.SetSpeed(1800);
	elements.push(ele);
})();

(() => {
	const bush = "white_grape_bush";
	const seed = "white_grape_seeds";
	const grape = "white_grape";
	const prefix = "vinery:";
	const categories = ["grape_seeds"];
	const ele = new Crop(seed, "botanypots", "vinery");
	ele.SetDisplay(prefix+bush);
	ele.AddCategories(categories);
	ele.SetSeed(prefix+seed);
	ele.AddDrops([new Drop(prefix+grape, 100)]);
	ele.SetSpeed(1800);
	elements.push(ele);
})();

(() => {
	const bush = "savanna_grape_bush_red";
	const seed = "savanna_grape_seeds_red";
	const grape = "savanna_grapes_red";
	const prefix = "vinery:";
	const categories = ["grape_seeds"];
	const ele = new Crop(seed, "botanypots", "vinery");
	ele.SetDisplay(prefix+bush);
	ele.AddCategories(categories);
	ele.SetSeed(prefix+seed);
	ele.AddDrops([new Drop(prefix+grape, 100)]);
	ele.SetSpeed(1800);
	elements.push(ele);
})();
(() => {
	const bush = "savanna_grape_bush_white";
	const seed = "savanna_grape_seeds_white";
	const grape = "savanna_grapes_white";
	const prefix = "vinery:";
	const categories = ["grape_seeds"];
	const ele = new Crop(seed, "botanypots", "vinery");
	ele.SetDisplay(prefix+bush);
	ele.AddCategories(categories);
	ele.SetSeed(prefix+seed);
	ele.AddDrops([new Drop(prefix+grape, 100)]);
	ele.SetSpeed(1800);
	elements.push(ele);
})();

(() => {
	const bush = "taiga_grape_bush_red";
	const seed = "taiga_grape_seeds_red";
	const grape = "taiga_grapes_red";
	const prefix = "vinery:";
	const categories = ["grape_seeds"];
	const ele = new Crop(seed, "botanypots", "vinery");
	ele.SetDisplay(prefix+bush);
	ele.AddCategories(categories);
	ele.SetSeed(prefix+seed);
	ele.AddDrops([new Drop(prefix+grape, 100)]);
	ele.SetSpeed(1800);
	elements.push(ele);
})();
(() => {
	const bush = "taiga_grape_bush_white";
	const seed = "taiga_grape_seeds_white";
	const grape = "taiga_grapes_white";
	const prefix = "vinery:";
	const categories = ["grape_seeds"];
	const ele = new Crop(seed, "botanypots", "vinery");
	ele.SetDisplay(prefix+bush);
	ele.AddCategories(categories);
	ele.SetSeed(prefix+seed);
	ele.AddDrops([new Drop(prefix+grape, 100)]);
	ele.SetSpeed(1800);
	elements.push(ele);
})();
(() => {
	const bush = "jungle_grape_bush_red";
	const seed = "jungle_grape_seeds_red";
	const grape = "jungle_grapes_red";
	const prefix = "vinery:";
	const categories = ["jungle_grape_seeds"];
	const ele = new Crop(seed, "botanypots", "vinery");
	ele.SetDisplay(prefix+bush);
	ele.AddCategories(categories);
	ele.SetSeed(prefix+seed);
	ele.AddDrops([new Drop(prefix+grape, 100)]);
	ele.SetSpeed(1800);
	elements.push(ele);
})();
(() => {
	const bush = "jungle_grape_bush_white";
	const seed = "jungle_grape_seeds_white";
	const grape = "jungle_grapes_white";
	const prefix = "vinery:";
	const categories = ["jungle_grape_seeds"];
	const ele = new Crop(seed, "botanypots", "vinery");
	ele.SetDisplay(prefix+bush);
	ele.AddCategories(categories);
	ele.SetSeed(prefix+seed);
	ele.AddDrops([new Drop(prefix+grape, 100)]);
	ele.SetSpeed(1800);
	elements.push(ele);
})();

(() => {
	const packinfo = new PackInfo();
	packinfo.SetDescription("hihihihi");
	elements.push(packinfo);
})();
for (const ele of elements) {
	ele.SAVE("./");
}