// https://raw.githubusercontent.com/ianatha/experiment_io/main/index.ts

import { z } from "https://deno.land/x/zod@v3.16.1/mod.ts";
import zodToJsonSchema from "https://esm.sh/zod-to-json-schema@3.17.0";

function input(objSchema) {
  const schema = z.object(objSchema);
  return $recv(zodToJsonSchema(schema, "until_input"));
}

function number(...args) {
  return z.number(...args);
}

function string(...args) {
  return z.string(...args);
}

function object(...args) {
  return z.object(...args);
}

export default {
  input,
  number,
  string,
  object,
}
