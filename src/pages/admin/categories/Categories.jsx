import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCategoryStart } from '../../../redux/action/category.action';

export default function Categories() {
  let categories = useSelector(state => state.category.categories)

  const dispatch = useDispatch();

  useEffect(() => {
      
  }, [categories.length])
  return (
    <div className="card">
      <div className="card-header bg-primary text-white d-flex justify-content-between">
        <div>Category</div>
        <div><Link to="/admin/category/create" className='btn btn-success'>Add Category</Link></div>
      </div>
      <div className="card-body ">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S No</th>
              <th>Name</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              categories.length > 0 && categories.map((category, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{category.name}</td>
                  <td>
                    <img src={category.image} alt="" style={{
                      height: "50px"
                    }} />
                  </td>
                  <td>
                    <Link to={`/admin/category/edit/${category.id}`} className='btn btn-warning mx-2'>Edit</Link>
                    <button className='btn btn-danger' onClick={() => dispatch(deleteCategoryStart(category))}>Delete</button>
                  </td>
                </tr>
              ))
            }


          </tbody>
        </table>
      </div>
    </div>
  )
}
