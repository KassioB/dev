import "./styles.css";
import { Button } from "../Button";

interface CardProps {
    title: string;
    completed: boolean;
    id: number;
}

export function Card({id, title, completed}: CardProps) {
    return (
        <div className='card'>
            <input type="checkbox" checked={completed}
            name={id.toString()}/>
            <label htmlFor="">{title}</label>
            <Button>x</Button>
        </div>
    )
}