import React from 'react';
import {connect} from 'react-redux';
import './detailsPage.styles.modules.scss';

const DetailsPage = (props) =>(
    <div className="details-container">
    {console.log("props",props)}
        <h2>Details pages are here...
        </h2>
        <img src={props.Poster} alt={props.Title} className="poster" />
    </div>
);

const mapStateToProps = (state) => ({
    movie:state.movie.movie
})

export default connect(mapStateToProps)(DetailsPage);