import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/Main/main-screen';
import FavoriteEmptyScreen from '../../pages/Favorite-empty-screen/favorite-empty-screen';
import Property from '../../pages/Property/Property';
import PropertyNotLogged from '../../pages/property-not-logged/property-not-logged';
function App(): JSX.Element {
  return (
    <>
      <LoginScreen />
      <MainScreen />
      <FavoriteEmptyScreen />
      <Property />
      <PropertyNotLogged />
    </>
  );
}

export default App;
