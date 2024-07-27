import { ReactNode } from "react"

type containerTypeProps = {
    children: ReactNode
}

const Container = ({ children }: containerTypeProps) => {
    return (
        <div className="h-screen w-full max-w-8xl mx-auto">{children}</div>
    )
}

export default Container
