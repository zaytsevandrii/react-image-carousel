import { useState } from "react"
import "./App.scss"

function App() {
  const[idx,setIdx]=useState(0)
  const changeIdx=(direction)=>{
      if(direction==='left'){
        setIdx(idx<500?1500:idx-500)
      }if(direction==='right'){
        setIdx(idx<1500?idx+500:0)
      }
  }
    return (
        <div className="carousel">
            <div className="image-container" id="imgs" style={{transform:`translateX(-${idx+'px'})` }}>
                <img
                    src="https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80"
                    alt="first-image"
                />
                <img
                    src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                    alt="second-image"
                />
                <img
                    src="https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                    alt="third-image"
                />
                <img
                    src="https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80"
                    alt="fourth-image"
                />
            </div>

            <div className="buttons-container">
              <button id="left" className="btn" onClick={()=>changeIdx('left')}>Prev</button>
              <button id="right" className="btn"  onClick={()=>changeIdx('right')}>Next</button>
            </div>
        </div>
    )
}

export default App
