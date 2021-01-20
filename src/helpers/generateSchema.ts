import { printSchema } from "graphql";
import { writeFile } from "fs";
import { join } from "path";
import { schema } from "../schema";

(async () => {
  const outputPath = join(__dirname, "/../generated/schema.graphql");
  const sdl = printSchema(schema);
  await writeFile(outputPath, sdl, (err) => {
    if (err) {
      console.log(`error occurred while generating schema.graphql`, err);
    } else {
      console.log(`Successfully generated schema.graphql at ${outputPath}`);
    }
  });
})();
