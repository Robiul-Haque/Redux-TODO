import { Button } from "../ui/button"
import AddTodoModal from "./AddTodoModal"
import TodoCard from "./TodoCard"

const TodoContainer = () => {
    return (
        <div className="bg-white h-full">
            <div className="flex justify-between items-center my-5">
                <AddTodoModal />
                <Button className="bg-primary-gradient text-white rounded-xl font-bold">Filter</Button>
            </div>
            <div className="bg-primary-gradient w-full rounded-xl p-1">
                <div className="bg-white p-6 space-y-3 rounded-xl">
                    {/* <div className="bg-white text-xl font-semibold p-3 flex justify-center items-center">
                    <p>There is no Task pending</p>
                    </div> */}
                    <TodoCard />
                    <TodoCard />
                    <TodoCard />
                    <TodoCard />
                </div>
            </div>
        </div>
    )
}

export default TodoContainer
