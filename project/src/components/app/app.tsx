import {AppRoute, AuthorizationStatus} from '../../const';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main/main-screen';
import FavoriteEmptyScreen from '../../pages/favorite-empty-screen/favorite-empty-screen';
//import Property from '../../pages/property/property';
import PropertyNotLogged from '../../pages/property-not-logged/property-not-logged';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';


function App(): JSX.Element {
  return (
    <BrowserRouter >
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Root}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.Favorite}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoriteEmptyScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Property}
          element={<PropertyNotLogged />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
