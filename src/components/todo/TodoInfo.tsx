import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type StudentNameType = {
    firstName: string;
    middleName: string;
    lastName: string;
}

type TodoInfoType = {
    id: string;
    studentName: StudentNameType;
    age: number;
    email: string;
    phone: string;
    address: string;
}

const TodoInfo = ({ data }: { data: TodoInfoType[] }) => {

    return (
        <Table className="bg-white rounded-xl">
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center">First Name</TableHead>
                    <TableHead className="text-center">Middle Name</TableHead>
                    <TableHead className="text-center">Last Name</TableHead>
                    <TableHead className="text-center">Age</TableHead>
                    <TableHead className="text-center">Email</TableHead>
                    <TableHead className="text-center">Phone</TableHead>
                    <TableHead className="text-center">Address</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data.map((item: TodoInfoType) => {
                        const { id, studentName: { firstName, middleName, lastName }, age, email, phone, address } = item || undefined;
                        return (
                            <TableRow key={id}>
                                <TableCell>{firstName}</TableCell>
                                <TableCell>{middleName}</TableCell>
                                <TableCell>{lastName}</TableCell>
                                <TableCell>{age}</TableCell>
                                <TableCell>{email}</TableCell>
                                <TableCell>{phone}</TableCell>
                                <TableCell>{address}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}

export default TodoInfo
