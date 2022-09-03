var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
	if ((from && typeof from === 'object') || typeof from === 'function') {
		for (let key of __getOwnPropNames(from))
			if (!__hasOwnProp.call(to, key) && key !== except)
				__defProp(to, key, {
					get: () => from[key],
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (
	(target = mod != null ? __create(__getProtoOf(mod)) : {}),
	__copyProps(
		isNodeMode || !mod || !mod.__esModule
			? __defProp(target, 'default', { value: mod, enumerable: true })
			: target,
		mod
	)
);
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
	appDir: '_app',
	assets: /* @__PURE__ */ new Set([
		'.DS_Store',
		'favicon.png',
		'github.svg',
		'image 1.jpg',
		'linkedin.svg'
	]),
	mimeTypes: { '.png': 'image/png', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg' },
	_: {
		entry: {
			file: '_app/immutable/start-2ad49e8a.js',
			imports: [
				'_app/immutable/start-2ad49e8a.js',
				'_app/immutable/chunks/index-7d11cbb7.js',
				'_app/immutable/chunks/singletons-ab522a48.js'
			],
			stylesheets: []
		},
		nodes: [
			() => Promise.resolve().then(() => __toESM(require('./nodes/0.js'))),
			() => Promise.resolve().then(() => __toESM(require('./nodes/1.js'))),
			() => Promise.resolve().then(() => __toESM(require('./nodes/2.js')))
		],
		routes: [
			{
				id: '',
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			return {};
		}
	}
};
