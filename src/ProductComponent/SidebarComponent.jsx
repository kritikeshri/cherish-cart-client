import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { use } from 'react';
import { CATEGORIES_URL } from '../config/constants';
import { Link } from 'react-router-dom';

const SidebarComponent = () => {
  const [categories,setCategories]=useState([]);
  const retriveAllCategories=async()=>{
    const response = await axios.get(CATEGORIES_URL);
    return response.data;

  };

  useEffect(()=>{
    const getAllCategories = async() => {
      const allCategories =await retriveAllCategories();
      if(allCategories){
        setCategories(allCategories.categories);
      }
    };
    getAllCategories();
  },[])

  return (
    <div className='sidebar-component'>
        {/* <div> */}
            <h3>Categories</h3>
        {/* </div> */}
        {categories.map((category)=>{
            return (
              <div className='single-category' key={category.id}>
                <Link to = {`/product/category/${category.id}/${category.name}`}
                  class="list-group-item list-group-item-action text-color"
                >
                  <b>{category.name}</b>
                </Link>
              </div>
            )
        })}
    </div>
  )
}

export default SidebarComponent;
