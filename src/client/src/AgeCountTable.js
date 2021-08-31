import React, {useEffect} from 'react';
import {ButtonGroup} from "react-bootstrap";
import {DropdownButton} from "react-bootstrap";
import {Dropdown} from "react-bootstrap";
import './AgeCountTable.css';

const AgeCountTable = ()=>{
    const [item, setItem] = React.useState('');
    const [ageTable, setAgeTable] = React.useState([]);

    useEffect(()=> {
        if(item){
                fetch(`http://localhost:3000/users/${item}`)
                    .then(res=>res.json())
                    .then(response=>setAgeTable(response))
                    .catch(err=>console.log(err));
        }
    },[item]);

    const handleSelect = (e) => {
        setItem(e);
    };


    return(
        <>
            <div className="container">
                <div className="ageTable">
                    <h3>Age Demographic of Users with _</h3>
                    <DropdownButton
                        as={ButtonGroup}
                        key={'Item'}
                        id={`dropdown-variants-${'Item'}`}
                        variant={'Primary'.toLowerCase()}
                        title={'Item'}
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey='carrot'>carrot</Dropdown.Item>
                        <Dropdown.Item eventKey='apple'>apple</Dropdown.Item>
                        <Dropdown.Item eventKey='grapes'>grapes</Dropdown.Item>
                        <Dropdown.Item eventKey='cake'>cake</Dropdown.Item>
                        <Dropdown.Item eventKey='tv'>tv</Dropdown.Item>
                        <Dropdown.Item eventKey='crackers'>crackers</Dropdown.Item>
                        <Dropdown.Item eventKey='chips'>chips</Dropdown.Item>
                        <Dropdown.Item eventKey='ham'>ham</Dropdown.Item>

                    </DropdownButton>
                    <div className="ageTable">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Age</th>
                                <th scope="col">Count</th>
                            </tr>
                            </thead>
                            <tbody>
                            {ageTable.map((row,index)=>(
                                <tr key={index}>
                                    <td>{row.age}</td>
                                    <td>{row.count}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgeCountTable;
