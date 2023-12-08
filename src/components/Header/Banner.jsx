/* eslint-disable react/no-unescaped-entities */


const Banner = () => {
    return (
        <div>
            <div className="relative text-center">
                <img src="/banner.jpg" className=" opacity-30" alt="" />
                <div className="absolute top-5 lg:top-72 lg:right-28 py-7 bg-black px-2 lg:py-5 opacity-75">
                    <h1 className="lg:text-5xl text-2xl text-cyan-500 font-bold lg:mb-12 ">Unforgettable Occasions</h1>
                    <p className="lg:text-2xl  text-cyan-600 ">Join us for an unforgettable night of music, dancing, and fun! Our event management team has curated <br /> the perfect lineup of performers to keep you entertained all night long. Don't miss out <br /> on this opportunity to make memories that will last a lifetime.</p>
                </div>
            </div>

        </div>
    );
};

export default Banner;