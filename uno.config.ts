import { defineConfig, presetWind4, transformerVariantGroup } from "unocss";
import { presetCatppuccin } from 'unocss-catppuccin';

export default defineConfig({
  presets: [
    presetWind4(),
    presetCatppuccin({
      prefix: false,
      defaultFlavour: "macchiato"
    })
  ],
  transformers: [
    transformerVariantGroup()
  ]
});
