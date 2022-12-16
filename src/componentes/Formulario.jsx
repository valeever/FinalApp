import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Formulario = () => {

  const URL = 'http://finalappback-production.up.railway.app';

  const [inputs, setInputs] = useState({
    nombre: "",
    apellido: "",
    dni: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    await axios.post(URL, inputs);
    setInputs({
      nombre: "",
      apellido: "",
      dni: "",
    });

    Swal.fire({
      title: "Dato enviado Correctamente",
      text: "Gracias por enviar sus Datos",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="m-4">¿Ya compraste? Anotate!! </h2>
      {Object.keys(inputs).map((key, index) => (
        <Form.Group className="pt-3" key={index} style={{ maxWidth: "200px" }}>
          <Form.Label id="form">
            {key === "dni"
              ? key.toUpperCase()
              : key[0].toUpperCase() + key.slice(1)}
          </Form.Label>
          <Form.Control
            name={key}
            value={inputs[key]}
            onChange={handleChange}
          />
        </Form.Group>
      ))}
      <Button className="mt-3" onClick={handleClick}>
        Enviar
      </Button>
    </div>
  );
};

export default Formulario;
