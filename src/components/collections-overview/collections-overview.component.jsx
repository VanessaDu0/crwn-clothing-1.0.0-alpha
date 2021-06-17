import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview  from '../preview-collection/preview-colloection.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections
                .map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
        }
    </div>
);


const mapStateTOProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateTOProps)(CollectionsOverview)

