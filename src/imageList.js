import React from 'react';

const ImageList = (props) => {
    const { images } = props;
    const imagesColl = images.map(({description, id, urls}) => {
        return <img src= {urls.regular} key = {id} alt = {description} style = {{width: '200px', height: '200px'}} />
    });
    return <div>{imagesColl}</div>
}

export default ImageList;