const TableHead = (props) => {

    

    const tableHeaders = props.headers.map((header, index) => (
      <th key={index} scope={header.scope}>
        {header.text}
      </th>
    ));
  
    return (
      <thead>
        <tr>{tableHeaders}</tr>
      </thead>
    );
  };
  
  export default TableHead;