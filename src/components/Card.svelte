<script>
	export let data = {
		title: 'Kedai App',
		date: 'JAN, 14 2022',
		image: 'kedai-app.png',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores, tempora recusandae nesciunt animi voluptas, quam nemo nihil quisquam dicta ad quis doloremque maxime. Molestias, dicta modi! Nisi, omnis iure!'
	};
	export let isLast = false;
</script>

<div class="flex justify-between">
	<!-- Title -->
	<div class="flex-[7]">
		<!-- name -->
		<h1 class="font-semibold md:text-5xl text-3xl">{data.title}</h1>

		<!-- date -->
		<p class="my-3 text-gray-600">{data.date}</p>
	</div>

	<!-- Image -->
	<div class="flex flex-[5]">
		<!-- image -->
		<!-- <div class=""> -->
		<img class="object-cover w-[205px]" src={data.image} alt="gambar" />
		<!-- </div> -->
		<!-- des -->
		<p class="ml-10 text-gray-600">
			{data.desc}
		</p>
	</div>
</div>

{#if isLast}
	<div class="py-[8px]" />
{:else}
	<div class="w-full my-4 py-[1.5px] bg-gray-300 " />
{/if}
