import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { image, title, id, description, price } = service

    return (
        <div className="card card-compact w-96 bg-cyan-100 shadow-xl">
            <figure><img src={image} className="h-52" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p>Price: ${price}</p>
                <p className="font-semibold text-sm">{description}</p>
                <div className="card-actions justify-center">
                    <Link to={`/services/${id}`}><button className="btn bg-cyan-200">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;