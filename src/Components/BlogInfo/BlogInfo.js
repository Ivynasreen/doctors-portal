import React from 'react';

const BlogInfo = (props) => {
    const {quote,name,date ,image, title} = props.blog;
    return (
            <div className="col-md-4">
                <div className="card shadow-sm">
                <div className="d-flex align-items-center mt-3">
                        <img className="mx-3" src={image} alt="" width="60"/>
                        <div>
                            <h6 className="text-info">{name}</h6>
                            <p>{date}</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5>{title}</h5>
                        <p className="card-text">{quote}</p>
                    </div>
                </div>
            </div>
    );
};

export default BlogInfo;