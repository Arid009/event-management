import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetail from "../components/ServiceDetail/ServiceDetail";
import Footer from "../components/Footer/Footer";


const ServicePage = () => {
    const {id} = useParams()
    const [serviceData, setServiceData] = useState([])

    const service= useLoaderData()

    useEffect(() => {
        const findData = service.find(sv => sv.id == id)
        setServiceData(findData)
    },[service, id])

    
    return (
        <div>
            {
                <ServiceDetail serviceData={serviceData}></ServiceDetail>
            }     
            <Footer></Footer>
        </div>
    );
};

export default ServicePage;