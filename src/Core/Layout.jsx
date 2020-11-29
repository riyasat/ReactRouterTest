import React, { Suspense, useEffect } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

const Layout = () => {
	const { url, path } = useRouteMatch();
	const About = React.lazy(() => import("../Views/About"));
	const Dashboard = React.lazy(() => import("../Views/Dashboard"));

	useEffect(() => {
		console.log("Layout Mounted");
		return () => {
			console.log("Un Mounted");
		};
	});
	return (
		<div>
			This is Router
			<Switch>
				<Route exact path={`${path}`}>
					<Redirect to={`${url}/about`} />
				</Route>
				{/* <Suspense fallback="Loading...">
					<Route path={`${path}/about`} component={About} />
				</Suspense>

				<Suspense fallback="Loading...">
					<Route path={`${path}/dashboard`} component={Dashboard} />
				</Suspense> */}
				<Route path={`${path}/about`} component={About} />
				<Route path={`${path}/dashboard`} component={Dashboard} />
			</Switch>
		</div>
	);
};
export default Layout;
