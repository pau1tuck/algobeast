/* The async_hooks module is mainly used for building tools, diagnostics, and other utilities that need to keep track of asynchronous operations in Node.js.*/

import { createHook, executionAsyncId, triggerAsyncId as _triggerAsyncId, AsyncResource } from 'node:async_hooks';

// Create an async hook
const hook = createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    // Called when a class is constructed that has the possibility to trigger an asynchronous event
  },
  before(asyncId) {
    // Called before the callback of the asynchronous event is called
  },
  after(asyncId) {
    // Called after the callback of the asynchronous event has finished
  },
  destroy(asyncId) {
    // Called when the async resource is destroyed
  },
  promiseResolve(asyncId) {
    // Called when a promise is resolved
  }
});

// Enable the hook
hook.enable();

// Disable the hook
hook.disable();

// Get the current execution context ID
const eid = executionAsyncId();

// Get the ID of the context that created the current context
const tid = _triggerAsyncId();

// AsyncResource - a class for creating a new async resource and managing its lifecycle
class MyAsyncResource extends AsyncResource {
  constructor() {
    super('MyAsyncResource');
  }

  asyncMethod(callback) {
    this.runInAsyncScope(callback);
  }
}

const resource = new MyAsyncResource();
resource.asyncMethod(() => {
  // The callback runs within the async context created by MyAsyncResource
});
