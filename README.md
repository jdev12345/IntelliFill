[![Deploy](https://intelli-fill-rho.vercel.app/logo.png)](https://intelli-fill-rho.vercel.app/)


## Installation

All you need to do is clone this repository
```
git clone https://github.com/jdev12345/IntelliFill.git
```

### Keep it up to date

Track this repo

```
git remote add upstream https://github.com/jdev12345/IntelliFill.git
```

Get the latest version and apply onto your stack

```
git fetch upstream
git merge upstream/master
```

## Running
Application has very few dependencies, so it’s most probably very easy to understand when you scan through the code, but there is at least few steps you should know

### Start front-end React application
Application is divided into two parts. One is pure React front-end, powered by `webpack-dev-server` in development mode.

To start this application run command below and open your app on `http://localhost:8080`

```javascript
cd intellifill
npm install
npm start
```

## Deployment
Application is deployed using Vercel
[Link](https://intelli-fill-rho.vercel.app/)
