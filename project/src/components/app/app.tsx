import { Switch, Route, BrowserRouter} from 'react-router-dom';
import { Point, AppScreenProps } from '../../types/types';
import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import MainPage from '../main-page/main-page';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import RoomPage from '../room-page/room-page';
import { useState } from 'react';

function App({offersCount, offers, city, points}: AppScreenProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined,
  );

  const onListItemHover = (listItemName: string) => {
    const currentPoint = points.find((point) => point.title === listItemName);

    setSelectedPoint(currentPoint);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            offersCount={offersCount}
            offers={offers}
            city={city}
            points={points}
            selectedPoint={selectedPoint}
            onListItemHover={onListItemHover}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesPage offers={offers}/>}
          authorizationStatus={AuthorizationStatus.Auth}
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
