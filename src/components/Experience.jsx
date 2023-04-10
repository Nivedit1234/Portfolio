import React from 'react'
//import {useState} from '../assets/portfolio/useState.jpg';
import css from '../assets/css.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
//import {icon} from '../assets/icon.png';
import javascript from '../assets/javascript.png';
import postman from '../assets/postman.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import express2 from '../assets/express2.png';
import mongodb from '../assets/mongodb.png';
import socket_io from '../assets/socket_io.png';
 
const Experience = () => {
  const techs=[
    {
        id:1,
        src:node,
        title:'node',
        style:'shadow-lime-400'
    },
    {
        id:2,
        src:react,
        title:'react',
        style:'shadow-blue-400'
    },
    {
        id:3,
        src:javascript,
        title:'javascript',
        style:'shadow-yellow-500'
    },
    {
        id:4,
        src:postman,
        title:'Postman',
        style:'shadow-orange-500'
    },
    {
        id:5,
        src:tailwind,
        title:'tailwind',
        style:'shadow-sky-400'
    },
    {
        id:6,
        src:github,
        title:'Github',
        style:'shadow-gray-500'
    },
   
   
    {
        id:7,
        src:express2,
        title:'Express',
        style:'shadow-white'
    },
    {
        id:8,
        src:mongodb,
        title:'mongoDB',
        style:'shadow-lime-400'
    },
    
    {
        id:9,
        src:html,
        title:'HTML',
        style:'shadow-orange-500'
    },
    {
        id:10,
        src:css,
        title:'CSS',
        style:'shadow-blue-500'
    },
    {
        id:11,
        src:socket_io,
        title:'socket-io',
        style:'shadow-white'
    }


    

  ]
    return (
    <div name='experience' className='bg-gradient-to-b from-gray-800  to-black w-full h-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full text-white '>
            <div className='pb-8 mt-36'>
                <p className='text-4xl font-bold  border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies the I've worked on</p>
            </div>
             <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 h-full'> 

            {
                techs.map(({id, src, title, style})=>(
                    
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='' className='w-20 mx-auto'></img>
                    <p className='mt-4'>{title}</p>                    
                
                    </div>

                ))
            }
          
            </div>
        </div>
    </div>
  )
}

export default Experience