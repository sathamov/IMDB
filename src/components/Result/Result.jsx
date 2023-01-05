import React from 'react'
import "./Result.css"

export const Result = ({props}) => {
  return (
    <div className='container'>
      <div className="row">

        {
            props.result?.length > 0 ? props.result.map((movie, i) => {
                return(
                    <div key={i} className="col-12 col-md-6 col-lg-3 my-3">
                        <div onClick={()=> {
                          props.toggle()
                          props.setId(movie.imdbID)
                        }} className="card">
                            <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
                            <div className="card-body">
                                <h5 className="card-title"> {movie.Title} </h5>
                            </div>
                        </div>
                  </div>
                )
            }) : <>  </>
        }

      </div>
    </div>
  )
}


