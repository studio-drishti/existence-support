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
          label: "Physiological Needs",
          autogenerate: { directory: "physiological" },
        },
        // {
        //   label: "Safety Needs",
        //   autogenerate: { directory: "safety" },
        // },
        // {
        //   label: "Belonging & Love Needs",
        //   autogenerate: { directory: "belonging" },
        // },
        {
          label: "Esteem Needs",
          autogenerate: { directory: "esteem" },
        },
        // {
        //   label: "Cognitive Needs",
        //   autogenerate: { directory: "cognitive" },
        // },
        // {
        //   label: "Aesthetic Needs",
        //   autogenerate: { directory: "aesthetic" },
        // },
        {
          label: "Self-Actualization",
          autogenerate: { directory: "self-actualization" },
        },
        // {
        //   label: "Transcendence",
        //   autogenerate: { directory: "transcendence" },
        // },
      ],
    }),
  ],
  redirects: {
    "/guides/feed-yourself": "/physiological/feed-yourself",
  },
});
