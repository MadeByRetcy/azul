<p align="center">
<img 
    src="https://azul.msharf.in/icon.webp" 
    style="width: 75px; height: 75px;"
    > 
</p>

<h1 align="center">Azul</h1>
<p align="center">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/madebyretcy/azul?logo=github&label=Latest%20commit">
    <img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues/madebyretcy/azul?logo=github&label=Issues&color=blue">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/madebyretcy/azul?logo=github&label=Contributors&color=gold">
</p>
<p align="center"><i>Modern & Moroccan inspired icons</i></p>

>
> [!WARNING]
> This project is in **BETA stages as of early 2026**, oddities and issues are to be expected as we iron them out. 

>
> [!IMPORTANT]
> 1. If you want to suggest new icons or give feedback, open an issue and we'll discuss it!
> 2. **Instructions on how to use/install the icon pack are [here](https://azul.msharf.in/docs).**

### 📑 Introduction

Azul, spelled _/aˈzul/_ (i.e Hello in the Amazigh Language) is a modern and sleek icon pack using elements of Moroccan and Islamic architecture with the goal of having a unique and culturally close UI/UX for Moroccan users in apps, websites, manuals...

### ⚙ Project structure & Contributing
The project is a monorepo, with plenty of room to expand to in the immediate future:
| App/Package | Description |
|----------|------------------|
| [web](https://github.com/MadeByRetcy/azul/tree/stable/apps/web) | Contains the main website of the project (SvelteKit + TailwindCSS). |
| [@azul/icons](https://github.com/MadeByRetcy/azul/tree/stable/packages/icons) | Contains the line icons (.svg) and serving logic (Typescript). |

To contribute to the website or any non-icon asset, please follow these basic rules:
- Try your best to **account for edge cases** in code, if you can't you can try to extensively test your code to find those edge cases.
- Speaking of edge cases, **make sure you test all of you code**, unit testing is primarily used.
- Keep variable, function and type names **simple and clear, and representative of their purpose.**
- Commit messages **should respect the [Conventional Commits Specification.](https://www.conventionalcommits.org/en/v1.0.0/)**
- Apply the **DRY (Don't repeat yourself), SOLID (Methods should perform one action) & KISS (Keep it short and simple)** Paradigms
- **Use [atomic commits](https://www.aleksandrhovhannisyan.com/blog/atomic-git-commits)** when possible to avoid unnecessary issues.         
- It's preferable if you use **4 Tabs indentation** and **adhere to common programming conventions** (Primarily JS/TS, CSS, HTML...) and **format your code appropriately** with [Prettier.](https://prettier.io/)
- For projects that use TypeScript, **use types whenever possible!**
  
The website is hosted on Cloudflare Workers.

To contribute or suggest an icon:
- Always use a `2px` stroke, and a black color.
- You're free to use any vector editor you desire, the primary tool is Inkscape.
- Always icons that are rounded playful and have ties to Moroccan culture, at the moment we're not planning to create any non-Morocco related icons but that may change in the future.
- To keep with consistency, icon SVGs should `29px x 29px`

### 🪪 Licensing & Legal
The project is split into two licenses:
- **Non-icon assets:** Apache 2.0 License
- **Icon assets & Logo:** CC BY 4.0 License

##### The code and assets of this project are a property of Made by Retcy and contributors.
