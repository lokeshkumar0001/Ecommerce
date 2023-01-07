import React, { Fragment, useState } from "react";
import "./Search.css"
import {useNavigate} from "react-router-dom"
import MetaData from "../layout/MetaData";


const Search = () => {
    const navigate = useNavigate();

    const [keyword,setKeyword] = useState("");

    const seachSubmitHandler =(e) =>{
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/products/${keyword}`)
        }else{
            navigate("/products")
        }
    }
  return (
    <Fragment>
      <MetaData title="Search a product" />
      <form className="searchBox" onSubmit={seachSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Prouduct"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
