import React, { useState } from "react";
import Visualaizer from 'open-react-3d-viewer/dist/Visualaizer';

function Card1() {
    const [controlVisualaizer, setControlVisualaizer] = useState({
        rotationSpeed: 10,
    });

    return (
        <div>
            <Visualaizer
                controlVisualaizer={controlVisualaizer}
                setControlVisualaizer={setControlVisualaizer}
            />
        </div>
    );
}


// CREATE THE COMPONENT
// const Card1 = () => {
//     return (
//         <div className="card" style={{ width: '18rem' }}>
//             <img
//                 src="https://images.unsplash.com/photo-1536514072410-5019a3c69182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
//                 class="card-img-top"
//                 alt="..."
//             />
//             <div class="card-body">
//                 <h5 class="card-title">Card 1</h5>
//                 <p class="card-text">
//                     Some quick example text to build on the card title and make up the
//                     bulk of the card's content.
//                 </p>
//                 <a href="#" class="btn btn-primary">Artist</a>
//             </div>
//         </div>
//     )
// }

// EXPORT THE COMPONENT
export default Card1;