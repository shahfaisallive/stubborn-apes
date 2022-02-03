import React from 'react';

const AdminScreen = ({accountAddress}) => {
    return <div className='container-fluid admin-wrapper'>
        <div className='container'>
            <div className='row d-block justify-content-center mt-5'>
                <p className='heading1 text-center'>Owner Portal</p>
                <span className='d-flex justify-content-center'><p className='font-weight-bold text-light'>Owner Address:</p><p className='text-light ml-3'>{accountAddress}</p></span>
            </div>

        </div>
    </div>
};

export default AdminScreen;
