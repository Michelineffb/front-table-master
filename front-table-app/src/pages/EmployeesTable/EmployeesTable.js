import moment from "moment";
import React, { useState } from "react";
import useRequestData from "../../hooks/useRequestData"
import { urlBase } from "../../parameters/urlBase";
import { ImgEmployees, HeadT, ThFoto, Tbody, Row, TdDate, Tr, Input, ContainerInputName } from "./styled";
import formatPhoneNumber from "../../parameters/formatPhoneNumber";


const EmployeesTable = () => {
    const [searchInput, setSearchInput] = useState('')
    const { data, getAll } = useRequestData(`${urlBase}`);


    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const HeadTable = () => { //dados do título das colunas
        return (
            <HeadT>
                <Tr>
                    <th>FOTO</th>
                    <th>NOME</th>
                    <th>CARGO</th>
                    <th>DATA DE ADMISSÃO</th>
                    <th>TELEFONE</th>
                </Tr>
            </HeadT>
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
                    const dateFormat = moment(dado.admission_date, "YYYY/MM/DD").format("DD/MM/YYYY")

                    return (
                        <Row>
                            <td><ImgEmployees src={dado.image} alt="foto funcionário" width="50px" /></td>
                            <td>{dado.name}</td>
                            <td>{dado.job}</td>
                            <td>{dateFormat}</td>
                            <td>{formatPhoneNumber(dado.phone)}</td>
                        </Row>
                    )
                })}
            </tbody>
        )
    }

    return (
        <>
            <ContainerInputName>
                <p>Funcionários</p>
                <Input type="text" placeholder="Pesquisar" onChange={handleChange} />
            </ContainerInputName>

            <table>
                <HeadTable />
                <RowTable />
            </table>
        </>
    )
}

export default EmployeesTable;