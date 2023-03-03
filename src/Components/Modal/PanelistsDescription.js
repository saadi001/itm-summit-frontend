import React from 'react';

const PanelistsDescription = ({ data }) => {
     return (
          <div className=''>
               {/* The button to open modal */}


               {/* Put this part before </body> tag */}
               <input type="checkbox" id="my-modal-5" className="modal-toggle" />
               <div className="modal">
                    <div className="modal-box w-11/12 md:w-8/12 max-w-4xl">
                         <img className='w-44' src={data.image} alt="" />
                         <h3 className="font-bold text-xl mt-2">{data.name}</h3>
                         <p className='text-sm text-slate-600'>{data.designation}</p>
                         <div className="py-4 mt-2">
                              {
                                   data?.details?.map(detail => <p className='pb-2'>{detail.details}</p>)
                              }
                         </div>
                         <div>For more: <a className='font-bold hover:underline text-lg' href={data.account} target={'_blank'} >{data.name}</a></div>
                         <div className="modal-action">
                              <label htmlFor="my-modal-5" className="btn bg-pink-700 border-none hover:bg-blue-700">close</label>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PanelistsDescription;