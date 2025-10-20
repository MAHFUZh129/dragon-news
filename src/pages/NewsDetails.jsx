import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homelayouts/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id}=useParams()
    const [news,setNews]=useState({});
    // console.log(news)
    useEffect(()=>{
        const newsDetails=data.find((singlenews)=>singlenews.id==id);
        setNews(newsDetails)

    },[data,id,setNews])
    return (
        <div>
            <section className='py-5'>
             <Header></Header>
            </section>
            <main className='w-11/12 py-8 mx-auto grid grid-cols-12'>
                <section className='col-span-9'>
                    <h1 className='text-lg font-semibold'>Detail News</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;