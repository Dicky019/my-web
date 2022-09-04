<script>
	import Card from './../../components/Card.svelte';
	import { getData } from '../../stores/dummy';
</script>

<head>
	<title>Portofolio</title>
	<meta name="description" content="My Index " />
</head>

<div class="py-4" />
{#each getData as data, i}
	<Card {data} isLast={i == getData.length - 1} />
{/each}
