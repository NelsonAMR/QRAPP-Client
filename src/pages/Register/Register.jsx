import { useForm } from "react-hook-form";
import { registerRequest } from "../../api/auth";

function Register() {
  const { register, handleSubmit } = useForm();

  const handleClick = handleSubmit(async (values) => {
    try {
      await registerRequest(values);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="username"
          placeholder="Nombre de Usuario"
          {...register("username", { required: "true" })}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electronico"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}
        />

        <button>Registrar</button>
      </form>
    </div>
  );
}

export default Register;
