import React from "react";

export default function Review ({review , handlePrevBtn, handleNextBtn, handleRandBtn}){
    const {name, job,text, image,id}=review;
    return(
        <>
        <div className="review">
            <p className="author" id={`author-${id}`}>{name}</p>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <img className="person-img" style={{ width:100, height:100}} src={image}></img>
            <div className="btn-container">
            <button className="prev-btn" onClick={()=>handlePrevBtn()}>Previous</button>
            <button className="next-btn" onClick={()=>handleNextBtn()}>Next</button>
            <button className="random-btn" onClick={()=>handleRandBtn()}>surprise me</button>
            </div>
        </div>
        </>
    )
}