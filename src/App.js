import MainPage from './components/category-page/categories.components';
import NavBar from './components/navigation-bar/navigation-bar-components';
import RedirectSignUp from './components/sign-up-page/redirect-signup/signup-redirect.component';
import SignUpForm from './components/sign-up-page/sign-up-form/sign-up-form.component';
import SignInPage from './components/sign-in-page/sign-in';
import Shop from './components/shop/shop.components';
import { Route, Routes} from 'react-router-dom';
import './app.styles.scss';

const App = () => {
  return (
   <div>
      <NavBar/>
    <Routes>
      <Route index element={<MainPage/>} />
      <Route path='shop' element={<Shop/>} />
      <Route path='sign-in' element ={<SignInPage/>} />
      <Route path='sign-up' element = {<SignUpForm/>} />
     <Route path='thank-you-for-signing-up-with-us' element = {<RedirectSignUp/>} />
    </Routes>

   </div>
  );
}

export default App;
