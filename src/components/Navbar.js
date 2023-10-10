import {Link} from 'react-router-dom';
import logo from './logo.png'
const Navbar = () => {
  return (
    <>
      <div className="row container-fluid bg-dark " id='header'>
          <div className="col-sm-1">
              <Link to='/'><img src={logo} className='logo' alt='No preview'></img></Link>
          </div>
          <div className="col-sm-9 text-center" >
              <h2 ><Link to='/' id='heading'>Nagarro Blogs</Link></h2>
          </div>
          <div className="col-sm-2 mt-2">
              <Link to='blog' className='btn btn-light'><strong>Add Posts</strong></Link>
          </div>
      </div>
      </>  
  )
}

export default Navbar;
