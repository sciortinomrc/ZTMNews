import React , {lazy, Suspense} from 'react';
import './card.css'


const RenderedImage=lazy(()=>import('./RenderedImage.js'))

const MasonCards = ({ resource, onClick, upvote, userId, hasVoted }) => {
    if(!resource.meta.image) resource.meta.image = "none"
    if (!resource.meta.image.includes("http") || resource.meta.image.includes("vanguardngr")) resource.meta.image = `https://via.placeholder.com/1500/2e303a/FFFFFF/?text=No%20Image%20Found`
        return (
            <div className="p-2" >
                <div className="card cardRes">
                   <Suspense fallback={<h2>Loading image... </h2>}>
                        <RenderedImage resource={resource} onClick={onClick} />
                    </Suspense>
                    <div className="card-body ">
                        <h1 onClick={() => onClick(resource.slug)}>{resource.meta.title}</h1>
                        <p className="card-text" onClick={() => onClick(resource.slug)}>{resource.meta.description}</p>
                    </div>
                    <div className="card-footer text-muted">
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <div className="footerButtons voteBtn">
                                    <i className={`fas fa-thumbs-up ${hasVoted === true ? "vb-active" : ""}`} onClick={() => upvote()}></i>{resource.upvotes.length}
                                </div>
                            </div>
                            <div className="col-md-6 text-right">
                                <div className="footerButtons bookmarkBtn">
                                    <i className={`fas fa-heart`}></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

export default MasonCards;