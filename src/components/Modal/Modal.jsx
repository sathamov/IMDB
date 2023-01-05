import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from "../../img/loding.gif"
import { Modal, ModalHeader, ModalBody,  CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';

import "./Modal.css"

function Popup({args}) {

  const [info, setInfo] = useState(null)

  useEffect(() => {
    const getInfo = async () => {

      try {
        let res = await axios("https://omdbapi.com/?apikey=1d4eb7c7&i=" + args.id)
        setInfo(res.data);
      } catch (error) {
        console.log(error.message);
      }

    }

    getInfo()


  }, [args.id])

  return (
    <div>
      
      <Modal isOpen={args.modal} toggle={args.toggle} {...args} className="Popup">
        <ModalHeader toggle={() => {
          args.toggle()
          setInfo(null)
        }}> {info?.Title} 
        </ModalHeader>

        {
          info ? <ModalBody>
          
          <div className='info-card'>
            <img className='poster'
              alt="Sample"
              src={info?.Poster}
            />
            <CardBody className='ps-3'>
              <CardTitle tag="h5">
  
              Released: <span className='relesed'> {info?.Released} </span>
  
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                <br />
                <span className='span-title'> Genre: </span> <span> {info?.Genre} </span>   
                <br />
                <span className='span-title'> Runtime: </span> <span> {info?.Runtime} </span> 
  
                <p> <span className='span-title'> Director: </span> <span> {info?.Director} </span> </p> 
  
                <p className="actior-name"> <span className='span-title'> Actors: </span> <span> {info?.Actors} </span> </p>
  
                <p className="actior-name"> <span className='span-title'> Country: </span> <span> {info?.Country} </span> </p>
  
                <p className="actior-name"> <span className='span-title'> Awards: </span> <span> {info?.Awards} </span> </p>
  
                <p className="actior-name"> <span className='span-title'> BoxOffice: </span> <span> {info?.BoxOffice} </span> </p>
  
                <p className="actior-name"> <span className='span-title'> Awards: </span> <span> {info?.Awards} </span> </p>
  
              </CardSubtitle>
              <CardText>
                <p className='plot'> {info?.Plot} </p>
              </CardText>
              <p className='span-title'> imdbRating:  <span> {info?.imdbRating} </span>  </p>
            </CardBody>
          </div>
  
          </ModalBody> : <img className='loader-img' src={Loader} alt="loader"/>
        }

      </Modal>
    </div>
  );
}

export default Popup;