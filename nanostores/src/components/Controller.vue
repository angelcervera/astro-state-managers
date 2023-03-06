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
		<button @click="addItem()">AddItem</button>

		<pre>Text selected: [{{ text }}]</pre>
		<pre>Flag status: [{{ flag }}]</pre>
    <pre>Computed: [{{ flagPlusText }}]</pre>
    <pre>Array of items: [{{ items }}]</pre>
	</div>
</template>

<script setup lang="ts">
import {exampleComputed, exampleStore, toggleFlag, toggleOptionA, addItem, itemsStore} from "./Storage"
import {useStore, useVModel} from "@nanostores/vue";

const text = useVModel(exampleStore, 'text')
const flag = useVModel(exampleStore, 'flag')
const flagPlusText = useStore(exampleComputed)
const items = useStore(itemsStore)

</script>


