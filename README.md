This repository is configured to have a `"someDynamicValues": [ { "runtime": "node log.js" } ]` namedInput for build tasks. Looks like Nx Daemon ignores this input.

To reproduce the issue:
1. Make sure `tasksRunnerOptions.default.options.useDaemonProcess` in nx.json is set to `false`
2. Run `nx reset && nx build myapp && MY_VAR=123 nx build myapp`
3. Notice that there're no cache hits and `console.log`s in build outputs are different (`MY_VAR IS  undefined` and `MY_VAR IS  123`)
4. Set `tasksRunnerOptions.default.options.useDaemonProcess` to `true`
5. Run command from the step 2 again
6. Notice the cache hit for the second run. That's not expected.