# node-typescript-basic-REST-API-example

# Remember only two keywords `Casting` & `Type`

# Set up Project

### Terminal Commands for setting up

```bash
tsc --init
npm init
npm i --save express body-parser
npm install --save-dev @types/node
npm install --save-dev @types/express
```

- almost all javascript libraries support `ts`
- `npm i --save-dev @types/${library_name}`
- some libraries can naturally be parsed into `ts` so don't need to install `@types/${library_name}` for every case.
- But for extra typescript safety, it's recommended that you use `@types/${library_name}`

### tsconfig.json

- `"target": "es6", /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */`
- `"outDir": "./dist", /* Redirect output structure to the directory. */`
- `"strict": true, /* Enable all strict type-checking options. */`
- `"moduleResolution": "node", /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */`
- `"rootDir": "./src", /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */`

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./dist",                        /* Redirect output structure to the directory. */
    "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true,                     /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }
}
```

### Package.json

- `"main": "./dist/app.js",`

```json
{
	"name": "typescript_node",
	"version": "1.0.0",
	"description": "",
	"main": "./dist/app.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"start": "node dist/app.js"
	},
	"author": "",
	"license": "ISC",
	"dependencies": {
		"body-parser": "^1.19.0",
		"express": "^4.17.1"
	},
	"devDependencies": {
		"@types/body-parser": "^1.19.0",
		"@types/express": "^4.17.7",
		"@types/node": "^14.0.27",
		"nodemon": "^2.0.4"
	}
}
```

### Project structure

- `/dist`, javascript code.
- `/node_modules`.
- `/src` , development code written in typescript.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/50c04e61-3137-4b0d-8d86-f4ef6f3e8b03/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/50c04e61-3137-4b0d-8d86-f4ef6f3e8b03/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af58fe8e-0bf4-4fd3-a514-d70f8b8391d9/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af58fe8e-0bf4-4fd3-a514-d70f8b8391d9/Untitled.png)

### How it works

- Typescript is compiled to javascript code to run the application

### You can use `ESModule`

```tsx
import express from 'express'; //in typescript you can use this

const app = express();

app.listen({ port: 3000 });
```

```tsx
import express from 'express'; //in typescript you can use this

const app = express();

app.listen(3000);
```

# Source Code

- app.js

```tsx
//Learning - In typescript you can use esmodule syntax. The only difference is that you don't acutally need to add `extension`
import express from 'express';
//const express = require('express');

import bodyParser from 'body-parser';

import todosRoutes from './routes/todos';
//const todosRoutes = require('./routes/todos);

const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);

app.listen(3000);
//app.listen({3000});
```

- /routes/todos.ts

```tsx
//Learning - Note that all syntax is possible.

// const express = require('express');
import { Router } from 'express';

import { Todo } from '../models/todo';

//Learning - define Type Alias, if we already know the type.
type RequestBody = { text: string };
type RequestPararms = { todoId: string };

//Learning - if you set `const`, you can only modify array.
//Learning - but if you set `let`, you can override entire array.
let todos: Todo[] = [];

// const router = express.Router()
const router: Router = Router();

router.get('/', (req, res, next) => {
	res.status(200).json({ todos: todos });
});

router.post('/todo', (req, res, next) => {
	//Learning, Cast it to a certain type for getting warning sign.
	//Learning, Remember that we use typescript to avoid mistakes.
	const body: RequestBody = req.body as RequestBody;

	const newTodo: Todo = {
		id: new Date().toISOString(),
		text: body.text
	};
	todos.push(newTodo);
	res.status(201).json({ message: 'Added Todo', todo: newTodo, todos: todos });
});

router.put('/todo:todoId', (req, res, next) => {
	const params: RequestPararms = req.params as RequestPararms; //string
	const body: RequestBody = req.body as RequestBody;
	//index는 모두 string type이다.
	const todoIndex: number = todos.findIndex((todoItem) => todoItem.id === params.todoId);
	//0보다 크면 element가 있다는 뜻이다.
	if (todoIndex > 0) {
		todos[todoIndex] = {
			id: todos[todoIndex].id,
			text: body.text
		};
		return res.status(200).json({ message: 'Updated todo', todos });
	}
	res.status(404).json({ message: 'Could not find todo for this id.' });
});

router.delete('/todo/:todoId', (req, res, next) => {
	const params: RequestPararms = req.params as RequestPararms;
	todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
	res.status(200).json({ message: 'Deleted todo', todos: todos });
});

//module.exports = router;
export default router;
```

- /models/todo.ts

```tsx
//named export
export interface Todo {
	id: string;
	text: string;
}
```

### Use Type Casting

❗️We use typescript to avoid mistakes.

# Module Resources

Attached, you find the code snapshots for this module.

In addition, you can find a more complex Node TypeScript project/ project setup here: [https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter](https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter)

This may serve as an additional inspiration on how you can build Node TypeScript projects.