import { useState } from "react";
const Rating = () => {
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)
    const stars=Array.from({length:5},(_,i)=>i+1)
    const clicked =(index)=>console.log('Clicked',index);
    const hovered=(direction,index)=>console.log('Hovered!',direction,index);
    return ( 
    <div className='rating-container' style={styles.container}>
        <h2 style={styles.heading}> Rate Your Expirience</h2>
        <div className="stars">
            {stars.map((star,index)=>(
                <span 
                onClick={()=>setRating(star)}
                onMouseEnter={()=>setHover(star)} 
                onMouseLeave={()=>setHover(0)} 
                key={star} className="star">
                {'\u2605'}
                </span>
            ))}
            {hover}
        </div>
       </div> );

}

const styles={
    container:{
        textAlign:'center',
        fontFamily:'Arial',
        padding:'20px',
    },
    heading:{color:'red'}
}

export default Rating;
// Stilizivanje moze ovako a moze  i u jednoj liniji pored div taga ali moraju{{}}
// jer je to u sustini JS objekat
// {/* <div style={{
//       textAlign:'center',
//         fontFamily:'Arial',
//         padding:'20px',
// }}>
//   */}
// A za manje projekte moze da se korist globalni .css fajl