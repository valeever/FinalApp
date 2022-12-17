    import React, { useState, useEffect } from "react";
    import axios from "axios";
    import { Table, Button } from "react-bootstrap";
    import Swal from "sweetalert2";

    const Main = () => {

    const [personas, setPersonas] = useState([]);

    const URL = "https://finalappback-production.up.railway.app/";

    const getPersonas = async () => {
        try {
        const { data } = await axios.get(URL);
        setPersonas(data.persona);
        console.log(data.persona);
        } catch (error) {
        console.error(error);
        }
    };

    useEffect(() => {
        getPersonas();
    }, []);

    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
        title: "Está seguro de ELIMINAR?",
        showDenyButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: `No Eliminar`,
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            axios.delete(`${URL}${id}`);
            Swal.fire("Eliminado", "", "success");
            getPersonas();
        } else if (result.isDenied) {
            Swal.fire("Sus datos no se eliminaron");
        }
        });

        //axios.delete(URL + id)
        //axios.delete(`http://localhost:3001/${id}`);
    };

    return (
        <div className="container text-center m-5">
        <h2 className="m-4">Personas que están esperando que la suerte los sorprenda</h2>
        <Table className="table m-4">
            <thead className="m-4">
            {/*  <th>ID</th> */}
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            </thead>
            <tbody className="m-4">
            {personas.map((persona=> 
                <tr>
                {/* <td>{persona._id}</td> */}
                <td>{persona.nombre}</td>
                <td>{persona.apellido}</td>
                <td>{persona.dni}</td>
                <td>
                    <Button
                    variant="danger"
                    onClick={() => handleDelete(persona._id)}
                    className="mt-3"
                    >
                    Delete
                    </Button>
                </td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
    );
    };

    export default Main;
