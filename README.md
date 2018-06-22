# Bitcoin Dashboard
A web app that automatically keeps up-to-date with the latest price of Bitcoin. The prices are automatically updated every minute via websockets.

# Running Locally
## Requirements
The API requires [Ruby](http://usabilityetc.com/articles/ruby-on-mac-os-x-with-rvm/#installing-rvm-and-ruby) 2.5.1, [Rails](https://github.com/rails/rails#getting-started) 5.2.0 and [PostgreSQL](https://www.postgresql.org) 10.4 to run.

The client requires [Node.js](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu#step0thequickguidetldrtogetnodejsinstalledusingnvm) 8.11.3 and [Yarn](https://www.npmjs.com/package/yarn) 1.6.0.

If everything is setup correctly, you should be able to see the following:

```bash
$ ruby -v
ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin17]

$ rails -v
Rails 5.2.0

$ psql --version
psql (PostgreSQL) 10.4

$ node -v
v8.11.3

$ npm -v
6.1.0

$ yarn -v
1.6.0
```

## Server
Run the following commands from the [api](./api/) folder to install all server dependencies, create the database, run the migrations, seed the database with some sample data and start the server.

```bash
$ bundle
$ rails db:create
$ rails db:migrate
$ rails db:seed
$ rails s
```

## Client
In a separate Terminal window, run the following commands from the [client](./client/) folder to install all client dependencies and start the React server.

```bash
$ yarn
$ yarn start
```

# Built With
## Server
- Ruby on Rails
- PostgreSQL

## Client
- React
- Redux
- ActionCable
- Bootstrap

# License
Completely free. Read more on the [LICENSE](./LICENSE) file
