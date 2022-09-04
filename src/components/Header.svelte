<script>
	import { url } from '../stores/utils';
	let path = '/';
	url.subscribe((value) => {
		path = value;
	});
</script>

<header class="flex justify-between sm:my-5 my-3">
	<!-- class="font-bold text-lg md:text-xl"  -->
	<a href="/">
		<!-- Dicky -->
		<img src="logo.svg" alt="kosong" width="30px" />
	</a>
	<div class="flex sm:gap-x-8 gap-x-5">
		<a
			class="font-bold hover:text-black text-lg md:text-xl text-gray-500 {path == '/about'
				? 'text-black'
				: ''} "
			href="/about">About</a
		>
		<a
			class="font-bold hover:text-black text-lg md:text-xl text-gray-500 {path == '/portofolio'
				? 'text-black'
				: ''}"
			href="/portofolio">Portofolio</a
		>
		<a class="font-bold text-lg md:text-xl text-gray-500 hover:text-black " href="/Resume.pdf"
			>Resume</a
		>
	</div>
</header>
