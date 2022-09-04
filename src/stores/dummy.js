import {get, writable } from 'svelte/store';

const dataPortofolio = writable([
	{
		title: 'Flame Learning',
		date: 'AUG, 28 2021',
		image: 'portofolio/flamelearning.png',
		link_github: 'https://github.com/Dicky019/flamelearning',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores, tempora recusandae nesciunt animi voluptas, quam nemo nihil quisquam dicta ad quis doloremque maxime. Molestias, dicta modi! Nisi, omnis iure!'
	},
	{
		title: 'Kedai App',
		date: 'APR, 9 2022',
		image: 'portofolio/kedai-app.png',
		link_github: 'https://github.com/KeDai-Computerworks/KeDaiApp',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores, tempora recusandae nesciunt animi voluptas, quam nemo nihil quisquam dicta ad quis doloremque maxime. Molestias, dicta modi! Nisi, omnis iure!'
	}
]);

export const getData= get(dataPortofolio);

// export default {getData}
