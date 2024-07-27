
const TodoContainer = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <button>Add Todo</button>
                <button>Filter</button>
            </div>
            <div className="bg-red-500 w-full h-[500] rounded-xl">
                <div className="flex justify-between">
                    <input type="checkbox" name="" id="" />
                    <p>Title</p>
                    <p>Description</p>
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoContainer
