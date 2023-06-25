import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'

const AdminPage = () => {
  const userFormDataList = JSON.parse(localStorage.getItem("userFormDataList"))
  return (
    <div className='admin-main-container'>
      <Navbar />
      <div className='table-main-container'>
        {localStorage.getItem("userFormDataList") === null || userFormDataList.length === 0 ? (
          <div className='no-data-container'>
          <h1 className='no-data-heading'>No Data Found</h1>
          <p className='desc'>Please Go Home Page and Create Your Trip</p>
          <Link to='/' className='nav-link'>
              <button type='button' className='home-button'> Go Home </button>
          </Link>
        </div>
        ) : (
          <table className='table-container'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Travel Dates</th>
              <th>Destinations</th>
              <th>Travelers</th>
              <th>TripDuration</th>
              <th>Accommodation</th>
              <th>Transportation</th>
              <th>Interests</th>
              <th>Special Requests</th>
            </tr>
          </thead>
          <tbody>
            {userFormDataList.map((eachItem, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{eachItem.name}</td>
                <td>{eachItem.email}</td>
                <td>{eachItem.phone}</td>
                <td>{eachItem.travelDates}</td>
                <td>{eachItem.destinations}</td>
                <td>{eachItem.travelers}</td>
                <td>{eachItem.tripDuration}</td>
                <td>{eachItem.accommodation}</td>
                <td>{eachItem.transportation}</td>
                <td>{eachItem.interests}</td>
                <td>{eachItem.specialRequests}</td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      </div>
    </div>
    
  )
}

export default AdminPage