import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import Page404 from '../page-404/page-404';
import { AppScreenProps } from './types';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';

function App({offersCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            offersCount={offersCount}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesPage />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <RoomPage />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
