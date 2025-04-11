import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slice/Cartslice1";

const CartItem = ({item,itemIndex}) => {
  const dispatch= useDispatch();
  const description= item.description.substring(0,50);
  const title= item.title.substring(0,20);

  const removefromcart=()=>
  {
         dispatch(remove(item.id)) ;
         toast.success('item remove'); 
  }
  return (
  
  <div className="max-h-full">


    <div className="flex    justify-center  gap-x-5 items-center border-b-2 w-full h-[300px]  mb-3  mt-[50px]">



      <div className="h-[180px] w-[180px] bottom-0 mb-10">
        <img src={item.image} ></img>
      </div>

      <div className="" >

        <h1 className="mt-4 max-w-[200px] text-sm">{item.title}
        </h1>
        <h1 className="mt-3 text-sm  w-[250px] opacity-50 ">{description}...</h1>
        <div className="flex justify-between">
        <div className="mt-3">

<p className="">${item.price}</p>
</div>

<div  className="text-red-600 cursor-pointer mt-4    w-[25px] h-[25px] bg-red-400 rounded-full " onClick={removefromcart}>
<MdDelete  className="mx-auto mt-1 "/>

</div>
        </div>
      
      </div>
    </div>
  </div>)





};

export default CartItem;
