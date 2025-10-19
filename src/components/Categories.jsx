import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise=fetch('/categories.json').then((res)=>res.json())



const Categories = () => {
     const categories =use(categoryPromise)

    return (
        <div>
           <h1 className='font-bold'>All Caterogy ({categories.length})</h1>
           <div className='  grid grid-cols-1 gap-2 mt-5'>
            {
              categories.map((ctg)=>
              <NavLink className=" justify-start btn  bg-base-100 border-0 hover:bg-base-200 text-accent font-semibold" to={`/ctg/${ctg.id}`} key={ctg.id} >{ctg.name}</NavLink>) 
            }
            </div> 
        </div> 
    );
};

export default Categories;