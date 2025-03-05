import React from 'react';
import './Tags.scss'
function Tags(props) {

    const txtcontent = props.content
    const tagst = []
const a = txtcontent.length
    for ( let i=0; i<a; i++ ) 
        {
        const tagsi=[   <div className="tags__txt">
                        {txtcontent[i]}
                        </div> 
                    ]
        tagst.push(tagsi)
        }
    

    return (
        <div className="tags__container">{tagst}</div>
    );
}

export default Tags