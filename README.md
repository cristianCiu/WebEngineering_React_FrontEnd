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

There are mainly two components in React:
Functional Components also known as Stateless component
Class Component also known as Stateful component
So why to use functional components insted of class component?
Benefits you get by using functional components in React:
1.Functional component are much easier to read and test because they are plain JavaScript functions without state or lifecycle-hooks
2.It has less code which makes it more readable
3.It will get easier to separate container and presentational components because you need to think more about your component’s state if you don’t have access to setState() in your component
Conclusion:
If you are writing a presentational component which doesn’t have its own state or needs to access a lifecycle hook,use functional component as much as possible. For state management you can use class component.
