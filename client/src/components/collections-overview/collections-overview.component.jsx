import React from "react";
import {connect} from "react-redux";

import './collections-overview.styles.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";
import {createStructuredSelector} from "reselect";


const CollectionsOverview = ({collections}) => (
    <div className='shop-page'>
        {collections.map(({id, ...otherCollectionProps}) => {
            return <CollectionPreview key={id} {...otherCollectionProps}/>
        })}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview)