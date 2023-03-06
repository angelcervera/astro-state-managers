<template>
	<div>
    <h2>Presentation component.</h2>
    <pre>Text selected: [{{ profile.text }}]</pre>
    <pre>Flag status: [{{ profile.flag }}]</pre>
    <pre>Computed: [{{ flagPlusText }}]</pre>
    <pre>Array of items: [{{ items }}]</pre>
	</div>
</template>

<script setup lang="ts">
import {exampleComputed, exampleStore, itemsStore} from "./Storage"
import {useStore} from "@nanostores/vue";

const profile = useStore(exampleStore)
const flagPlusText = useStore(exampleComputed)
const items = useStore(itemsStore)

</script>
