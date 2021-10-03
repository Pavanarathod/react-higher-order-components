import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/post" component={PostPage} />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
