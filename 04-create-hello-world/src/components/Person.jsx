import React from 'react';
import { nanoid as getNanoId } from 'nanoid'
const Person = ({ id, name, age, birthday, flag, hobbies, children }) => {
    return (<>
        <h5>Person number #{id}</h5>
        <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Birthday: {birthday.getFullYear()}</li>
            <li>Flag: {flag ? "true" : "false"}</li>
            <li>Children: {children}</li>
            <li>Hobbies
                <ul>
                    {
                        hobbies.map(hobbie => {
                            return (<li key={getNanoId()}>{hobbie}</li>)
                        })
                    }
                </ul>
            </li>
        </ul>
    </>)
}

export default Person