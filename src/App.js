import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Modals from './component/Modals';
function App() {
  const [user, setUser] = useState([])
  const [page, setPage] = useState('')
  const [textName, setTextName] = useState('')
  const [textPhone, setTextPhone] = useState('')
  const [textEmail, setTextEmail] = useState('')
  const [show, setShow] = useState(false)
  const [userIndex, setUserIndex] = useState(null)
  const [userData, setUserData] = useState([])
  const [textFilter, setTextFilter] = useState('')
  const fetchApi = async () => {
    const fetchUser = await fetch('https://jsonplaceholder.typicode.com/users')
    const userRes = await fetchUser.json()
    const users = userRes
    setUser(users)
  }
  const showModal = () => {
    setShow(true)
  }
  const closeModal = () => {
    setShow(false)
  }
  const handleInputSearch = (event) =>{
    const input = event.target.value
    setTextFilter(input)
  }
  const handleInputName = (event) => {
    const input = event.target.value
    setTextName(input)
  }
  const handleInputEmail = (event) => {
    const input = event.target.value
    setTextEmail(input)
  }
  const handleInputPhone = (event) => {
    const input = event.target.value
    setTextPhone(input)
  }
  const handleDelete = () => {
    const oldUser = user
    oldUser.splice(userIndex, 1)
    setUser([...oldUser])
    closeModal()
  }
  const handleAdd = () => {
    const oldUser = user
    oldUser.push({
      name: textName,
      email: textEmail,
      phone: textPhone,
    })
    setUser([...oldUser])
    closeModal()
  }
  const handleEdit = () => {
    const oldUser = user
    oldUser[userIndex].name = textName
    oldUser[userIndex].email = textEmail
    oldUser[userIndex].phone = textPhone
    setUser([...oldUser])
    closeModal()
  }
  const handleSearch = () =>{
    const dataUser = user
    const filter = dataUser.filter(data => data.name === textFilter || data.email === textFilter || data.phone === textFilter)
    setUser(filter)
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <div className="App">
      {show ? <Modals
        handleAdd={handleAdd}
        handleInputName={handleInputName}
        handleInputPhone={handleInputPhone}
        handleInputEmail={handleInputEmail}
        closeModal={closeModal}
        page={page}
        userData={userData}
        handleDelete={handleDelete}
        textEmail={textEmail}
        textName={textName}
        textPhone={textPhone}
        handleEdit={handleEdit}
      /> : <></>
      }
      <div className='container'>
        <div className='header'>
          <div className='button-header'>
          <button onClick={() => { setPage('add'); showModal() }}>Add</button>
          </div>
          <div className='search-header'>
            <input type='text' onChange={handleInputSearch}/>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>
                  <button onClick={() => { setPage('edit'); showModal(); setUserIndex(index); setTextName(data.name); setTextEmail(data.email); setTextPhone(data.phone) }}>Edit</button>
                  <button onClick={() => { setPage('del'); showModal(); setUserIndex(index); setUserData(data) }}>Del</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
