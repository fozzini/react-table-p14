import React, { useState } from 'react';
import { Table } from '@codbear/reactable';


const columnItems = [
  { header: "First Name", dataField: "firstName", isSortable: true,},
  { header: "Last Name", dataField: "lastName", isSortable: true,},
  { header: "Start Date", dataField: "startDate", isSortable: true,},
  { header: "Department", dataField: "department", isSortable: true, },
  { header: "Date Of Birth", dataField: "dateOfBirth", isSortable: true,}, 
  { header: "Street", dataField:"street", isSortable: true,},
  { header: "City", dataField:"city", isSortable: true,},
  { header: "State", dataField:"state", isSortable: true,},
  { header: "Zip Code", dataField:"zipCode", isSortable: true,},
]

const TableEmployee = (props) => {
  
  const [itemsPerPage, setItemsPerPage] = useState(5);
  return (
    <div className="table" >
      <p className="listTitle" role="region" aria-label="list title" >Employees List</p>
      <Table 
      data={props.data} 
      columns={columnItems} 
      itemsPerPage={itemsPerPage}
      onChangeItemsPerPage={setItemsPerPage}
      itemsPerPageOptions={[5, 10, 25, 50, 100]}
      variant="filled"
      hasSearchBar
      />
    </div>
  );
};

const id = document.getElementsByClassName("iqBCQs")

for (let index = 0; index < id.length; index++) {
  const element = id[index];
  const keys = Object.keys(element);
  const key = keys[1]
  const object = element[key]
  delete element.key
  element.removeAttribute("aria-description")
  console.log(object)
}

export default TableEmployee;