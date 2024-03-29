# vauquita 🐄 &middot; [![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)

A lightweight batteries-included template for React apps.

### Features

- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [react-i18next](https://react.i18next.com/)
- [styled-components](https://styled-components.com/)
- [Prettier](https://prettier.io/)
- [standard](https://standardjs.com/)

### Requires

- [Node v18.14.2](https://nodejs.org/)
- npm v9.5.0

### Installation

```sh
npm ci
```

### Starting DEV

```sh
npm run start
```

### Building for production

```sh
npm run build
```

### Environment variables

Create `./.env.local` file to modify environment variables locally, this file will take precedence over `./.env` which is intended for production.

### Linting

```sh
npm run lint
```

### Renaming

1. Change project name in `./package.json` file.
2. Replace all occurrences of `vauquita` to new name in all `.js` and `.jsx` files (i.e. replace `from 'vauquita/` to `from 'my-amazing-project/`).
3. Run `npm run nuke`.

You'll now be able to import by doing `import { someComponent } from 'my-amazing-project/components'`, given that `someComponent` was added to `src/components/index.js` accordingly.

### Detaching from vauquita's Git (starts a new repository)

```sh
npx rimraf .git && git init
```

### Extra

Refer to [webpack's documentation](https://webpack.js.org/concepts/) to add file types (e.g. add support for `mp4` files) or customize building.
