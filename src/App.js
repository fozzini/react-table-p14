import React from 'react';
import TableEmployee from './lib/TableEmployee';

const App = () => {
  const rows = [{
    firstName: 'Natalia Romanova',
    lastName: 'Black Widow',
    startDate: 26,
    department: "office",
    dateOfBirth: "26/05/1979",
  },]
  // const rows = useSelector(state => state.employeesList);
  const editable = rows.map(o => ({ ...o }));
  return (
    <div>
      <TableEmployee data={editable}/>
    </div>
  );
};

export default App;
