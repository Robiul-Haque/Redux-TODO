import { useAppSelector } from "@/redux/hook";
import { Button } from "../ui/button"
import AddTodoModal from "./AddTodoModal"
import TodoCard from "./TodoCard"

const TodoContainer = () => {
    const todo = useAppSelector((state) => state.todo.todo);

    return (
        <div className="bg-white h-full">
            <div className="flex justify-between items-center my-5">
                <AddTodoModal />
                <Button className="bg-primary-gradient text-white rounded-xl font-bold">Filter</Button>
            </div>
            <div className="bg-primary-gradient w-full rounded-xl p-1">
                <div className="bg-white p-6 space-y-3 rounded-xl">
                    {
                        todo.length > 0 ? todo?.map(item => <TodoCard key={item.id} id={item.id} title={item?.title} description={item?.description} complete={Boolean(item?.isCompleted)} />)
                            :
                            <div className="bg-white text-xl font-semibold p-3 flex justify-center items-center">
                                <p>There is no Task pending</p>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoContainer
