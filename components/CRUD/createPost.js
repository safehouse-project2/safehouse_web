 import { database } from '../../pages/firebase'
    import { useState } from 'react'

export default function submitPost() {
    const [post, setPost] =useState({
        name: '',
    })

    function submitPost(e) {
        e.preventDefault()
        database.posts.add({
            name: post.name,
    })

    setPost({
        name: ''
    })
}



return (
    <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
    <div className="px-6 py-4">
  

      <form onSubmit={submitPost} className="flex flex-col">
        <label htmlFor="name" className="mb-2 ">Name</label>
        <input
          className="mb-4 border-b-2"
          id="name"
          name="name"
          type="text"
          required
          onChange={(e) => setPost({ ...post, name: e.target.value })}
        />
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
 
  
}
