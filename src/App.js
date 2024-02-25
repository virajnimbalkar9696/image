import './App.css';
import data from './db.json';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ImageRenderer from './ImageRenderer'; 
import 'ag-grid-enterprise';
import ArrowRenderer from './ArrowRenderer';
import {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import img1 from './logo.svg';


function App() {

  const [columnDefs, setColumnDefs] = useState([
    {field: 'athlete' },
    {field: 'Gender' ,editable:true},
    {field: 'age' ,editable:true ,cellEditor: 'agSelectCellEditor', cellEditorParams: {values: [10, 20, 30, 40, 50,60,70,80,90,100] }},
    {field: 'country' ,enablerowGroup:true},
    {field: 'year' ,editable:true},
    {field: 'date'},
    {field: 'sport'},
    {
      headerName: 'Medals', 
      children: [
        { field: 'gold', headerName: 'Gold' },
        { field: 'silver', headerName: 'Silver' },
        { field: 'bronze', headerName: 'Bronze' }
      ]
    },
    {field: 'total'},
    { field: 'image',cellRenderer: ImageRenderer, cellRendererParams: {
      img: './logo.svg'
   }}
  ]);

  const defaultColDef = useMemo( ()=> (
    {
      sortable: true, 
      filter: true,
      editable:true
    }
  ));
  


  return (
    <div>
      {/* <ImageRenderer /> */}
      {/* <img src={img1} alt="ferfer"/> */}
      <div className="ag-theme-alpine" style={{width: '100%', height: 600}}>
        <AgGridReact 
            
            rowData={data} columnDefs={columnDefs}
            //  animateRows={true} rowSelection='multiple'
            //  defaultColDef={defaultColDef}
            />
      </div>
    </div>
  );
}

export default App;



// import './App.css';

// import {AgGridReact} from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import data from './db.json';
// import 'ag-grid-enterprise';

// import {useState, useRef, useEffect, useMemo} from 'react';

// function App() {

//   const gridRef = useRef();
//   const [rowData, setRowData] = useState();
//   const [columnDefs, setColumnDefs] = useState([
//         { field: 'athlete' },
//         { field: 'age' },
//         { field: 'country' },
//         { field: 'year' },
//         { field: 'date' },
//         { field: 'sport' },
//         { field: 'gold' },
//         { field: 'silver' },
//         { field: 'bronze' },
//         { field: 'total' }
//   ]);
//   const defaultColDef = useMemo( ()=> ( {
//     resizable: true, 
//     enableRowGroup: true
//   }), []);

//   useEffect(() => {
//     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//     .then(result => result.json())
//     .then(rowData => setRowData(rowData))
//   }, []);

//   return (
//     <div className="ag-theme-alpine" style={{height: '100%'}}>
//       <AgGridReact 
//       ref={gridRef}
//           rowData={data} 
//           animateRows={true} 
//           columnDefs={columnDefs} defaultColDef={defaultColDef}   
//           rowGroupPanelShow='always'
//           suppressDragLeaveHidesColumns= {true}
//           suppressMakeColumnVisibleAfterUnGroup= {true}
//           sideBar= {true}  
//           />
//           {/* additional properties shown in the video */}
//           {/* rowGroupPanelShow is always|onlyWhenGrouping|never */}
//           {/* groupDisplayType= 'singleColumn' */}
//           {/* groupDisplayType= 'multipleColumns' */}
//           {/* groupDisplayType= 'groupRows' */}
//           {/* groupDisplayType= 'custom' */}
//           {/* groupHideOpenParents= {true} */}
//           {/* showOpenedGroup= {true} */}
//           {/* groupRowRenderer= 'agGroupCellRenderer' */}   
//     </div>
//   );
// }

// export default App;
