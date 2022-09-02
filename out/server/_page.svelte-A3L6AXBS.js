import {
  create_ssr_component,
  validate_component
} from "./chunk-2BZ4A7K7.js";
import "./chunk-TWLJ45QX.js";

// .svelte-kit/adapter-node/entries/pages/_page.svelte.js
var Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"md:my-14 my-6 md:flex-row flex-col flex justify-center md:justify-between"}"><div class="${"md:flex-1 md:flex md:flex-col md:justify-center"}"><p class="${"font-semibold md:text-6xl text-4xl "}">Hallo I&#39;m</p>
		<p class="${"font-semibold md:text-6xl text-4xl mb-2 md:mb-4"}">Dicky Darmawan</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In et similique adipisci, minus ullam
			eveniet impedit aliquam neque sunt iure molestiae maxime magni distinctio, minima ipsa dolor
			dolores sit aperiam.
		</p>
		<div class="${"flex gap-x-3 mt-4"}"><a href="${"https://github.com/Dicky019"}"><img class="${"w-8"}" src="${"github.svg"}" alt="${"linkedin"}"></a>
			<a href="${"https://www.linkedin.com/in/dicky-darmawan-7300bb215/"}"><img class="${"w-8 mt-[2.5px]"}" src="${"linkedin.svg"}" alt="${"linkedin"}"></a></div></div>
	<div class="${"md:flex-1 md:ml-8 md:mt-0 mt-6 "}"><img class="${"rounded-sm w-[100%] h-96 md:h-[550px] object-cover"}" src="${"image 1.jpg"}" alt="${"Gambar Orang"}"></div></div>`;
});
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="${"flex justify-between sm:my-5 my-3"}"><a class="${"font-bold text-lg md:text-xl"}" href="${"/"}">Dicky</a>
	<div class="${"flex sm:gap-x-8 gap-x-5"}"><a class="${"font-bold text-lg md:text-xl"}" href="${"/"}">About Us</a>
		<a class="${"font-bold text-lg md:text-xl"}" href="${"/"}">Portofolio</a>
		<a class="${"font-bold text-lg md:text-xl"}" href="${"/"}">Resume</a></div></header>`;
});
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${validate_component(Home, "Home").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-A3L6AXBS.js.map
