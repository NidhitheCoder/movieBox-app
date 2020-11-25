import { connect } from "react-redux";
import  Container  from '../../components/container/container.component';
import './categoryList.styles.modules.scss';

const CategoryList = props => {
  const { movieList, match,history } = props;
  const title = match.params.categoryName;
  return (
    <div className="category-list-container">
      <h2>{title}</h2>
      <Container movieList={movieList} history={history} />
    </div>
  );
};

const mapStateToProps = state => ({
  movieList: state.movie.currentCategoryList
});

export default connect(mapStateToProps)(CategoryList);
