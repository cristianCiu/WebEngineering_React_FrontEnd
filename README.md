# WebEngineering_React_FrontEnd

You can find the hosted version here:
https://webengineering-react-frontend.hostman.site/

Techstack:
depcheck to track react npm dependencies
chart.js to display react charts
react-chartjs-2 to form GraphQL data into chartJS
apollo as a GraphQL client

Notes:
We will fetch the API Data in the componentDidMount() function.
componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().

componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.
