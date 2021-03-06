import {connect} from "react-redux";
import {compose} from 'redux';
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selector";
import {createStructuredSelector} from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

// TODO UMSTELLEN AUF CONTAINER PATTERN 
const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;

