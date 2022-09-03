import { url } from '../../stores/utils';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load() {
	url.set('/portofolio');
}
