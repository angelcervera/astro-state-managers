import {atom, computed, map} from 'nanostores'
import type {ExampleModel} from "./StorageModel";


export type ItemInfo = {
    field1: string;
    field2: string;
}

export const itemsStore = atom<ItemInfo[]>([])

export const exampleStore = map<ExampleModel>({
    flag: false,
    text: "",
    options: []
})

export const addItem =
    () =>  {
        const items = itemsStore.get();
        items.push({field1: `Item ${items.length}`, field2: new Date().toDateString()});
        console.log(items)
        itemsStore.set([...items]);
        console.log(itemsStore.get())
    }

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
