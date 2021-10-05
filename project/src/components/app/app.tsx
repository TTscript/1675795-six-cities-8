import MainPage from '../main-page/main-page';
import { AppScreenProps } from './types';

function App({offersCount}: AppScreenProps): JSX.Element {
  return <MainPage offersCount={offersCount}/>;
}

export default App;
