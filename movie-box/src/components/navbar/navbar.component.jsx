import "./navbar.styles.modules.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "../../assets/logoMovie.png";
import auth from "../../auth/auth";
import { setSearchKeyWord } from '../../redux/searchKey/searchKey.action';

const Navbar = (props) => {
  const { loginAsync, logoutAsync, value, setkeywordAsync } = props;

  const login = (e) => {
    console.log("we are in login");
    auth.login(() => {
      //  location.pathname.replace("/login");
    });
    loginAsync();
  };

  const logout = (e) => {
    console.log("logouted");
    auth.logout(() => {
      // history.push("/");
    });
    logoutAsync();
  };

  const searchWithText = (e) => {
    setkeywordAsync(e.target.value)
  }

  return (
    <div className="header">
      <Link to="/home">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      {value === "LOGOUT" ? (
        <ul className="nav-list">
          <li>
            <input
              type="text"
              className="search-input"
              placeholder="Search Movies.."
              onKeyUp={searchWithText}
            ></input>
          </li>
          <li>
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/bookmark">BOOKMARK</Link>
          </li>
          <li>
            <button onClick={value === "LOGIN" ? login : logout}>
              {value}
            </button>
          </li>
        </ul>
      ) : (
        <ul className="nav-list">
          <li>
            <input
              type="text"
              className="search-input"
              placeholder="Search Movies.."
              onKeyUp={searchWithText}
            ></input>
          </li>
          <li>
            <button onClick={value === "LOGIN" ? login : logout}>
              {value}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.app.value,
});

const mapDispatchToProps = (dispatch) => ({
  loginAsync: () => dispatch({ type: "LOGIN" }),
  logoutAsync: () => dispatch({ type: "LOGOUT" }),
  setkeywordAsync: keyword => dispatch(setSearchKeyWord(keyword)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
