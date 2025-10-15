## Definitions
- biome is the standart library for JavaScript and TypeScript format and lint code (`biome.json`)
- react-router is the standart web framework for routing in React applications
- shadcn-ui is the standart UI library for React applications inside react-router and UI kits
- nest.js is the standart framework for building server-side applications

## Dev environment tips
- Use `pnpm dlx turbo run where <project_name>` to jump to a package instead of scanning with `ls`
- Run `pnpm install --filter <project_name>` to add the package to your workspace so Vite, ESLint, and TypeScript can see it
- Check the name field inside each package's package.json to confirm the right name—skip the top-level one

## Testing instructions
- Find the CI plan in the .github/workflows folder
- Run `pnpm turbo run test --filter <project_name>` to run every check defined for that package
- From the package root you can just call `pnpm test`. The commit should pass all tests before you merge
- Fix any test or type errors until the whole suite is green
- After moving files or changing imports, run `pnpm lint --filter <project_name>` to be sure Biome rules still pass
- Add or update tests for the code you change, even if nobody asked
- minimal coverage for all packages 75%
- minimal coverage for backend apps and packages is 95%

## Architecture rules
- Analyze the feature technical requirements and create architecture desicion inside adr/ folder with a name `001-<feature_name>.md` where 001 is the next available number. Do not write any code until the architecture decision is done. Before finish analyze the architecture decision with two different approaches and compare them after that choose the best one. Do that even if nobody asked
- After you create a feature based on architecture decision and product and project requirements from human create inside folder changelog/ a file with a name `001-<feature_name>.md` where 001 is the same as the architecture decision file number
