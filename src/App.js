import MainPage from './components/category-page/categories.components';
import NavBar from './components/navigation-bar/navigation-bar-components';
import SignIn from './components/sign-in-with-google/sign-in-with-google.component';
import SignUpForm from './sign-up-form/sign-up-form.component';
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
     <Route path='sign-in' element={<SignIn/>} />
     <Route path='sign-up' element = {<SignUpForm/>} />
    </Routes>

   </div>
  );
}

export default App;
