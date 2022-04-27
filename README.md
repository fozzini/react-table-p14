# simple-table-library

> For support for **react <18.0.0**,**react-dom <18.0.0**,**react-scripts <5.0.0**


## Installation
Run the following command:
`npm i table-plugin`

## Usage

```js
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import TableEmployee from 'table-plugin/dist/TableEmployee';

const EmployeeList = () => {
  const rows = useSelector(state => state.employeesList);
  const editable = rows.map(o => ({ ...o }));
  return (
    <div>
      <Header/>
      <div id="employee-div" className="container">
        <TableEmployee data={editable}/>
      </div>
      <Footer/>
    </div>
  );
};

export default EmployeeList;

...
```

```
## CSS

```css

.table{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 100%;
    min-height: 100%;  
}
#employee-div{
    justify-content: flex-start;
}
.listTitle {
    font-size:medium;
}
