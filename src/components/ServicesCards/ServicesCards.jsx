import ServiceCard from "./ServiceCard";


const ServicesCards = ({ services }) => {



    return (
        <div className="flex justify-center bg-cyan-300 items-center py-20">
            <div>
                <h1 className="text-3xl text-center mb-4">Our Services</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                    {
                        services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </div>
                </div>
        </div>
    );
};

export default ServicesCards;