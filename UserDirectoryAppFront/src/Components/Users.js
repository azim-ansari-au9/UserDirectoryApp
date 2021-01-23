import React from 'react';


const UsersList = ({users,loading}) => {
    // if(laoding) {
    //     return <h2>loading...</h2>
    // }
    return (
        <div className='grid col-md-12'>
            <ul className='user list-group col-md-12'>
                {users.map((user, index )=> (
                    <div className="box  col-md-6">
                        <li key={index.id} className='new list-group-item'>Name : {user['Full Name']}</li>
                        <li key={index.id} className='new list-group-item'>Email : {user.Email}</li>
                        <li key={index.id} className='new list-group-item'>Country: {user.Country}</li>
                        <li key={index.id} className='new list-group-item'>Date of birth: {user['Date of birth']}</li><br />
                    </div>
                ))
                }
            </ul>
        </div>
    )
}
export default UsersList;