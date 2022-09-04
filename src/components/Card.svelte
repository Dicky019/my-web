<script>
	export let data = {
		title: 'Kedai App',
		date: 'JAN, 14 2022',
		image: 'kedai-app.png',
		link_github: 'https://github.com/Dicky019/flamelearning',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores, tempora recusandae nesciunt animi voluptas, quam nemo nihil quisquam dicta ad quis doloremque maxime. Molestias, dicta modi! Nisi, omnis iure!'
	};
	export let isLast = false;
</script>

<div class="flex justify-between">
	<!-- Title -->
	<div class="lg:flex-[7]">
		<!-- name -->
		<h1 class="font-semibold md:text-5xl text-3xl">{data.title}</h1>

		<!-- date -->
		<p class="my-3 text-gray-600">{data.date}</p>
	</div>

	<!-- Image -->
	<div class="flex md:ml-44 lg:ml-0 lg:flex-[5]">
		<!-- image -->
		<!-- <div class=""> -->
		<img
			class="rounded-sm object-cover md:h-[200px] w-[150px] lg:w-[205px]"
			src={data.image}
			alt="gambar"
		/>
		<div class="flex flex-col items-end">
			<p class="ml-10 text-gray-600">
				{data.desc}
			</p>
			<a class="flex flex-row justify-end w-[110px] mt-6" href={data.link_github}>
				to github <img
					class="ml-2"
					src="long-arrow-alt-right-solid.svg"
					alt="arrow right"
					width="28px"
				/>
			</a>
		</div>
		<!-- </div> -->
		<!-- des -->

		<!-- </div> -->
	</div>
</div>

{#if isLast}
	<div class="py-[8px]" />
{:else}
	<div class="w-full my-4 py-[1.5px] bg-gray-300 " />
{/if}
