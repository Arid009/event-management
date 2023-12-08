import { useLoaderData } from "react-router-dom";
import Banner from "../components/Header/Banner";
import ServicesCards from "../components/ServicesCards/ServicesCards";
import Welcome from "../components/Main/Welcome";
import Subscribe from "../components/Main/Subscribe";
import Footer from "../components/Footer/Footer";


const Home = () => {

    const services = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <ServicesCards services={services}></ServicesCards>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;