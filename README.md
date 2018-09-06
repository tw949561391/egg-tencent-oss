# egg-tencent-oss

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-tencent-oss.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-tencent-oss
[travis-image]: https://img.shields.io/travis/eggjs/egg-tencent-oss.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-tencent-oss
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-tencent-oss.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-tencent-oss?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-tencent-oss.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-tencent-oss
[snyk-image]: https://snyk.io/test/npm/egg-tencent-oss/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-tencent-oss
[download-image]: https://img.shields.io/npm/dm/egg-tencent-oss.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-tencent-oss

<!--
Description here.
-->

## Install

```bash
$ npm i egg-tencent-oss --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.tencentOss = {
  enable: true,
  package: 'egg-tencent-oss',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.tencentOss = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
