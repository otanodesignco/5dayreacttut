import React from 'react';

/*
class MediaCard extends React.Component{

    constructor(props)
    {
        super(props);
    }

    render(){


        const {title,body,imgUrl} = this.props;

        return(
            <div>
                <img src={imgUrl} alt=''/>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        );
    }
}

function MediaCard({title, body, imgUrl})
{
        return(
            <div>
                <img src={imgUrl} alt=''/>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        );
}
*/
const MediaCard = ({title, body, imgUrl}) => {
    return(
        <div>
            <img src={imgUrl} alt=''/>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
}

export default MediaCard;