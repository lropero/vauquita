# Vauquita 🐄

A lightweight batteries-included template for React apps.

### Requires

- Node v12.18.3

### Installation

```sh
$ npm ci
```

### Starting DEV

```sh
$ npm run start
```

### Building for production

```sh
$ npm run build
```

### Features

- [Ant Design](https://ant.design/)
- [Lodash](https://lodash.com/)
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [react-i18next](https://react.i18next.com/)
- [styled-components](https://styled-components.com/)
- [prettier-standard](https://github.com/sheerun/prettier-standard#readme)

### Before you start

Make sure you start fresh with latest versions for all dependencies:

```sh
$ npm run upgrade
$ npm run nuke
```

> What happens if something breaks when upgrading X dependency?

- We fix it by referring to X's documentation and PR :)

### Environment variables

Create `./.env.local` file to modify environment variables locally, this file will take precedence over `./.env` which is intended for production.

### Linting

Linting will occur automatically on commit. You can still lint manually:

```sh
$ npm run lint
```

### Renaming

1. Change project name in `./package.json` file.
2. Replace all occurrences of `vauquita` to new name in all `.js` and `.jsx` files.
3. Run `npm run nuke`.

You'll now be able to import by doing `import { someComponent } from 'my-amazing-project/components'`, given that `someComponent` was added to `src/components/index.js` accordingly.

### Extra

Refer to [webpack's documentation](https://webpack.js.org/concepts/) to add file types (e.g. add support for `mp4` files) or customize building.
