<template>
	<div>
    <h2>Controller component.</h2>
    <select v-model="text" class="btn dropdown-toggle">
      <option value="">No filter</option>
      <option value="es">Spanish</option>
      <option value="en">English</option>
    </select>

		<button @click="toggleFlag()">Toggle flag</button>
		<button @click="toggleOptionA()">Toggle OptionA</button>

		<pre>Text selected: [{{ text }}]</pre>
		<pre>Flag status: [{{ flag }}]</pre>
    <pre>Computed: [{{ flagPlusText }}]</pre>
	</div>
</template>

<script setup lang="ts">
import {exampleComputed, exampleStore, toggleFlag, toggleOptionA} from "./Storage"
import {useStore, useVModel} from "@nanostores/vue";

const text = useVModel(exampleStore, 'text')
const flag = useVModel(exampleStore, 'flag')
const flagPlusText = useStore(exampleComputed)

</script>


