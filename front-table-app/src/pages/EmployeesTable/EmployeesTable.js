import React, { useState } from "react";
import useRequestData from "../../hooks/useRequestData"
import { urlBase } from "../../parameters/urlBase";

const EmployeesTable = () => {
    const [searchInput, setSearchInput] = useState('')
    const { data, getAll } = useRequestData(`${urlBase}`);
    

    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const HeadTable = () => { //dados do título das colunas
        return (
            <thead>
                <tr>
                    <th>FOTO</th>
                    <th>NOME</th>
                    <th>CARGO</th>
                    <th>DATA DE ADMISSÃO</th>
                    <th>TELEFONE</th>
                </tr>
            </thead>
        )
    }

    const RowTable = () => { //dados das linhas
        return (
            <tbody>
                {data && data.filter((dado) => {
                    if (!searchInput) {
                        return dado
                    } else if (dado.name.toLowerCase().includes(searchInput.toLowerCase()) || dado.job.toLowerCase().includes(searchInput.toLowerCase()) || dado.admission_date.toLowerCase().includes(searchInput.toLowerCase())) {
                        return dado
                    }
                }).map((dado) => {
                    return (
                        <tr key={dado.id}>
                            <td><img src={dado.image} alt="foto funcionário" width="50px" /></td>
                            <td>{dado.name}</td>
                            <td>{dado.job}</td>
                            <td>{dado.admission_date}</td>
                            <td>{dado.phone}</td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    return (
        <>
            <input type="text" placeholder="Pesquisar" onChange={handleChange} />
            <table>
                <HeadTable />
                <RowTable />
            </table>
        </>
    )
}

export default EmployeesTable;