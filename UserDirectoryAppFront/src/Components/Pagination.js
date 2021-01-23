import React from 'react'

const Pagination = ({usersPerPage,totalUsers,paginate}) => {
    const pageNumbers = [];

    for (let i=0; i<=Math.ceil(totalUsers/usersPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
        <ul className='pagination text-center col-md-10'>
            {
                pageNumbers.map(number=>(
                    <li key={number} className='user-item'>
                        <a onClick={()=>paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>

                ))
            }
        </ul>
        </nav>
    )
}
export  default Pagination;