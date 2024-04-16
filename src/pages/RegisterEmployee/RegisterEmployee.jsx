import { useForm } from "react-hook-form";
import styles from "./RegisterEmplyee.module.css";
import { axiosAPI } from "../../utils/axiosInstance";
import Swal from "sweetalert2";
import { useState } from "react";

function RegisterEmployee() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const handleClick = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await axiosAPI.post("/employees", data);
      Swal.fire({
        title: "Empleado registrado correctamente",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
      reset();
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error al registrar el empleado",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className={styles.container}>
      <form action="submit" className={styles.form} onSubmit={handleClick}>
        <div className={styles.form_camp}>
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre completo del empleado"
            {...register("name", { required: "true" })}
          />
        </div>

        <div className={styles.form_camp}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ejemplo@email.com"
            {...register("email", { required: "true" })}
          />
        </div>

        <div className={styles.form_camp}>
          <label htmlFor="employee_id">N° Empleado</label>
          <input
            type="number"
            id="employee_id"
            name="employee_id"
            placeholder="000"
            {...register("employee_id", { required: "true" })}
          />
        </div>

        <button
          className={styles.button}
          style={{ cursor: `${loading ? "wait" : "pointer"}` }}
          disabled={loading}
        >
          {loading ? "Registrando..." : "Registrar"}
        </button>
      </form>
    </div>
  );
}

export default RegisterEmployee;
