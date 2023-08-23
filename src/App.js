import MainPage from './components/category-page/categories.components';
import NavBar from './components/navigation-bar/navigation-bar-components';
import RedirectSignUp from './components/sign-up-page/redirect-signup/signup-redirect.component';
import SignUpForm from './components/sign-up-page/sign-up-form/sign-up-form.component';
import { Route, Routes} from 'react-router-dom';
import './app.styles.scss';

const Shop = () =>{
  return(
    <div>
      HELLO WORLD
    </div>
  )
}
const App = () => {
  return (
   <div>
      <NavBar/>
    <Routes>
      <Route index element={<MainPage/>} />
      <Route path='shop' element={<Shop/>} />
     <Route path='sign-up' element = {<SignUpForm/>} />
     <Route path='thankYouForSigningUpWithUs' element = {<RedirectSignUp/>} />
    </Routes>

   </div>
  );
}

export default App;
