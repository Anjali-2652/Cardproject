import { useForm } from "react-hook-form";

const DataModal = (props) =>{
    const {onSubmit} = props;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return(
        <div className="bg-white h-screen w-full fixed bg-opacity-65  flex items-center justify-center">
            <form onSubmit = {handleSubmit(onSubmit)} className="h-fit w-[350px] border-2 border-black bg-white justify-between p-3 flex flex-col gap-4">
                
                <div className="flex justify-between ">
                <p className="text-xl font-bold">Basic Modal</p>
                <p className="text-xl cursor-pointer">X</p>
                </div>
          
            <div className="flex justify-between">
                <p>Name:</p>
                <input  className = " border-2"type="text" {...register("name")} />
            </div>

            <div className="flex justify-between">
                <p>Email:</p>
                <input   className = " border-2" type="email" {...register("email")} />
            </div>

            <div className="flex justify-between">
                <p>Phone:</p>
                <input  className = " border-2" type="number" {...register("phone")} />
            </div>

            <div className="flex justify-between">
                <p>Website:</p>
                <input  className = " border-2" type="url" {...register("website")} />
            </div>

            <div className="flex justify-between">
                <p>Imageurl:</p>
                <input  className = " border-2" type="text" {...register("imageurl")} />
            </div>

            <button type="submit"  className="bg-blue-950 rounded-lg  text-white text-2xl font-sans p-1"> Submit </button>
            </form>
        </div>
    );
};

export default DataModal