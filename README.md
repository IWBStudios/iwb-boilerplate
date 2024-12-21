<!-- <p align="center">
    <a href="https://github.com/alenvalek/fivem-vuejs-boilerplate">
        <img src="https://i.ibb.co/NrJDyC2/Five-M-Vue-JS-Boilerplate.png" alt="FiveM VueJS Boilerplate"/>
    </a>
</p> -->

<h1 align="center">FiveM Vue 3 and Lua Boilerplate</h1>
<h3 align="center">A simple and extendable Vue 3 (JavaScript) boilerplate</h3>

<div align="center">
    <img alt="GitHub package.json version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/v/iwbstudios/iwb-boilerplate/main?filename=web%2Fpackage.json">
    <img alt="GitHub" src="https://img.shields.io/github/license/iwbstudios/iwb-boilerplate">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/iwbstudios/iwb-boilerplate">
    <img alt="Maintenance" src="https://img.shields.io/maintenance/yes/2024">
</div>
<div  align="center">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/iwbstudios/iwb-boilerplate?style=social">
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/iwbstudios/iwb-boilerplate?style=social">
</div>

## Key features

- **Pinia state management** pre-implemented with examples of usage
- **Fetch** pre-implemented with examples of usage
- **Formatting & Locales** pre-implemented with examples of usage
- Additional **Utils** pre-implemented for ease of use
- Additional **Config** specifically for **NUI** pre-implemented with examples of usage
- Some **client code** pre-implemented with examples of usage
- **Watch script** pre-implemented for building out the UI for in-game development.

## Requirements

- [Node > v18.20.5 (LTS)](https://nodejs.org/en/)
- [Pnpm](https://pnpm.io/installation#using-npm) (Preferred but not required)

## Installation

Download the zip file or clone the repository:

```bash
git clone https://github.com/iwbstudios/iwb-boilerplate.git
```

Open the project in a terminal of your choice and change the working directory into the web folder:

```bash
cd web
```

Install the required node packages

```bash
# pnpm
pnpm i

# npm
npm install
```

## Development tips

Run the following command to develop using a live server ( in browser )

```sh
# pnpm
pnpm dev

# npm
npm run dev
```

Run the following command to build out the **production ready** build

```sh
# pnpm
pnpm build

# npm
npm run build
```

Run the following command to build out the project for **developing in-game** **[RECOMMENDED]**

```sh
# pnpm
pnpm watch

# npm
npm run watch
```

## Technologies Used

- [Lua](https://www.lua.org)
- [VueJS](https://vuejs.org)
- [Pinia](https://pinia.vuejs.org/)
