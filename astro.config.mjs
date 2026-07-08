// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://JCBA-planning-west.github.io',
    base: '/manual',
    integrations: [mdx()],
});