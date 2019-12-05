# Contributing
You can see KPN Style as an open source project inside KPN. Anyone can contribute to KPN Style.

Find us on GitHub: [https://github.com/kpn/kpn-style](https://github.com/kpn/kpn-style)

---

## Development environment
The portal with documentation is also recommended as the development environment for KPN Style; with the portal you can test code changes in your browser.

### Clone repository
We recommend to use SSH to access the Git repository.

### Install dependencies
Open a terminal/console window and make sure you are in the folder `kpn-style`. Enter the following command:

```bash
npm install
```

### Start development server
```bash
npm start
```

Open the url http://localhost:3000 to see the portal in your browser. The portal will automatically reload after every code change (through saving a file).

### Create pull request
Make sure to make your changes on a branch off of `develop`. When you're ready and wish to submit your changes to be merged into the project, create a pull request from your branch back into `develop`. Your branch names should follow the Git Flow model, and thus start with `feature/`, `hotfix/`, or `release/`.

---

## Folder structure
The `packages` and `portal` folders are the main folders for this project. The `packages` folder consists of style packages written in Sass. The `portal` folder contains a React application.

    .
    ├── portal
    |   ├── assets
    |   |   └── ... 
    ├── ...
    ├── packages
    |       ├── base
    |       ├── component
    |       ├── layout
    |       └── ...    
    └── ...

---

## Process for contribution
Because KPN Style works together with KPN UX Lab you should validate your work against their designs.

### Issue tracking
Before you start with your contribution check first if there is already an issue in our tracker. If not, you can create a new story. Assign the story to yourself and keep it up to date.

### Git
Use only the main repository to contribute to KPN Style. Never use an alternative repository. You can find the main repository on GitHub. Always branch from develop. Make sure to follow the Git flow branching model. (e.g. `feature/my-feature`) When you are done, create a pull request. Close your remote branch when it is merged into develop.

### Coding conventions
Read the [coding conventions](/getting-started/coding-conventions) to become familiar with the guidelines for structural quality.
