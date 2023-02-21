<template>
	<div>
    <h2>Presentation component.</h2>
    <pre>Text selected: [{{ profile.text }}]</pre>
    <pre>Flag status: [{{ profile.flag }}]</pre>
    <pre>Computed: [{{ flagPlusText }}]</pre>
	</div>
</template>

<script setup lang="ts">
import {exampleComputed, exampleStore} from "./Storage"
import {useStore} from "@nanostores/vue";

const profile = useStore(exampleStore)
const flagPlusText = useStore(exampleComputed)

</script>
