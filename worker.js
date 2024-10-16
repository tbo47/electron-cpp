'use strict'

const EventEmitter = require('events').EventEmitter
const addon = require('bindings')('emit_from_cpp')

const emitter = new EventEmitter()

emitter.on('start', () => {
    postMessage('### START ...')
    console.log('### START ...')
})
emitter.on('data', (evt) => {
    postMessage(evt)
    console.log(evt);
})

emitter.on('end', () => {
    postMessage('### END ###')
    console.log('### END ###')
})

addon.callEmit(emitter.emit.bind(emitter))
