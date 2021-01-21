# Supabase/Svelte Kanban

A clone of Trello that uses Supabase as the storage system.

## [Live Demo](https://supabase-kanban.vercel.app/)

![Screenshot](https://github.com/joshnuss/supabase-kanban/blob/master/screenshot.png)

# Setup locally

1. Clone repo `gh repo clone joshnuss/supabase-kanban` and install dependencies `yarn start`
2. Setup the database on [supabase](https://supabase.io) use [`setup.sql`](https://github.com/joshnuss/supabase-kanban/blob/master/setup.sql)
3. Update the credentials in `.env.development`
4. Start development server with `yarn start`
5. Done!

## Available Scripts

### yarn start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### yarn test

Runs `jest` on all `*.test.js` files.

### yarn lint

Runs `eslint` on all files.

### yarn format

Formats all files according to rules defined in `.eslintrc.js`.

### yarn build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

### yarn deploy

Deploys the app to [vercel](https://vercel.com)
Your app is ready to be deployed!

# License

MIT
