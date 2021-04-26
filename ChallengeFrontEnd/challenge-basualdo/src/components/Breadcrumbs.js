import React from 'react';
import 'styles/Breadcrumbs.css'

const Breadcrumbs = props => {
    const breadCrumbs = () => {
        return (
            <ul class="breadcrumbs">
                {props.categories.map( (category, i) => <li key={`${category}_${i}`} >{category}</li>)}
            </ul>
        )
    }

    return (
        <div>
            {props.categories.length > 0 && breadCrumbs()}
        </div>
    )
}

export default Breadcrumbs