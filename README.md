# React + TypeScript + Vite

# Vite React Project Setup

## Live Link
[Visit the Live Project](https://nft-marketplace-chi-ashen.vercel.app/)

## Prerequisites
Ensure you have the following installed before proceeding:
- [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)
- [Git](https://git-scm.com/)
- A package manager (npm, yarn, or pnpm)

## Installation Steps

### 1. Clone the Repository
```sh
git clone <repository_url>
cd <project_folder>
```

### 2. Install Dependencies
Using npm:
```sh
npm install
```
Using yarn:
```sh
yarn install
```
Using pnpm:
```sh
pnpm install
```

### 3. Start the Development Server
Using npm:
```sh
npm run dev
```
Using yarn:
```sh
yarn dev
```
Using pnpm:
```sh
pnpm dev
```

The development server will start, and you can access the app at:
```
http://localhost:5173/
```

## Building for Production
To create an optimized production build, run:
```sh
npm run build
```
OR
```sh
yarn build
```
OR
```sh
pnpm build
```

The production-ready files will be located in the `dist/` folder.

## Running the Production Build Locally
After building the project, you can preview it locally using:
```sh
npm run preview
```
OR
```sh
yarn preview
```
OR
```sh
pnpm preview
```

This will serve the built app at `http://localhost:4173/`.

## Deployment
The project is deployed on [Vercel](https://vercel.com/) and can be accessed at:
[https://nft-marketplace-chi-ashen.vercel.app/](https://nft-marketplace-chi-ashen.vercel.app/)

To deploy on Vercel yourself:
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Run the deployment command:
   ```sh
   vercel
   ```
3. Follow the instructions to link the project and deploy.

## Additional Notes
- Modify `vite.config.js` if needed to adjust configurations.
- Ensure `.env` files are set up correctly if the project relies on environment variables.

## License
This project is licensed under [MIT License](LICENSE).


    ...react.configs['jsx-runtime'].rules,
  },
})
```
