import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";


const Main = () => {
	return (
		<div>
			Router Test
			<Switch>
				<Suspense fallback="Loading">
					<Route exact path="/">
						<Redirect to="en"></Redirect>
					</Route>
					<Route
						path="/:lang"
						component={React.lazy(() => import("../Core/Layout"))}
					></Route>
				</Suspense>
			</Switch>
		</div>
	);
};
export default Main;