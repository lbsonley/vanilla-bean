# Vanilla Bean - Frameworkless Single Page Applications

Vanilla bean is here to make it easy to start building a single page application without the need for a framework like Angular, React or Vue.

## Get Started

To get started, clone this repository, remove the git history, re-init git, install dependencies, initialize husky and start building your awesome app.

```
mkdir my-app

cd my-app

git clone https://github.com/lbsonley/vanilla-bean.git .

rm -rf .git

git init

npm i

husky
```

## NPM Scripts

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

* Routing via [page.js]()
* Templating via [hogan.js]()
* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
* Prettier via [prettier]()
* Precommit hooks via [husky]

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
