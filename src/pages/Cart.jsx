import { Link } from "react-router-dom";
import CartItem from "../Components/Cartitem";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import cartimage from '../Components/empty-cart.svg';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalamount, setamount] = useState(0);

  useEffect(() => {

    setamount(cart.reduce((acc, curr) => acc + curr.price, 0));


  }, [cart]) 
  return( <div className="flex justify-center items-center  mt-[30px] mx-auto ">

    {
      cart.length > 0 ?
        (<div className="flex flex-col lg:flex-row">
          <div className="" >

            {
              cart.map((item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} >

                </CartItem>
              })
            }


</div>

               <div className="flex flex-col w-[400px]  h-[500px]   ml-12">
            <div className="relative flex flex-col justify-center items-center mt-9">

              <div className="uppercase text-green-400">
                Your Cart
              </div>
              <div className="uppercase text-4xl text-green-600">Summary</div>
              <p>
                <span>Total item:{cart.length}</span>
              </p>
            </div>
            {/* <div  className="mt-0   lg:mt-[500px] flex flex-col justify-center items-center "> */}
            <div className="mt-64 flex flex-col items-center ml-8 ">
            <p className="m-1 text-center">Total Amount:${totalamount}</p>
            <button className=" ml-1 mt-1 border w-[300px] h-[40px] bg-green-600 text-white" >Checkout Now</button>
            </div>
             
            {/* </div> */}
           
     

        </div>
        
        </div>) :



        (<div>

          <div className="w-[400px]  h-[500px] border  flex flex-col justify-center items-center  rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-20">

          <h1 className="font-bold">
            Your Bag is Empty</h1>
           <img src={cartimage}  width={150} height={150} ></img> 

            <p className="mt-4 max-w-[300px] text-center opacity-30">Looks like you haven't made ypur choice yet</p>

          <Link to={"/"}>
            <button className="w-[100px] h-[30px] border mt-3  rounded-full bg-green-300 text-white">
              Shop now
            </button>



          </Link>

          </div>
        

        </div>




        )
    }



  </div>
  );
};

export default Cart;
