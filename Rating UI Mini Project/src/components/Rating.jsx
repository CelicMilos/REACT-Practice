import { useState } from "react";
import Star from "./Star";
const Rating = ({heading='Rate your expirience', feedbackMessages=['Terible',"Poor",'Fair','Good','Excellent']}) => {      //destructuring,moze i samo props
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)
    const stars=Array.from({length:5},(_,i)=>i+1)
    const clicked =(index)=>console.log('Clicked',index);
    const hovered=(direction,index)=>console.log('Hovered!',direction,index);
    return ( 
    <div className='rating-container' style={styles.container}>
        <h2 style={styles.heading}>{heading}</h2>
        <div className="stars">
            {stars.map((star,index)=>(
                <Star
                 key={star}
                 star={star}
                 rating={rating}
                 hover={hover}
                 ratingClick={setRating}
                 hoverEnter={setHover}
                 hoverLeave={()=> setHover(null)}
                
                 />
              
            ))}
            {/* {hover} */}
        </div>
        {rating >0 && <p className ='feedback'>{feedbackMessages[rating -1]}</p>}
       </div> );

}

const styles={
    container:{
        textAlign:'center',
        fontFamily:'Arial',
        padding:'20px',
    },
    // heading:{color:'red'}
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


// Posto <Star/> nije obican HTML element onda ne moze na njega da se 
// primeni ni jedan handling event pa mora da  se koriste ratingClick,
// hoverEnter i hoverLeave kao funkcije i da se ubace kao props u Star komponentu 
// a na njoj mozemo da koristimo onClick,onMouseEnter ili onMouseLeave 
