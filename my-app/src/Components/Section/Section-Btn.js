export default function Buttons({children, onSelect}){
 
    return <li>
        <button onClick={onSelect}>{children}</button>
        </li>
};
