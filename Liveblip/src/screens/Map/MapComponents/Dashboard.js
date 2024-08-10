import React from 'react'

export default function Dashboard() {
    // Example of a data array that
    // you might receive from an API
    const data = [
        { name: "S21 FE", age: 19, gender: "14" },
        { name: "Opel Astra", age: 19, gender: "2" },
        { name: "IIE MSA", age: 25, gender: "8" },
    ]

    return (
        <div className="dashboard">
            <table>
                <tr>
                    <th>Device Name</th>
                    <th>Up Time</th>
                    <th>Battery</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age} Minutes</td>
                            <td>{val.gender} %</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );

}
