// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
    render() {
        return(
            <div>
                <button
               
                onBlur={() => console.log("Hey! Eyes on me!")}
                >
                    EyesOnMe
                </button>
            </div>
        )
    }
}

export default EyesOnMe