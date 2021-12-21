import Navbar from "./UI/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import { uiActions } from "./store/ui-slice";
import Notification from "./UI/Notification";

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    setTimeout(() => {
      dispatch(uiActions.hideNotification());
    }, 3000);
  }, [notification, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" exact component={Favorites} />
        <Route path="*">
          <Redirect to="/" />
        </Route>

      </Switch>
      <Footer />
    </>
  );
}

export default App;