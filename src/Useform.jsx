import { useForm } from "react-hook-form";
import './Useform.css';
import Container from 'react-bootstrap/Container';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema=yup
  .object({
    firstName:yup.string().required("Name is required").min(3, "Minimum 3 characters")
  }).required()
function Useform() {
  const { register, handleSubmit,formState:{errors}, } = useForm({resolver:yupResolver(schema),});
  const onSubmit = (data) => console.log(data);
  return (
    <Container className="container-sm">
      <h3 style={{ textAlign: "center" }}>APPLICATION FORM</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label> <br />
        <input placeholder="Enter your name" {...register("firstName")} className="input"/> <br /> <br />
        <p>{errors.firstName?.message}</p>
         <label>Name:</label> <br />
        <input placeholder="Enter your name" {...register("firstName")} className="input"/> <br /> <br />
        <input type="submit" />
      </form>
    </Container>
  );
}

export default Useform;
