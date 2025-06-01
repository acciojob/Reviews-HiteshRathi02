import React from "react";

export default function Review ({review , handlePrevBtn, handleNextBtn, handleRandBtn}){
    return(
        <>
        <div className="review">
            <p className="author" id={`author-${review.id}`}>{review.name}</p>
            <p className="job">{review.job}</p>
            <p className="info">{review.text}</p>
            <img className="person-img" style={{ width:100}} src={review.image}></img>
            <button className="prev-btn" onClick={()=>handlePrevBtn()}>Previous</button>
            <button className="next-btn" onClick={()=>handleNextBtn()}>Next</button>
            <button className="random-btn" onClick={()=>handleRandBtn()}>surprise me</button>
        </div>
        </>
    )
}