import React from "react";

const Table = ({ data }) => {

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
                {data && data.map((dado) => {
                    return (
                        <tr>
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
        <table>
            <HeadTable />
            <RowTable />
        </table>
    )
}

export default Table;