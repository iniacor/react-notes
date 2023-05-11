import './App.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Workspace from './components/workspace/Workspace';

const App = () => {
  return (
    <div className='main-wrapper'>
      <Header />
      <div className='content-wrapper'>
        <Sidebar />
        <Workspace />
      </div>
    </div>
  );
};

export default App;
