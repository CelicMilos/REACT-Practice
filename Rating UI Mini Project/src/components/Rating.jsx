import { useState } from "react";
import Star from "./Star";
const Rating = ({heading='Rate your expirience', feedbackMessages=['Terible',"Poor",'Fair','Good','Excellent']}) => {      //destructuring,moze i samo props
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)
    const [submitted,setSubmitted]=useState(false)
    const handleSubmit=()=>{
        if(rating>0){
            setSubmitted(true)
        }
    }
    const closeModal=()=>{
        setSubmitted(false);
        setRating(0);
        setHover(0)
    }
    

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
        <button 
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating===0}
        >Submit</button>

        {/* {Modal} */}
        {
            submitted && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Thank you</h2>
                        <p>You rated us {rating} star{rating>1?'s':''}</p>
                        <button className="close-btn" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )
        }
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
// primeni ni jedan handling event pa mora da  se koriste funkcije ratingClick,
// hoverEnter i hoverLeave i da se ubace kao props u obe komponente
// a u Star komponenti mozemo da koristimo onClick,onMouseEnter ili onMouseLeave 
// i ta komponenta moze vise puta da se koristi.

