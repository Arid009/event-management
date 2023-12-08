import swal from "sweetalert";


const Subscribe = () => {


    const handleSubscribe=e=> {
        e.preventDefault()

        swal("Good job!", "Successfully Subscribed", "success")
    }

    return (
        <div>
            <div className="flex flex-col mt-2 lg:flex-row bg-green-300 px-3 py-2 justify-between w-[400px] lg:w-[900px] mx-auto items-center">
                <h3 className="text-xl font-bold">Get Subscribe</h3>
                <form onSubmit={handleSubscribe}>
                <input placeholder="Your Email" required className="mr-3 pl-2 py-1 rounded-sm" type="text" />
                    <input type="submit" className="btn bg-green-600 border-none" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default Subscribe;