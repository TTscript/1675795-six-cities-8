import { Switch, Route, BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import { Point } from '../../types/types';
import { AppScreenProps } from '../../types/types';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import MainPage from '../main-page/main-page';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import RoomPage from '../room-page/room-page';
import { AppRoute } from '../../const';
import { MainMapSize } from '../../const';
import { RoomMapSize } from '../../const';
import { AuthorizationStatus } from '../../const';

function App({offersCount, offers, city, points}: AppScreenProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Point | null>(
    null,
  );

  const onListItemHover = (listItemName: string) => {
    const currentPoint = points.find((point) => point.title === listItemName);

    if (currentPoint === undefined) {
      return currentPoint === null;
    }

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
            height={MainMapSize.heigth}
            width={MainMapSize.width}
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
          <RoomPage
            city={city}
            points={points}
            selectedPoint={selectedPoint}
            height={RoomMapSize.heigth}
            width={RoomMapSize.width}
            offersCount={offersCount}
            offers={offers}
            onListItemHover={onListItemHover}
          />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
