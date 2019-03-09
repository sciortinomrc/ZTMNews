import React, {Fragment} from 'react';

const RenderedImage =({resource, onClick})=>{
    return(
        <Fragment>
            <img src={resource.meta.image} alt={resource.meta.title.slice(0,15)} onClick={()=>onClick(resource.slug)} />
        </Fragment>)
}

export default RenderedImage;