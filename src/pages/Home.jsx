import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import Product from "../Components/Product";
import { Spinner } from "../Components/Spinner";
import Nofound from './Nofound.png';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [posts, setposts] = useState([]);

    async function fetchdata() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setposts(data);



        }
        catch (error) {
            toast.error("something went wrong");
        }
        setLoading(false);
    }


    useEffect(() => {
        fetchdata();
    }, [])
    return (<div   className="flex" >
        {
            loading ? <Spinner></Spinner> :
                posts.length > 0 ?
                    (<div className="grid  xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 p-2  space-y-10 space-x-5  mx-auto w-[1200px] min-h-[80vh]" >

                        {
                                 posts.map((post)=>
                                    (
                                    <Product key={post.id}  post={post} ></Product>
                                    ))
                        }
              
                    </div>) :
                    <div className="   w-[300px] h-[500px] flex flex-col justify-center items-center mx-auto">
                        <p>no  data found </p>
                        <img src={Nofound}></img>
                    </div>
        }
    </div>);
};

export default Home;
