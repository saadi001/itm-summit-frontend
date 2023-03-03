import React from 'react';
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';
import { AiOutlineDownload } from "react-icons/ai";

const Excelexport = ({excelData, fileName}) => {

     const filetype = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
     const fileExtension = '.xlsx';
     const exportToExcel = async()=>{
          const ws = XLSX.utils.json_to_sheet(excelData);
          const wb = { Sheets: {'data': ws}, SheetNames: ['data']};
          const excelBuffer = XLSX.write(wb, {bookType: 'xlsx', type: 'array'})
          const data = new Blob([excelBuffer], { type: filetype});
          FileSaver.saveAs(data, fileName + fileExtension);
     }
     return (
          <div className='flex items-center gap-1 text-white m-3 rounded'>
               <button onClick={(e)=>exportToExcel(fileName)} className='bg-pink-600 px-3 py-1'><AiOutlineDownload/> </button>
          </div>
     );
};

export default Excelexport;