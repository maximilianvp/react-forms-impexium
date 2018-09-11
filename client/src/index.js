import React from 'react'
import { render } from 'react-dom'

// Polyfills
import 'babel-polyfill'
import promisePolyfill from 'es6-promise'
promisePolyfill.polyfill()
require('whatwg-fetch')
import { shim } from 'promise.prototype.finally'
shim()

import { App } from './App'

const rootElement = document.getElementById('react-root')
render(<App />, rootElement)
