import './navbar.styles.modules.scss';
import {connect} from 'react-redux'

const Navbar =(props) =>{
    const {changeValue,value} = props;
   return <div className="header">
    <button onClick={changeValue}>{value}</button>
    </div>
};

const mapStateToProps = (state) =>({
    value: state.app.value
});

const mapDispatchToProps = dispatch => ({
    changeValue:() => dispatch({type:'LOGOUT'})
})
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);