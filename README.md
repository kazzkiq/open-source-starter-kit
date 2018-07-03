<p align="center">
  <h1>Open Source Starter Kit</h1>
  <br>
  Easily create JavaScript open-source projects that works on browsers, Node.js and bundlers (e.g. Webpack).
</p>

## How to use

First create a repository for your lib. After that you should clone this starter kit **without** the `.git` folder (so it don't mess with your repo).

You can do it manually by cloning this repo on another folder, deleting the `.git` folder and copying the remaining files to your project, or you can simply use [degit](https://github.com/Rich-Harris/degit) to do this job faster:

```
degit kazzkiq/open-source-starter-kit
```

### Commands

To watch files and compile while in dev:

```
npm run dev
```

To compile for production:

```
npm run build
```

To run local tests:

```
npm test
```

### Tool Used

This project uses Rollup as module bundler, Buble for simple basic ES6+ to ES5 transpiling, Mocha and Chai for testing and Uglify for code compression.

### Publising to npm

In order to publish a package, you can run:

```
npm publish
```

Always remember to increase your package version before publishing a change and remember to use [SemVer](https://semver.org/) system for your projects.


