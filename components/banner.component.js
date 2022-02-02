const Banner = () => {
    return <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

            <div id="carrusel" className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.ytimg.com/vi/zZCyJiyWdX0/maxresdefault.jpg" className="d-block w-100" alt="..."/>
                </div>
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