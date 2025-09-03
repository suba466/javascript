import { useForm } from 'react-hook-form';

function Loginform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Name:", data.name); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ fontFamily: 'Poppins, sans-serif', padding: '20px' }}>
      <label>Name: </label>
      <input
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters",
          },
        })}
        style={{ padding: '8px', marginBottom: '10px', width: '100%' }}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

      <button type="submit" style={{ padding: '10px', marginTop: '10px' }}>Submit</button>
    </form>
  );
}

export default Loginform;
