import React, {useState,useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Pagination from './Components/Pagination';
import UsersList from './Components/Users';
import Search from './Components/Search';
import Filter from './Components/Filter';

const App = () => {
  const [users,setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(1000);

  useEffect(() => {
    const fetchUsers = async () => {
      // setLoading(true);
      const res = await axios.get('http://localhost:5000/users');
      setUsers(res.data);
      // setLoading(false)
    }
    fetchUsers();
  }, [80]);

  const indexOfLastUser = currentUser*usersPerPage;
  const indexOfFirstUser = indexOfLastUser-usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser,indexOfLastUser)
//change page
  const paginate =(pageNumber) => setCurrentUser(pageNumber)

  console.log(users);
  
  return (
    <>
    <div className="App mt-12">
      <h1 className='text-center'>User list</h1>
      <div className='row col-md-12'>
        <div className='col-md-3 .ml auto'>
          <Filter />
        </div>
        <div className='col-md-7'>
          <Search />
        </div>
      </div>
      <UsersList users={currentUsers}  />
      <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate}/>
    </div>
    </>
  );
}

export default App;
