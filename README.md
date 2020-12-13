# WebEngineering_React_FrontEnd

This is the Frontend for the WebEngineering group project at the FH Campus Wien.

> You can find the hosted version here:
> https://webengineering-react-frontend.hostman.site/

### Backend:

> https://github.com/JamHaven/CoronaMiddleware

## Techstack:

- **[depcheck](https://www.npmjs.com/package/depcheck)** to track react npm dependencies
- **[chart.js](https://www.chartjs.org/)** to display react charts
- **[plotly](https://plotly.com/javascript/react)** also for advanced charts
- **[react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)** as a wrapper for chart.js
- **[graphql2chartjs](https://github.com/hasura/graphql2chartjs)** to form GraphQL data into chartJS
- **[apollo](https://www.npmjs.com/package/@apollo/client)** as a GraphQL client

## Notes:

- Important dependency lock: **"core-js": "^2.6.5"**. Else, there is the error _"Module not found: Error: Can't resolve 'core-js/modules/web.dom.iterable'"_

- Since introducing Plotly the React App needs more space, so an memory error occured. For that, the start script was adapted with the parameter **--max_old_space_size=4096**, which was added to **start** and **build** script in _package.json_.

## Guide

> npm install

> npm start

## Contributors

[![](https://github.com/cristianCiu.png?size=50)](https://github.com/cristianCiu)
[![](https://github.com/JamHaven.png?size=50)](https://github.com/JamHaven)
<a href="https://github.com/markusprand"><img src="https://avatars1.githubusercontent.com/u/58184230?s=50&v=4" width="50"></a>
