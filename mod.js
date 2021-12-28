import {
  dirname,
  fromFileUrl,
} from "https://deno.land/std@0.119.0/path/mod.ts";

export function setCwd(importMeta = Deno.mainModule) {
  const scriptPath = dirname(fromFileUrl(importMeta));
  Deno.chdir(scriptPath);
}
