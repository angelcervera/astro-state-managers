import {computed, map} from 'nanostores'
import type {ExampleModel} from "./StorageModel";

export const exampleStore = map<ExampleModel>({
    flag: false,
    text: "",
    options: []
})

export const toggleFlag =
    () => exampleStore.setKey("flag", !exampleStore.get().flag);

export const toggleOptionA =
    () => {
        const options = exampleStore.get().options
        if(options.indexOf("OptionA") != -1)
            exampleStore.setKey("options", options.filter(v => v != "OptionA"));
        else {
            options.push("OptionA")
            exampleStore.setKey("options", [...options]);
        }


    }


export const exampleComputed = computed(exampleStore, exampleValue => {
    // This callback will be called on every `users` changes
    return `Flag = ${exampleValue.flag}] Text = [${exampleValue.text}] Options = [${exampleValue.options}]`
})

exampleStore.listen((value, changed) => {
    console.log(`${changed} new value ${value[changed]}`)
})
