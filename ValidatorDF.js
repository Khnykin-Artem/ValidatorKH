"use strict"

import checkBasename from "./f/global/checkBasename.js";
import checkCyrillic from "./f/global/checkCyrillic.js";
import checkExtname from "./f/global/checkExtname.js";
import checkLength from "./f/global/checkLength.js";
import checkSymbols from "./f/global/checkSymbols.js";
import checkType from "./f/global/checkType.js";
import checkSpam from "./f/global/checkSpam.js";
import checkLatin from "./f/global/checkLatin.js";

import staticCheckBasename from "./f/static/staticCheckBasename.js";
import staticCheckCyrillic from "./f/static/staticCheckCyrillic.js";
import staticCheckExtname from "./f/static/staticCheckExtname.js";
import staticCheckLength from "./f/static/staticCheckLength.js";
import staticCheckSymbols from "./f/static/staticCheckSymbols.js";
import staticCheckType from "./f/static/staticCheckType.js";
import staticCheckSpam from "./f/static/staticCheckSpam.js";
import staticCheckLatin from "./f/static/staticCheckLatin.js";



class ValidatorDF {
	constructor(data) {
		// Global
		this.checkLength = checkLength(data);
		this.checkType = checkType(data);
		this.checkBasename = checkBasename(data);
		this.checkExtname = checkExtname(data);
		this.checkSymbols = checkSymbols(data);
		this.checkCyrillic = checkCyrillic(data);
		this.checkSpam = checkSpam(data);
		this.checkLatin = checkLatin(data);
	};
	
	//Static
	static $CheckLength(data, min, max) {
		return staticCheckLength(data, min, max);
	};
	static $CheckType(data, type) {
		return staticCheckType(data, type);
	};
	static $CheckBasename(data, basename) {
		return staticCheckBasename(data, basename);
	};
	static $CheckExtname(data, extname) {
		return staticCheckExtname(data, extname);
	};
	static $CheckSymbols(data, strict, ...symbols) {
		return staticCheckSymbols(data, strict, symbols);
	};
	static $CheckCyrillic(data) {
		return staticCheckCyrillic(data);
	}; 
	static $CheckSpam(data) {
		return staticCheckSpam(data);
	};
	static $CheckLatin(data) {
		return staticCheckLatin(data);
	};

	//----------------------------------------

	// if(new.target === false) {
    //     return new ValidatorDF(...data);
    // };

    // Object.preventExtensions(this);
};



export default ValidatorDF;
