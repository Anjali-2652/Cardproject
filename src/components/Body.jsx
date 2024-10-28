import Card from "./Card"
import {Data} from '../../Data'
import DataModal from "./DataModal";

const Body = () => {

    const onSubmit = (data) =>{
        console.log(data);
    };
    return(
        <div className="flex flex-wrap gap-4">
            <DataModal onSubmit = {onSubmit}/>
            {Data.map((val) =>(
            <Card value = {val}/>
            ))}
        </div>
    )
}

export default Body;