import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  // if (props.mode==='light'){
  //   let c = 'white'
  //   let bgc = 'black';

  // }
  // else if (props.mode==='dark'){
  //   let c = 'white'
  //   let bgc = 'black';

  // };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Textform">Textform</Link>
              </li>

              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li> */}
              <li className="nav-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            {/* <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox"  role="switch" id="flexSwitchCheckDefault"/>
                  <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark mode.</label>        
            </div> */}
          </div>
        </div>
      </nav>

    </div>
  )
}

// Navbar.propTypes = {
//   title: PropTypes.string,
//   about: PropTypes.string,
//   mode: PropTypes.string
// }

// Navbar.defaultProps = {
//   title: PropTypes.string,
//   about: PropTypes.string,
// }

