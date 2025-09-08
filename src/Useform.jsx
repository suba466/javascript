import { useForm } from "react-hook-form";
import './Useform.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "react-bootstrap/Button";

const schema = yup.object({
  firstName: yup.string().required("Name is required").min(3, "Minimum 3 characters"),
  dob: yup.date().transform((value, originalValue) => {
    return originalValue === "" ? null : value;
  })
    .required("Date of birth is required")
    .max(new Date(), "DOB cannot be in future..")
    .test("age", "You must be at least 18 years old", function (value) {
      if (!value) return false;
      const today = new Date();
      const birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age >= 18;
    }),
  mail: yup.string().required("Email id is required").email("Enter a valid mail id")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a proper email (e.g. abc@gmail.com)"),
  num: yup.string().required("Enter your mobile number")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .matches(/^[6-9][0-9]{9}$/, "Mobile number starts with 6,7,8 or 9"),
  pass: yup.string().required("Create your password")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters, include uppercase, lowercase, number & special characters"),
  pass1: yup.string().required("Confirm your password").oneOf([yup.ref("pass")], "Password doesn't match"),
  edu: yup.string().required("Select any one"),
  account: yup.string().required("Select any one"),
  gender: yup.string().required("Select any one of these"),
  acc: yup.array().min(1,"Select at least one of these"),
  file: yup.mixed().required("Upload your documents"),
}).required();

function Useform() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",defaultValues: {acc:[]}
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Container className="container-sm">
      <h3 style={{ textAlign: "center" }}>APPLICATION FORM</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Name:</InputGroup.Text>
          <Form.Control
            placeholder="Enter your name..."
            {...register("firstName")}
          />
        </InputGroup>
        <p style={{ color: "red" }}>{errors.firstName?.message}</p>
        <InputGroup className="mb-3">
          <InputGroup.Text>Date Of Birth:</InputGroup.Text>
          <Form.Control type="date" {...register("dob")} />
        </InputGroup>
        <p style={{ color: "red" }}>{errors.dob?.message}</p>
        <InputGroup className="mb-3">
          <InputGroup.Text>Email Id:</InputGroup.Text>
          <Form.Control
            placeholder="Enter your email address..."
            {...register("mail")}
          />
        </InputGroup>
        <p style={{ color: "red" }}>{errors.mail?.message}</p>
        <InputGroup className="mb-3">
          <InputGroup.Text>Mobile number:</InputGroup.Text>
          <Form.Control
            placeholder="Enter your mobile number..."
            {...register("num")}
          />
        </InputGroup>
        <p style={{ color: "red" }}>{errors.num?.message}</p>
        <InputGroup className="mb-3">
          <InputGroup.Text>Create password:</InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Create password..."
            {...register("pass")}
          />
        </InputGroup>
        <p style={{ color: "red" }}>{errors.pass?.message}</p>
        <InputGroup className="mb-3">
          <InputGroup.Text>Confirm password:</InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Confirm password..."
            {...register("pass1")}
          />
        </InputGroup>
        <p style={{ color: "red" }}>{errors.pass1?.message}</p>
        <Form.Group className="mb-3">
          <Form.Label>Educational Level:</Form.Label>
          <Form.Select {...register("edu")}>
            <option value="">Select</option>
            <option value="High school or below">High school or below</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="PhD">PhD</option>
          </Form.Select>
        </Form.Group>
        <p style={{ color: "red" }}>{errors.edu?.message}</p>
        <Form.Group className="mb-3">
          <Form.Label>Account Type:</Form.Label>
          <Form.Select {...register("account")}>
            <option value="">Select</option>
            <option value="Checking account">Checking account</option>
            <option value="Savings account">Savings account</option>
            <option value="Money market account">Money market account</option>
            <option value="IRA account">IRA account</option>
          </Form.Select>
        </Form.Group>
        <p style={{ color: "red" }}>{errors.account?.message}</p>
        <Form.Group className="mb-3">
          <Form.Label>Gender:</Form.Label>
          <div  >
            <Form.Check 
              inline
              label="Male"
              type="radio"
              value="male"
              {...register("gender")}
            />
            <Form.Check
              inline
              label="Female"
              type="radio"
              value="female"
              {...register("gender")}
            />
            <Form.Check
              inline
              label="Other"
              type="radio"
              value="other"
              {...register("gender")}
            />
          </div>
        </Form.Group>
        <p style={{ color: "red" }}>{errors.gender?.message}</p>
         <Form.Group className="mb-3">
          <Form.Label>Service required:</Form.Label>     
        <div >
          <Form.Check
            label="ATM card"
            type="checkbox"
            value="ATM card"
            {...register("acc")}
          />
          <Form.Check
            label="SMS alerts"
            value="SMS alerts"
            type="checkbox"
            {...register("acc")}
          />
          <Form.Check
            label="Net banking"
            value="Net banking"
            type="checkbox"
            {...register("acc")}
          />
          <Form.Check
            label="Checkbook"
            value="Checkbook"
            name="group1"
            type="checkbox"
             {...register("acc")}
          />
        </div>
    </Form.Group><p style={{ color: "red" }}>{errors.acc?.message}</p>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" {...register("file")}/>
      </Form.Group><p style={{ color: "red" }}>{errors.file?.message}</p>
      <div className="text-center">
        <Button type="submit" variant="outline-danger" className="px-4 py-2">Submit</Button></div>
      </Form>
    </Container>
  );
}

export default Useform;
