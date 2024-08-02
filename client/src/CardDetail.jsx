import React from 'react'

const CardDetail = ({nomP,capital,habitant,maps,idd}) => {

    const styleBack = {
        backgroundImage:`url(${maps})`,
        backgroundSize:'cover',
        backgroundPosition: 'center'
    
    }
    
  return (
    
        <div className=' absolute z-10 flex gap-2 bg-white border rounded w-1/4 h-44 drop-shadow'>
                <div id={idd} className='p-3 h-auto w-full  rounded relative-h-screen '>
                    <p className=' flex flex-col'><span className=' text-md font-semibold text-blue-600'>Nom du pays:</span> {nomP}</p>
                        <p className=' flex flex-col'><span className=' text-md font-semibold text-blue-600'>Capital:</span> {capital}</p>
                        <p className=' flex flex-col'><span className=' text-md font-semibold text-blue-600'>population:</span> {`${habitant} habitants`} </p>
                    

                </div>

                
        </div>

    
  )
}

export default CardDetail


//

//