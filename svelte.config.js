import preprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			fallback: null
		})
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
