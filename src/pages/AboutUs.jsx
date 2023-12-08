import Footer from "../components/Footer/Footer";


const AboutUs = () => {
    return (
        <div>
            <div className="p-2">
            <h1 className="text-center text-3xl mb-4">About Us</h1>
            <p className="mb-3">At Entertainment Events, we specialize in creating unforgettable experiences for all types of events, from corporate conferences to weddings and everything in between. Our team of experienced professionals is dedicated to providing exceptional service and attention to detail, ensuring that every event is executed flawlessly</p>
            <p>We offer a wide range of services, including event planning, design and decor, entertainment booking, and more. Whether you need help with the entire event or just a few aspects, we are here to make your vision a reality.</p>
            <div className="flex justify-center my-5 items-center">
                <img src="/magicimg.jpg" className="w-[200px] mr-2 h-[200px]" alt="" />
                <img src="/singing.jpeg" className="w-[200px] h-[200px]" alt="" />
            </div>
            <p>The image above represents our commitment to creating unique and memorable events that leave a lasting impression on our clients and their guests. Contact us today to learn more about how we can help you plan your next event!</p>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AboutUs;