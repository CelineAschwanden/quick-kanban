# Simple Kanban

A [Trello](https://trello.com) clone using [Supabase](https://supabase.io) as backend.<br>
Made with Svelte and Tinro router.<br>
Based on [svelte-kanban](https://github.com/supabase-community/svelte-kanban)<br><br>
Added Tinro outside of node modules and updated ts config as in this [pull request](https://github.com/AlexxNB/tinro/pull/121) by Sanshain<br><br>

![Screenshot](./Screenshot.png)<br><br>

# Setup locally
1. Install dependencies with `pnpm install`
2. Setup the database on [supabase](https://supabase.io) and run the commands in [`setup.sql`](https://github.com/supabase-community/supabase-kanban/blob/main/setup.sql)
3. Update the credentials in `.env`
4. Start development server with `pnpm dev`<br><br>

## Available Scripts

### pnpm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### pnpm test

Runs `vitest` on all `*.test.js` files.

### pnpm lint

Runs `eslint` on all files.

### pnpm format

Formats all files according to rules defined in `.eslintrc.js`.

### pnpm build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

### pnpm deploy

Deploys the app to [vercel](https://vercel.com)<br><br>

# License

MIT
