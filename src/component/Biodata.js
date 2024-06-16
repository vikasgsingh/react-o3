import React, { useState } from "react";

const Biodata = () => {
    const [records, Setrecords]=useState(Biodata)

    const Biodata=[
        {
            name: 'vikas',
            city: 'noida',
            age: 25
        },
        {
            name: 'sanjeev',
            city: 'delhi',
            age: 24
        }
    ];


    const clearRecords = () => {
        Setrecords([]);
    };

    return (
        <>
            <h1>Biodata</h1>
            {
                records.map((item,id) => (
                    <div key={id}>
                        <h2>{item.name}</h2>
                        <h2>{item.city}</h2>
                        <h2>{item.age}</h2>
                    </div>
                ))
            }
            <button className="btn" onClick={clearRecords}>Clear Records</button>
        </>
    );
};

export default Biodata;
