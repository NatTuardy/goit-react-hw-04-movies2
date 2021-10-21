import { useForm } from "../../../shared/components/hooks/useForm";
import InputField from "../../../shared/components/InputField/InputField";
import { initialState } from "./initialState";
import { fields } from "./fields";

const MovieSerchForm = ({onSubmit}) => {
    const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit)
    return ( 
        <form onSubmit={handleSubmit}>
            <InputField  onChange={handleChange} 
            {...fields.searchMovie}
            value={data.searchMovie}
            />
        </form>
     );
}
 
export default MovieSerchForm;

