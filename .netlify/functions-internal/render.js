const { init } = require('../serverless.js');

exports.handler = init({
	appDir: '_app',
	assets: new Set(['.DS_Store', 'favicon.png', 'github.svg', 'image 1.jpg', 'linkedin.svg']),
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
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
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
});
