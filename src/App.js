// import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import Navbar from './Components/Navbar';
// import NewsItem from './Components/NewsItem';
import News from './Components/News';
  import {  
    BrowserRouter,
    Routes,
    Route 
  } from 'react-router-dom';
  import LoadingBar from 'react-top-loading-bar';

export default function App () {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)
 
    return (
      <div>
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        height={3}
        color='#f11946'
        setProgress={progress}
      />
        <Routes>
        < Route exact path="/" element={ <News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize ={pageSize} country ="in" category ="general"/>}/>
        < Route exact path="/business" element={ <News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize ={pageSize} country ="in" category ="business"/>}/>
        < Route exact path="/entertainment" element={ <News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize ={pageSize} country ="in" category ="entertainment"/>}/>
        < Route exact path="/health" element={ <News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize ={pageSize} country ="in" category ="health"/>}/>
        < Route exact path="/science" element={ <News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize ={pageSize} country ="in" category ="science"/>}/>
        < Route exact path="/sports" element={ <News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize ={pageSize} country ="in" category ="sports"/>}/>
        < Route exact path="/technology" element={ <News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize ={pageSize} country ="in" category ="technology"/>}/>
        </Routes>
  </BrowserRouter>
      </div>
    )
  }



