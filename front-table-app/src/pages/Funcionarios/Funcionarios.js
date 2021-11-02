import React from "react";
import Table from "../../components/Table/Table";
import useRequestData from "../../hooks/useRequestData"
import { urlBase } from "../../parameters/urlBase";

const Funcionarios = () => {
    const { data, getAll } = useRequestData(`${urlBase}`);
    console.log("data", data)

    return(
        <>
        <Table data={data}/>
        </>
    )
}
export default Funcionarios;