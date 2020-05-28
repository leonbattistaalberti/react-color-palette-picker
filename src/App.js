import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";

class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => (
              <PaletteList palettes={seedColors} {...routerProps} />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={(routerProps) => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routerProps.match.params.id)
                )}
              />
            )}
          />
          <Route
            exact
            path="/palette/:paletteID/:colorID"
            render={() => <h1>Single Color Page</h1>}
          />
          {/* <Palette palette={generatePalette(seedColors[4])} /> */}
        </Switch>
      </div>
    );
  }
}
export default App;
