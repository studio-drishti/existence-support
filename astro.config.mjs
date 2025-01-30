// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Existence Support",
      social: {
        github: "https://github.com/jnlsn/existence-support",
        blueSky: "https://bsky.app/profile/existence.support",
        youtube: "https://www.youtube.com/@existence.support",
      },
      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "Manifesto", slug: "manifesto" },
            { label: "Unfluencer Pact", slug: "unfluence" },
          ],
        },
        {
          label: "Guides",
          items: ["guides/feed-yourself"],
        },
      ],
    }),
  ],
});
