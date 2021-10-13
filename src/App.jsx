import {Route, Switch} from 'react-router-dom';
import {homepageRoutesData} from "./data";
import React from "react";
import Navbar from "./components/common/Navbar";

function App() {
  return (
      <div className={"main-container"}>
          <Navbar data={homepageRoutesData}/>
          <Switch>
              {
                  // Filter to get routes that have a component, then render them
                  homepageRoutesData.filter(x => x.component).map(x =>
                      <Route exact path={`/${x.route}`} component={x.component} key={x.route}/>
                  )
              }
          </Switch>
      </div>
  );
}

export default App;
