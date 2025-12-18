const fs = require("fs").promises;
class Element {
	FILENAME = "none";
	FOLDER = false;
	PACKNAME = "none";
	EXTENSION = ".json";
	NAMESPACE = {
		"pack": "none",
		"dependency": "none"
	};
	ELEMENT_TYPE = {
		"main": "none",
		"sub": "none"
	};
	DATA = {};
	STRUCTURE = [];
	constructor ({filename = false, extension = false, pack = false, dependency = false, main_type = false, sub_type = false, structure = false}) {
		if (filename) this.FILENAME = filename;
		this.PACKNAME = process.env.packname;
		if (extension) this.EXTENSION = extension;
		if (pack) this.NAMESPACE.pack = pack;
		if (dependency) this.NAMESPACE.dependency = dependency;
		if (main_type) this.ELEMENT_TYPE.main = main_type;
		if (sub_type) this.ELEMENT_TYPE.sub = sub_type;
		if (structure) this.STRUCTURE = structure;
	}
	async SAVE (source) {
		try {
			const filepath = [];
			for (const ele of this.STRUCTURE) {
				if (ele.startsWith("$")) {
					let [clazz, variable] = ele.slice(1,ele.length).split(":");
					if (!variable) filepath.push(this[clazz]);
					else filepath.push(this[clazz][variable]);
				} else filepath.push(ele);
				const path = source+filepath.join("/");
				await fs.mkdir(path, {recursive: true}, (err) => { if (err) console.log(err) });
			}
			const path = source+filepath.join("/")+"/"+this.FILENAME;
			await fs.writeFile(path+this.EXTENSION, JSON.stringify(this.DATA, null, 2), (err) => { if (err) console.log(err) });

		} catch (err) {
			console.log(err);
		}
	}
}
class PackInfo extends Element {
	FILENAME = "pack";
	EXTENSION = ".mcmeta";
	STRUCTURE = ["$PACKNAME"];
	DATA = {
		"pack": {
			"pack_format": 15,
			"description": "§6My Cool Datapack! v1.0"
		}
	};
	constructor () {
		super({});
	}
	SetFormat (format) {
		this.DATA.pack.pack_format = format;
	}
	SetDescription (description) {
		this.DATA.pack.description = description;
	}
}


module.exports = {Element, PackInfo};