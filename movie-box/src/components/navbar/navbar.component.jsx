import "./navbar.styles.modules.scss";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

import Logo from '../../assets/logoMovie.png';
import auth from '../../auth/auth';


const Navbar = props => {
  const { changeValue, value } = props;

  const login = (e) => {
    console.log("heyy inside login");
    console.log("value"+e.target)
    auth.login(()=>{
      console.log("change to login url")
    })
    changeValue();
  }
  
  return (
    <div className="header">
    <img src={Logo} alt="logo" className="logo"/>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookmark">Bookmark</Link>
        </li>
        <li>
          <button onClick={login}>{value}</button>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.app.value
});

const mapDispatchToProps = dispatch => ({
  changeValue: () => dispatch({ type: "LOGOUT" })
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
