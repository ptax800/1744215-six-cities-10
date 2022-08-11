import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main/main-screen';
import FavoriteEmptyScreen from '../../pages/favorite-empty-screen/favorite-empty-screen';
import Property from '../../pages/property/property';
import PropertyNotLogged from '../../pages/property-not-logged/property-not-logged';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types/offer';

type AppScreenProps = {
  offers: Offer[]
}


function App({ offers }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter >
      <Routes>
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Main}
          element={<MainScreen offers={offers} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
            <FavoriteEmptyScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={<Property offers={offers} />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
