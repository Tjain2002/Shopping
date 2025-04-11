import { useState } from "react";
import toast from "react-hot-toast";
// import {useSelector} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { add,remove } from "../redux/slice/Cartslice1";
 

const Product = ({post}) => {


const{cart}= useSelector((state)=>state);

const dispatch = useDispatch();

const addtocart=()=>
{
    dispatch(add((post)));
    toast.success("item added to cart")
}
const removefromcart=()=>
{
    dispatch(remove(post.id));
    toast.error("remove item successfully");
}


const[selected ,setselected] = useState();   

const description=  post.description.substring(0,70);
const title= post.title.substring(0,14);
  return <div className="   flex flex-col   items-center justify-between     
hover:scale-110 transition  duration-200 ease-in gap-3   p-4 mt-[40px] ml-5 rounded-xl 



shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">






<div className=" mt-3  font-semibold truncate w-40 ">
    <p>{title}....</p>

</div>

<div className="w-40 text-md mt-1 opacity-40 mx-auto">

    <p>{post.description.split(" ").slice(0,10).join(" ") + "...."}</p>
</div>
   

<div className="">

<div className=" h-[180px]  w-[180px]  mx-auto  ">
    <img  src={post.image} className="h-full w-full"></img>
</div>
<span className="flex   mt-4  justify-between ml-24 gap-x-14  mb-3">

<span className="text-green-600  ml-10 ">
    <p  className=""  > ${post.price}</p>
</span>

<span className="mr-36 ">

{
    cart.some((p)=>p.id==post.id)?
    (<button className=" bg-green-600  w-[140px]   text-black border  border-black rounded-lg "  onClick={removefromcart}>

        Remove Item
    </button>):
    (<button  className=" bg-green-600 w-[100px]  text-sm  text-black border  border-black rounded-lg "  onClick={addtocart} >

        Add to Cart
    </button>)

}
</span>

</span>



   



</div>





    </div>    







  ;
};

export default Product;
