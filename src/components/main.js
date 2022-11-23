import {BrowserRouter, Routes, Route , useParams} from 'react-router-dom';
import Header from './tailheader';
import { useState } from 'react';
import { Mens } from './mens';
import { Home } from './home';
import { Women } from './womens';
import { Childs } from './childs';
import { Allitems } from './allitms';
import { Cart } from '../cart';
import { Wishlist } from './wishlist';
import { View } from './view';
import { GlobalContext } from './context/globelContext';
// import { Edit } from './edit';
export function Main(){
  let [users, setUsers] = useState([]);

const user = [
  {
    "name": 'Umair',
    "passwords": 5538,
   "email" : "umairatha0007@gmail.com",
   "id" : 999
  },
  {
    "name": 'Qasim',
    "passwords": 123,
   "email" : "qasim@gmail.com",
   "id" : 1234
  },
  {
    "name": 'Umair',
    "passwords": 5678,
   "email" : "ibrar@gmail.com",
   "id" : 778
  },
]
// setUsers(user)

    return(<>
    <BrowserRouter>
      <Header  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mens" element={<Mens />} />
        <Route path="/Womens" element={<Women />} />
        <Route path="/Childs" element={<Childs />} />
        <Route path="/allitmes" element={< Allitems />} />
        <Route path="/cart" element={< Cart />} />
        <Route path="/wishlist" element={< Wishlist />} />
        {/* <Route path="/edit/:userKaName" element={<Edit myUsers={users} setUsers={setUsers} />} /> */}

        <Route path="/view/:Type/:Id" element={< View /> }  />      
      </Routes>
    </BrowserRouter>
    
    </>);
}