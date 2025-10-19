import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CatgoryNews = () => {
    const [ctgNews,setCtgnews]=useState([])
    const {id}=useParams();
    const data = useLoaderData();

    useEffect(()=>{
        if(id=='0'){
            setCtgnews(data)
        }
        else if(id=='1'){
            const filtNews= data.filter((news)=>news.others.is_today_pick==true)
            setCtgnews(filtNews)
        }
        else{
            const filtNews= data.filter((news)=>news.category_id==id)
            setCtgnews(filtNews)
        }

    },[data,id])
    
    return (
        <div className='space-y-6'>
            <h3 className='font-bold'>Total <span className='text-secondary'>({ctgNews.length}) </span> News Found</h3>
            <div className='space-y-3'>
               {
               ctgNews.map((newsItem)=><NewsCard key={newsItem.id} newsItem={newsItem}></NewsCard>)
               }
            </div>
        </div> 
    );
};

export default CatgoryNews;