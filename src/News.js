import React from 'react';

export default class News extends React.Component {  
    render(){   
        return( 
            <div>
            <h2 className="items-positioning">Страница новостей</h2>
            <p>Flexbox is a perfect fit for this type of problem. While mostly known for laying out content in the horizontal direction, Flexbox actually works just as well for vertical layout problems. All you have to do is wrap the vertical sections in a flex container and choose which ones you want to expand. They’ll automatically take up all the available space in their container.</p>
            <p>In the example below, the container is set to the height of the window, and the content area is told to expand as needed. (Note: in the vertical direction you need to specify a height for the container. This is different from the horizontal direction, which automatically expands to fit.)</p>
            </div>
        )
    }
};