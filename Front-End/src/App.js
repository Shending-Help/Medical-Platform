import NavLayout from './layout/NavLayout'
import AsideLayout from './layout/AsideLayout'
import MainLayout from './layout/MainLayout'
import { AUTH } from './auth/authTest'

import './App.css';

function App() {
  return (
    <div className="App container">
      <NavLayout className="NavLayout" auth={AUTH}></NavLayout>
      <AsideLayout className="SideLayout" auth={AUTH}></AsideLayout>
      <MainLayout className="MainLayout"></MainLayout>
    </div>
  );
}

export default App;
