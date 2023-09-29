import {Link, useNavigate} from 'react-router-dom'

export default function Header() {
    /// useNavigate : link 컴포넌트를 사용하지않고 사용자를 이동시키는 기능
    const navi = useNavigate();
    const onclick = () => {
        navi('redirect');
    }

    //Link : 유저가 직접 크릭
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/user'>User</Link>
                </li>
                <li>
                   <button onClick={onclick}>Redirect</button>
                </li>
            </ul>
        </div>
    )
}