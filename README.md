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

### Dependencies

- [Ant Design](https://ant.design/)
- [React Router](https://reactrouter.com/)
- [react-i18next](https://react.i18next.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [styled-components](https://styled-components.com/)

### Environment variables

Create `./.env.local` file to modify environment variables locally, this file will take precedence over `./.env` which is intended for production.

### Renaming

1. Change project name in `./package.json` file.
2. Replace all occurrences of `vauquita` to new name in all `.js` and `.jsx` files.
3. Run `npm run nuke`.

You'll now be able to import by doing `import { someComponent } from 'my-amazing-project/components'`, given that `someComponent` was added to `src/components/index.js` accordingly.
