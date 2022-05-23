import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import List from "./pages/list"
import Stats from "./pages/stats"
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient();
function App() {
  return (
      <QueryClientProvider client={queryClient} >
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/list" component={List} />
          <Route exact path="/stats" component={Stats} />

        </Switch>
      </Router>
    </div>
      </QueryClientProvider>
  );
}

export default App;
