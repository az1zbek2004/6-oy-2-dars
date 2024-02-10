import "./index.css"

function Card(props) {
        const {title, start="Less than 2000", clas, img="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="} = props;
    return (
        <div className="card">
            <div className="car-image">
                <img className="car-image" src={img} alt="car image" height={250} width={400}/>
            </div>
            <div className="card-text">
                 <h2 className="card-title">{title}</h2>
                 <p className="card-car"><strong>Type: </strong>{clas}</p>
                 <p className="card-year"><strong>Year: </strong>{start}</p>
                 {
                    start > 2000 ? <p className="conditional">NEW CAR</p> : <p className="conditional">OLD CAR</p>
                 }
            </div>
        </div>
    )
}

export default Card;