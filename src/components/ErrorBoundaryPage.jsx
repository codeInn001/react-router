import React from 'react'

function ErrorBoundaryPage({country}) {
    if(country === 'India'){
        throw new Error('AN ERROR OCCURED')
    }
    return (                    

        <div>
            <h1>
                Error Boundary
            </h1>
        </div>
    )
}

export default ErrorBoundaryPage