# chdir anywhere

Ensure your script runs from anywhere by changing the cwd to the folder of the
main entry of your script.

## Usage

Say you have `example.js`:

```js
#!/usr/bin/env -S deno run --allow-write --allow-read

import { setCwd } from "https://deno.land/x/chdir_anywhere/mod.js";
setCwd();

await Deno.writeTextFile("example.txt", "This is an example");
```

Then after adding execute permissions with `chmod +x example.js` you can run it
from anywhere. It will always create `example.txt` right next to `example.js`,
whether you run it with `./example.js` or `./some/dir/example.js`
