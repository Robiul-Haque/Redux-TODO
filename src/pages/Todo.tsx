import TodoContainer from "@/components/todo/TodoContainer"
import Container from "@/components/ui/Container"
import { useGetTodoQuery } from "@/redux/api/api";

const Todo = () => {
  const { isLoading, isError } = useGetTodoQuery(undefined);

  if (isLoading) {
    return <p className="font-bold text-2xl bg-primary-gradient p-5 rounded-2xl text-white absolute top-[46%] left-[46%]">Loading...</p>
  } else if (isError) {
    return <p className="font-bold text-2xl bg-primary-gradient p-5 rounded-2xl text-white absolute top-[42%] left-[46%]">Something went wrong...</p>
  }

  return (
    <Container>
      <h1 className="text-3xl font-semibold">My Todo</h1>
      <TodoContainer />
    </Container>
  )
}

export default Todo
