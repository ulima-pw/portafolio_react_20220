const Banner = (props) => {
    return <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

            <div id="carrusel" className="carousel-inner">
                {
                    props.images.map((imagen, index) => {
                        if (index == 0) {
                            return <div key={imagen} className="carousel-item active">
                                <img src={ imagen } className="d-block w-100" alt="..."/>
                            </div>
                        }else {
                            return <div key={imagen} className="carousel-item">
                                <img src={ imagen } className="d-block w-100" alt="..."/>
                            </div>
                        }
                        
                    })
                }
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
}

export default Banner