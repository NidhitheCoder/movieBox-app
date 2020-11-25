import "./navbar.styles.modules.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "../../assets/logoMovie.png";
import auth from "../../auth/auth";

const Navbar = props => {
  const { loginAsync, logoutAsync, value } = props;

  const login = e => {
    console.log("we are in login");
    auth.login(() => {
      //  location.pathname.replace("/home");
    });
    loginAsync();
  };

  const logout = e => {
    console.log("logouted");
    auth.logout(() => {
      // history.push("/");
    });
    logoutAsync();
  };

  return (
    <div className="header">
      <Link to="/home">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      {value === "LOGOUT" ? (
        <ul className="nav-list">
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
            <button onClick={value === "LOGIN" ? login : logout}>
              {value}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.app.value
});

const mapDispatchToProps = dispatch => ({
  loginAsync: () => dispatch({ type: "LOGIN" }),
  logoutAsync: () => dispatch({ type: "LOGOUT" })
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
