import { useEffect, useState } from "react";
import { axiosAPI } from "../../utils/axiosInstance";
import { formateDate, formateTime } from "../../utils/timeFormate";
import styles from "./Record.module.css";

function Record() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const { data } = await axiosAPI("/records");
        setRecords(data);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.table_header}>
          <tr>
            <th>Nombre</th>
            <th>N° Empleado</th>
            <th>Fecha</th>
            <th>Entrada</th>
            <th>Salida</th>
          </tr>
        </thead>
        <tbody className={styles.table_body}>
          {records?.map((record) => (
            <tr key={record._id}>
              <td>{record.employee.name}</td>
              <td>{record.employee.employee_id}</td>
              <td>{formateDate(record.date)}</td>
              <td>{formateTime(record.entry)}</td>
              <td>{formateTime(record.departure)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <input type="text" autoFocus={true} style={{ opacity: 1 }} />
    </div>
  );
}

export default Record;
