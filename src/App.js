import './App.css';
import { useState } from 'react';
import Filter from './components/Filter/Filter';
import Heading from './components/Heading/Heading';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import data from './components/data'

function App() {

  const [Items, setItems] = useState(data);
  const [filterText, setFilterText] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [filterProp, setFilterProp] = useState("");



  // location filter func
  const filterItem = (category) => {
    const newItems = data.filter((item) => item.Location === category);
    setFilterText(category);
    setItems(newItems)
  }

  // date filter func
  const filterDateItem = (category) => {
    const newItems = data.filter((item) => item.date === category);
    setFilterDate(category)
    setItems(newItems)

  }
  
  // price filter func
  const filterPriceItem = (category) => {
    const newItems = data.filter((item) => item.price === category);
    setFilterPrice(category)
    setItems(newItems)
  }

  // property type func
  const filterPropTypeItem = (category) => {
    const newItems = data.filter((item) => item.property === category);
    setFilterProp(category);
    setItems(newItems)
  }

  //  like func
  const isLiked = (id) => {

    const newItems = [...Items]
    for (var i = 0; i < newItems.length; i++) {
      if (newItems[i].id === id) {
        if (newItems[i].like === false) {
          newItems[i].like = true;
        } else {
          newItems[i].like = false;
        }
        break;
      }
    }
    setItems(newItems)
  }




  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className='main-body'>
          <Heading  
          />
          <Filter
            filterItem={filterItem}
            filterText={filterText}
            filterDateItem={filterDateItem}
            filterDate={filterDate}
            filterPriceItem={filterPriceItem}
            filterPrice={filterPrice}
            filterPropTypeItem={filterPropTypeItem}
            filterProp={filterProp}
          />
          <Menu listItem={Items} isLiked={isLiked} />
        </div>
      </div>
    </div>
  );
}

export default App;
