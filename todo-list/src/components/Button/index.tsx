import type { PropsWithChildren} from "react"
import './styles.css'


export function Button({children}: PropsWithChildren) {
    return (
        <button className='button'>{children} </button>
    )
}