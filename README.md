
## Getting Started

```sh
> npm install
> npm start
```

### Set Environments

```sh
> cp .env.example .env
> vi .env
```

### Building

```sh
> npm run build
```

## Developing

- Remove local branches deleted on remote server
  ```sh
  > git fetch -p && for branch in `git branch -vv --no-color | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done
  ```
- Keep the linter and formatter rules
- Check unused, outdated states of dependencies : **`depcheck` `npm-check-updates`**

### Tech Stack

| Category            | Name           |
| ------------------- | -------------- |
| Language            | **JavaScript** |
| UI Framework        | **React**      |
| State Manager       | **Redux**      |
| Side Effect Manager | **Redux Saga** |
| Selector            | **Reselect**   |
| UI Component        | **Ant Design** |
| Authentication      | **JWT**        |
| Linter              | **ESLint**     |
| Formatter           | **Prettier**   |

## Project Structure

### Main Directory

```makefile
src
├── components # Layout, Shared, Custom Components
|  ├── Header
|  ├── PrivateRoute
|  └── Sider
├── containers # Components with a Redux store
|  ├── Board
|  ├── NotFound
|  └── SignIn
├── routes # Routes directory
├── utils # Util directory
├── App.js
├── global.reducer.js
├── global.selectors.js
└── index.js
```

### Board Directory

```makefile
Board
├── PostTable # Subcomponents
|  └── index.js
├── WritePostModal # Subcomponents
|  └── index.js
├── board.actions.js
├── board.api.js
├── board.constants.js
├── board.reducer.js
├── board.saga.js
├── board.selectors.js
└── index.js
```

