import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addCategoryStart, updateCategoryStart } from '../../../redux/action/category.action';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebaseConfig';
import { toast } from 'react-toastify';

let initialState = {
  name: '',
  image: '',
  status: ''
}

export default function AddOrEditCategory() {

  let categories = useSelector(state => state.category.categories)

  let { id } = useParams();

  if (id) {
    let category = categories.find((cat) => cat.id === id);

    if (category) {

      delete category.id

      initialState = { ...category };
    }
  } else {
    initialState = {
      name: '',
      image: '',
      status: ''
    }
  }

  const dispatch = useDispatch();

  const navigate = useNavigate();

  let [formData, setFormData] = useState(initialState);

  let { name, image, status } = formData;

  const inputChange = (event) => {

    setFormData((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value
    }))
  }

  const fileChange = (event) => {
    uploadFile(event.target.files[0]);
  }

  const uploadFile = (file) => {

    const storageRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case 'paused':
            // console.log('Upload is paused');
            break;
          case 'running':
            // console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData((prevValue) => ({
            ...prevValue,
            image: downloadURL
          }))
        });
      }
    );
  }

  const submit = (event) => {
    event.preventDefault();

    if (id) {
      dispatch(updateCategoryStart(id, formData))
      toast.success("Category updated successfully")
    } else {
      dispatch(addCategoryStart(formData))
      toast.success("Category added successfully")

    }

    setTimeout(() => {
      navigate('/admin/category')
    }, 2000)
  }

  return (
    <div className="card">
      <div className="card-header bg-primary text-white d-flex justify-content-between">
        <div>Add Category</div>
        <div><Link to="/admin/category" className='btn btn-success'>Back</Link></div>
      </div>
      <div className="card-body">
        <form onSubmit={submit}>
          <div className="mb-4">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name='name'
              value={name}
              onChange={inputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input className="form-control" type="file" id="image" onChange={fileChange} />

            {image && <div className='mt-2'><img src={image} style={{
              height: "50px"
            }} /></div>}
          </div>
          <div className='mb-3'>
            <label htmlFor="status">Status</label>
            <select
              className="form-control"
              id='status'
              name='status'
              defaultValue={status}
              onChange={inputChange}>
              <option hidden>Select Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
