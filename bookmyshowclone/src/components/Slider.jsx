
     import React, { useState, useEffect } from 'react';



     const Slider = () => {
       const images = ['https://assets-in.bmscdn.com/promotions/cms/creatives/1706507388658_web.jpg', 'https://assets-in.bmscdn.com/promotions/cms/creatives/1707114682566_marshmelloweb.jpg' , 'https://assets-in.bmscdn.com/promotions/cms/creatives/1706872858825_web.jpg'];
       const [currentImage, setCurrentImage] = useState(0);
     
       useEffect(() => {
         const interval = setInterval(() => {
           setCurrentImage((prevImage) => (prevImage + 1) % images.length);
         }, 3000); // Adjust the duration (in milliseconds) as needed
     
         return () => clearInterval(interval);
       }, []);
     
       return (
         <div style={{ maxWidth: '90rem', margin: 'auto', overflow: 'hidden' }}>
           <div
             style={{
               display: 'flex',
               transition: 'transform 0.5s ease-in-out',
               transform: `translateX(${-currentImage * 100}%)`,
             }}
           >
             {images.map((image, index) => (
               <div key={index} style={{ minWidth: '100%', overflow: 'hidden' }}>
                 <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
             ))}
           </div>
         </div>
       );
     };
     
     export default Slider;
     