import React from 'react'

function Modal ({show,item,onClose}) {
    if(!show){
        return null
    }
    let image=item.image && item.image.smallThumbnail;
  return (
    <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
                <div className="inner-box">
                    <img src={image} alt="book-picture" />
                    <div className="info">
                        <h3>{item.title}</h3>
                        {
                            item.authors.map(author=>(
                                <h5>{author}</h5>
                            ))
                        }
                        <h6>{item.publisDate}</h6> 
                        <a href={item.link} target='blank'><button>More</button></a>
                    </div>
                </div>
                <p className="description">{item.description}</p>
            </div>
        </div>
    </>
  )
}

export default Modal