import { BiError } from "react-icons/bi";

interface FormErrorProps {
    message?: string;
}
 
const FormError: React.FunctionComponent<FormErrorProps> = ({message}) => {

    if(!message) return null;

    return (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <BiError size={16}/> 
            <p>{message}</p>
        </div>
    );
}
 
export default FormError;