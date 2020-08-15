import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slide.style.css';




const SlideShow = ({items}) => {

    return (
        <div className="items">
            <Slide>
            {
                items.map((item) => 
                
                    <div className="each-slide" key={uuid()}>
                      <div className="comment">
                        <p className="comment__content">{item.comments}</p>
                        <div className="comment__picture"><img src={`pictures/comments/${item.picture}`}/></div>
                      </div>
                    </div>
                )
            }            
            </Slide>
        </div>
    );
};

SlideShow.prototype = {
    items: PropTypes.shape({
        comments: PropTypes.string,
    }).isRequired
}

export default SlideShow;