<!-- بسم الله الرحمن الرحيم -->
# Images proccessing APIs app:

## /api?file=<imgName>&width=<width>&height<height>

### Method: `get` URL Queries: `file` and width and `height` the value of `width` and `height` is in pexles. `file` is the specific img that you want to see.

For Example: `http:localhost:3000/api?file=img1&width=400&height=200`

## Availabel Images Options:
   - img1
   - img2
   - img3
   - img4
   - img5


## Here's everything you want to know about:

- What do I need to begin the app?
- And What tools do you need to run this porject?

## Get Started:

### The first thing you need to do is to create a folder which is includes any folders and files inside it. (will be your root folder)
#### To make a folder type this code in your terminal:
```
 $ mkdir folder-name
```
### Then go inside him😉:
```
 $ cd folder-name
```

## We need to install these:

1- [TypeScript](https://www.typescriptlang.org/) => For solve problems in javascript.

1- [Prettier](https://prettier.io/)   => for formating your code.

2- [Eslint](https://eslint.org/)     => To made a clean code.

4- [Jasmine](https://jasmine.github.io/)    => For testing.

5- [Express](https://expressjs.com/)    => For Making a server.


## In your terminal follow these steps to install everything you need to start:

> Note: You can go to documentaion to install any of these tools

## INSTALL [TYPESCTIPT](https://www.typescriptlang.org/):
```
   $ npm init -y 
```
```
   $ npm i --save-dev typescript
```
```
   $ npm i --save-dev @types/node
```
```
   $ npm i --save-dev ts-node
```
```
   $ npx tsc --init    // config that file.
```
## Add this line in script at the `package.json` file, and run:
```
"script":{
   "build":"npx tsc"
}
```
```
   $ npm run build
```

## INSTALL [JASMINE](https://jasmine.github.io/):
```
   $ npm install --save-dev jasmine
```
```
   $ npm i jasmine-spec-reporter
```
```
   $ npm i --save-dev @types/jasmine
```
## Add this line in script at the `package.json` file, and run:
```
"script":{
   "build":"npx tsc",
   "jasmine": "jasmine"
}
```
```
   $ npx jasmine init
```

### Here's the structures of folders and files to be have.

```

   ------------------------------------ 
      ├── src
      │     ├──  tests
      │     │     ├── helpers
      │     │     │      └── reporter.ts
      │     │     └── indexSpec.ts
      │     └── index.ts
   ------------------------------------------------------------------------------------------

```

## Copy this code and paset it at the `reporter.ts` file, and save.
```

      import {DisplayProcessor, SpecReporter, StacktraceOption} from "jasmine-spec-reporter";
      import SuiteInfo = jasmine.SuiteInfo;

      class CustomProcessor extends DisplayProcessor {
         public displayJasmineStarted(info: SuiteInfo, log: string): string {
            return `${log}`;
         }
      }

      jasmine.getEnv().clearReporters();
      jasmine.getEnv().addReporter(new SpecReporter({
         spec: {
            displayStacktrace: StacktraceOption.NONE
         },
         customProcessors: [CustomProcessor],
      }));

```

## At the `tsconfig.json` file, do this:
```    
   {
      {
         "target": "es2016", 
         "lib": ["DOM"],  
         "module": "commonjs", 
         "rootDir": "./src",
         "outDir": "./build", 
         "esModuleInterop": true,
         "forceConsistentCasingInFileNames": true, 
         "strict": true, 
         "noImplicitAny": true,
         "skipLibCheck": true
      },
      "exclude": ["node_modules", "./dist", "spec"]
   }
```
```
   $ npm run jasmine
```

## INSTALL [PRETTIER](https://prettier.io/):
```
   $ npm install --save-dev prettier
```
```
   $ touch .prettierrc
```

## At the `.prettierrc` file, do this.

```
   {
      "semi": true,
      "singleQuote":true
   }
```

## Add this line in script at the `package.json` file, and run:
```
"script":{
   "build":"npx tsc",
   "jasmine": "jasmine",
   "prettier": "prettier --config .prettierrc src/**/*.js --write"
}
```
```
   $ npm run prettier
```

## INSTALL [ESLINT](https://eslint.org/):

```
   $ npm i --save-dev eslint
```

```
   $ npm i --save-dev eslint-config-prettier
```

```
   $ npm i --save-dev eslint-plugin-prettier
```

### Your script at the `package.json` file should like this:

```
   "script":{
      "build":"npx tsc",
      "jasmine": "jasmine",
      "prettier": "prettier --config .prettierrc src/**/*.js --write",
      "lint": "eslint 'index.js'"
   }
```

```
   $ npm init @eslint/config
```

```
   $ npx eslint index.ts , npm run lint
```
   
## INSTALL [EXPRESS](https://expressjs.com/):
```
   $ npm i express
```

```
   $ npm i --save-dev @types/express
```

```
   $ npm i --save-dev nodemon
```

### Your script at the `package.json` file should like this:

```
   "script":{
      "build":"npx tsc",
      "jasmine": "jasmine",
      "prettier": "prettier --config .prettierrc src/**/*.js --write",
      "lint": "eslint 'index.js'",
      "start":"nodemon src/index.ts"
   }
```
### And finaly run your server:
```
   $ npm run start
```

> Note: you should install [*`Sharp`*](https://www.npmjs.com/package/sharp), [*`Supertest`*](https://www.npmjs.com/package/supertest), too.

### I create this project for [Udacity](https://udacity.com) and this project is my task it gave it me to test me if I'ev been learned well, or not. And I ask my god to so.

**Developer**: *Ahmed Sayed*

**Email**: *EmbabyProgramming@gmail.com*


