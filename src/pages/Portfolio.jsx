import Footer from "../components/Footer/Footer";


const Portfolio = () => {
    return (
        <div>
            <div className="bg-cyan-300 p-2">
                <h1 className="text-center text-3xl mb-4">About our past services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="bg-[#524c4c] mb-3 flex flex-col w-[300px] lg:flex-row lg:w-[600px]">
                        <img src="/award.webp" className="w-[300px] lg:w-[300px] mr-4" alt="" />
                        <div className="flex py-2 px-2 items-center">
                            <p className="text-[20px] text-green-400 text-center">Awards Winning : 54</p>

                        </div>
                    </div>
                    <div data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="bg-[#524c4c] mb-3 flex flex-col w-[300px] lg:flex-row lg:w-[600px]">
                        <img src="/client.png" className="w-[300px] lg:w-[200px] mr-4" alt="" />
                        <div className="flex py-2 px-2 items-center">
                            <p className="text-[20px] text-cyan-200 text-center">Clients : 540</p>

                        </div>
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="bg-[#524c4c] mb-3 flex flex-col w-[300px] lg:flex-row lg:w-[600px]">
                        <img src="/project.jpg" className="w-[300px] lg:w-[300px] mr-4" alt="" />
                        <div className="flex py-2 px-2 items-center">
                            <p className="text-[20px] text-cyan-400 text-center">Events and projects : 1540</p>

                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="bg-[#524c4c] mb-3 flex flex-col w-[300px] lg:flex-row lg:w-[600px]">
                        <img src="/result.avif" className="w-[300px] lg:w-[200px] mr-4" alt="" />
                        <div className="flex py-2 px-2 items-center">
                            <p className="text-[20px] text-green-400 text-center">Result: <div className="radial-progress" style={{ "--value": 80 }}>80%</div></p>

                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;