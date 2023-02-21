# Double Vue initialization

The trace at [src/_app](src/_app.ts) is printed one time per component.
To be able to use [Pinia](https://pinia.vuejs.org/), it should be initialized one per load.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/angelcervera/astro_plus_vue_init_bug)

[Bug in Astro](https://github.com/withastro/astro/issues/6312)


## Install library
```shell
pnpm add nanostores @nanostores/vue
```

## Install devtool integration
```shell
pnpm install --save-dev @vue/devtools-api
```

