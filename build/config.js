const vue = require('rollup-plugin-vue2');
const buble = require('rollup-plugin-buble');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');
const pkg = require('../package.json');

const version = process.env.VERSION || pkg.version

const banner =
  '/*!\n' +
  ' * VUEFE.js v' + version + '\n' +
  ' * (c) 2014-' + new Date().getFullYear() + ' '+ pkg.author +'\n' +
  ' * Released under the MIT License.\n' +
  ' */'

const builds = {
  'default': {
    entry: 'src/index.js',
    dest: 'dist/Vuefe.js',
    format: 'umd',
  },
  'default.min': {
    entry: 'src/index.js',
    dest: 'dist/vuefe.min.js',
    format: 'umd',
  },
  'amd': {
    entry: 'src/index.js',
    dest: 'dist/vuefe-amd.js',
    format: 'amd',
  },
  'cjs': {
    entry: 'src/index.js',
    dest: 'dist/vuefe-cjs.js',
    format: 'cjs',
  },
  'umd': {
    entry: 'src/index.js',
    dest: 'dist/vuefe-umd.js',
    format: 'umd',
  },
  'iife': {
    entry: 'src/index.js',
    dest: 'dist/vuefe-iife.js',
    format: 'iife',
    banner,
  },
  'amd.min': {
    entry: 'src/index.js',
    dest: 'dist/vuefe-amd.min.js',
    format: 'amd',
  },
  'cjs.min': {
    entry: 'src/index.js',
    dest: 'dist/vuefe-cjs.min.js',
    format: 'cjs',
  },
  'umd.min': {
    entry: 'src/index.js',
    dest: 'dist/vuefe-umd.min.js',
    format: 'umd',
  },
  'iife.min': {
    entry: 'src/index.js',
    dest: 'dist/vuefe-iife.min.js',
    format: 'iife',
    banner,
  },
};

function genConfig (opts) {
  const config = {
    entry: 'src/index.js',
    dest: opts.dest,
    format: opts.format,
    banner: banner,
    moduleName: 'vuefe',
    useStrict: false,
    plugins: [
      replace({
        __VERSION__: version
      }),
      vue(),
      buble(),
      commonjs({
        include: [
          'node_modules/vue',
        ]
      }),
    ]
  }

  return config
}

exports.getAllBuilds = () => Object.keys(builds).map(name => genConfig(builds[name]))
