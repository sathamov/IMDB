import axios from "axios";
import { useState } from "react";
import { Search } from "./components/Search/Search";
import { Result } from "./components/Result/Result"
import Logo from "./img/imdb-logo.png"
import { ToastContainer, toast } from 'react-toastify';
import Popup from "./components/Modal/Modal";

function App() {
  const baseURL = "https://omdbapi.com/?apikey=1d4eb7c7&s="

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [result, setResult] = useState([])

  const [id, setId] = useState(null)

  

  const search = async (e) => {
    if(e.key === "Enter") {
      try {
        toast.loading("Please Wait !!!")
        let res = await axios.get(`${baseURL}${e.target.value}`)
    
        setResult(res.data.Search);
        toast.dismiss()
        console.log(res);
        if(!res.data.Search) {
          toast.info("Movie Not Found")
        }

       }catch (error) {
        toast.dismiss()
        toast.error(error.message)
        console.log(error.message);
       }
    }
  }


  return (
    <div className="App">

      <div className="bg-dark py-3 d-flex justify-content-center">
        <img width={80} className="rounded-3 me-3" src={Logo} alt="" />
        <h1 className="text-center text-white"> Info Movie from IMBD </h1>     
      </div>

      <Search search={search} />
      <Result props={{result , toggle , setId}} />

      <Popup args={{modal, setModal , toggle , id}} />




     
     <ToastContainer />

    </div>
  );
}

export default App;


