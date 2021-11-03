import React, { useEffect, useState } from "react";
import Search from "../Search/Search";

const Table = ({ data }) => {
    const [ search, setSearch ] = useState('')
console.log('sear',search)
    
    const handleChange = (event) => {
        setSearch(event.target.value)
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
                    if(!search){
                        return dado
                    } else if(dado.name.toLowerCase().includes(search.toLowerCase()) || dado.job.toLowerCase().includes(search.toLowerCase()) || dado.admission_date.toLowerCase().includes(search.toLowerCase())){
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
        <Search handleChange={ handleChange }/>
        <table>
            <HeadTable />
            <RowTable />
        </table>
        </>
    )
}

export default Table;