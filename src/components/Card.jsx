import { FaEnvelope } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaFirefoxBrowser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { useState } from "react";








const Card = (value) => {
    // console.log(value)
    const {email, id, imgurl, name, phone, url} = value.value;
    const [isred, setIsred] = useState(false);
    
    const handleRed = () => {
        setIsred(!isred);

        // if(isred === true){
        //     setIsred(false);
        
        // }
        // else if(isred === false){
        //     setIsred(true)

        // }
    }

    return (
        <div className = " border-2 border-black h-fit w-[300px]">
        
        <div className="pt-2 bg-[#f5f5f5] flex justify-center items-center">
        <img src={imgurl}/>
        </div>


<div className="p-4">

    <div>
        <p className="font-bold text-xl text-start">{name}</p>
    </div>
    <div className="flex gap-3 items-center">
        <FaEnvelope />
        <p>{email}</p>
    </div>
    <div className="flex gap-3 items-center">
        <IoIosCall />
        <p>{phone}</p>
    </div>

    <div className="flex gap-3 items-center">
        <FaFirefoxBrowser />
        <p>{url}</p>
    </div>
    </div>

<div className=" bg-[#c9c1c1] flex justify-between text-xl ">
    
<div className="border-r-2 p-2 w-1/3 flex justify-center"  >
<button onClick={handleRed}>
    
     { isred ? <FcLike/>: <CiHeart /> }
   
</button>

</div>

<div className="border-r-2 p-2 w-1/3 flex justify-center">
<button>
<RiPencilFill />
</button>
  
</div>

<div className="border-r-2 p-2 w-1/3 flex justify-center">
<button >
<MdDelete />
</button>

</div>




       
    </div>
 
</div>
    )
}
export default Card;