
const ServiceDetail = ({ serviceData }) => {
    const { id, title, description, image } = serviceData
    return (
        <div className="px-2 flex justify-center  items-center bg-cyan-300 py-4">
            <div >
                <h1 className="text-4xl font-bold text-center text-white my-4">{title}</h1>
                <p className="text-center px-20 text-white text-xl">{description}</p>
                <p className="text-white py-2 text-center text-2xl">Are you ready to join us?</p>
                <div className="flex justify-center items-center mt-8">

                    <img src={image} className="h-96" alt="" />
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;