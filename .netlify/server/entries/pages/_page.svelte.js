var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require('../../chunks/index.js');
const Home = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
	return `<div class="${'md:my-14 my-6 md:flex-row flex-col flex justify-center md:justify-between'}"><div class="${'md:flex-1 md:flex md:flex-col md:justify-center'}"><p class="${'font-semibold md:text-6xl text-4xl '}">Hallo I&#39;m</p>
		<p class="${'font-semibold md:text-6xl text-4xl mb-2 md:mb-4'}">Dicky Darmawan</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In et similique adipisci, minus ullam
			eveniet impedit aliquam neque sunt iure molestiae maxime magni distinctio, minima ipsa dolor
			dolores sit aperiam.
		</p>
		<div class="${'flex gap-x-3 mt-4'}"><a href="${'https://github.com/Dicky019'}"><img class="${'w-8'}" src="${'github.svg'}" alt="${'linkedin'}"></a>
			<a href="${'https://www.linkedin.com/in/dicky-darmawan-7300bb215/'}"><img class="${'w-8 mt-[2.5px]'}" src="${'linkedin.svg'}" alt="${'linkedin'}"></a></div></div>
	<div class="${'md:flex-1 md:ml-8 md:mt-0 mt-6 '}"><img class="${'rounded-sm w-[100%] h-96 md:h-[550px] object-cover'}" src="${'image 1.jpg'}" alt="${'Gambar Orang'}"></div></div>`;
});
const Header = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
	return `<header class="${'flex justify-between sm:my-5 my-3'}"><a class="${'font-bold text-lg md:text-xl'}" href="${'/'}">Dicky</a>
	<div class="${'flex sm:gap-x-8 gap-x-5'}"><a class="${'font-bold text-lg md:text-xl'}" href="${'/'}">About Us</a>
		<a class="${'font-bold text-lg md:text-xl'}" href="${'/'}">Portofolio</a>
		<a class="${'font-bold text-lg md:text-xl'}" href="${'/'}">Resume</a></div></header>`;
});
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
	return `${(0, import_chunks.v)(Header, 'Header').$$render($$result, {}, {}, {})}
${(0, import_chunks.v)(Home, 'Home').$$render($$result, {}, {}, {})}`;
});
