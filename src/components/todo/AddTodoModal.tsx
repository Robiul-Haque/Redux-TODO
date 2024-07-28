import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addTodo } from "@/redux/features/todoSlice"
import { useAppDispatch } from "@/redux/hook"
import { FormEvent, useState } from "react"

const AddTodoModal = () => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useAppDispatch();

    const newTask = {
        id: Math.random().toString(36).substr(2, 6),
        title: task,
        description,
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addTodo(newTask));
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary-gradient text-white rounded-xl font-bold">Add Todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Add your task that you want to finished.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Task
                            </Label>
                            <Input
                                onBlur={(e) => setTask(e.target.value)}
                                id="name"
                                className="col-span-3 rounded-xl"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Description
                            </Label>
                            <Input
                                onBlur={(e) => setDescription(e.target.value)}
                                id="username"
                                className="col-span-3 rounded-xl"
                            />
                        </div>
                    </div>
                    <DialogClose asChild>
                        <DialogFooter>
                            <Button type="submit">Add Task</Button>
                        </DialogFooter>
                    </DialogClose>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddTodoModal
