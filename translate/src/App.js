import React from "react";
import UserCreate from "./components/UserCreate";
import LanguageSelector from "./components/LanguageSelector";
import { LanguageStore } from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageSelector />
					<ColorContext.Provider value="red">
						<UserCreate />
					</ColorContext.Provider>
				</LanguageStore>
			</div>
		);
	}
}

export default App;
