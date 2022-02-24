This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Sequelize commands
- Useful commands:
````cmd
npm install --save-dev sequelize-cli
npx sequelize init
npx sequelize db:create
npx sequelize model:generate --name Proyecto --attributes nombre:string,rating:float
npx sequelize db:migrate
npx sequelize model:generate --name Usuario --attributes nombre:string,username:string,password:string
npx sequelize seed:generate --name data_inicial_usuarios
npx sequelize db:seed:all

npx sequelize model:generate --name Tecnologia --attributes nombre:string
npx sequelize model:generate --name ProductoXTecnologia --attributes idproducto:integer,idtecnologia:integer

npx sequelize seed:generate --name data_inicial_tecnologias
npx sequelize db:seed:all

````

## More
- See README.old.md
