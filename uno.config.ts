import { defineConfig, presetWind4, transformerVariantGroup } from "unocss";

export default defineConfig({
  presets: [
    presetWind4()
  ],
  transformers: [
    transformerVariantGroup()
  ]
});
