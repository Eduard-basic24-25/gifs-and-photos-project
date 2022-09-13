import './~style.scss'

import { NavTabs } from './components/NavTabs/index'
import { SearchComponent } from './components/SearchComponent/index'
import { Cards } from './components/Cards';
import { Pagination } from './components/PaginationComponent';

function App() {
  return (
    <div className="app">
          <NavTabs/>
          <SearchComponent/>
          <Cards/>
          <Pagination/>
    </div>
  );
}

export default App;
