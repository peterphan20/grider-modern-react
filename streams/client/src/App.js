import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import StreamCreate from "./components/streams/StreamCreate";
import StreamEdit from "./components/streams/StreamEdit";
import StreamDelete from "./components/streams/StreamDelete";
import StreamShow from "./components/streams/StreamShow";
import StreamList from "./components/streams/StreamList";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route path="streams/edit" exact component={StreamEdit} />
					<Route path="/streams/delete" exact component={StreamDelete} />
					<Route path="/streams/shows" exact component={StreamShow} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
