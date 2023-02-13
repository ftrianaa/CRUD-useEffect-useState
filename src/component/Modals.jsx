export default function Modals(props) {
    const handleAdd = props.handleAdd
    const handleInputEmail = props.handleInputEmail
    const handleInputName = props.handleInputName
    const handleInputPhone = props.handleInputPhone
    const closeModal = props.closeModal
    const page = props.page
    const userData = props.userData
    const handleDelete = props.handleDelete
    const textPhone = props.textPhone
    const textName = props.textName
    const textEmail = props.textEmail
    const handleEdit = props.handleEdit
    return (
        <div className="modals">
            <div className="modals-frame">
                {page === 'add' ? <div className="form">
                    <h1>Add User</h1>
                    <div className="form-control">
                        <label>Name: </label>
                        <input type='text' onChange={handleInputName} />
                    </div>
                    <div className="form-control">
                        <label>Email: </label>
                        <input type='text' onChange={handleInputEmail} />
                    </div>
                    <div className="form-control">
                        <label>Phone: </label>
                        <input type='text' onChange={handleInputPhone} />
                    </div>
                    <div className="button-form">
                        <button onClick={closeModal}>Cancel</button>
                        <button onClick={handleAdd}>Add</button>
                    </div>
                </div> : <></>
                }
                {page === 'edit' ?
                    <div className="form">
                        <h1>Edit User</h1>
                        <div className="form-control">
                            <label>Name: </label>
                            <input type='text' onChange={handleInputName} value={textName} />
                        </div>
                        <div className="form-control">
                            <label>Email: </label>
                            <input type='text' onChange={handleInputEmail} value={textEmail} />
                        </div>
                        <div className="form-control">
                            <label>Phone: </label>
                            <input type='text' onChange={handleInputPhone} value={textPhone} />
                        </div>
                        <div className="button-form">
                            <button onClick={closeModal}>Cancel</button>
                            <button onClick={handleEdit}>Edit</button>
                        </div>
                    </div> : <></>}
                {page === 'del' ? <div>
                    <h1>Delete User</h1>
                    <p>Are you sure want to delete data "<b>{userData.name}</b>"?</p>
                    <div className="button-form">
                        <button onClick={closeModal}>Cancel</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div> : <></>}
            </div>
        </div>
    )
}