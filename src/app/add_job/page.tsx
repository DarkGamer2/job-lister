export default function AddJob(){
    return (
        <div>
            <h1>Add Job</h1>
            <div>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title"
                />
                <label htmlFor="description">Description</label>
                <input 
                    type="text" 
                    id="description" 
                    name="description"
                />
                <label htmlFor="location">Location</label>
                <input 
                    type="text" 
                    id="location" 
                    name="location"
                />
                <label htmlFor="salary">Salary</label>
                <input 
                    type="text" 
                    id="salary" 
                    name="salary"
                />
                <div className='text-center'>
                    <button>Add Job</button>
                </div>
            </div>
        </div>
    )
}