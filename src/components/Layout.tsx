
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div
            className='min-h-screen flex flex-col'
        >
            <header
                className='bg-gray-800 text-white'
            >
                <div className="container mx-auto p-4">
                    <Link to='/'>My App</Link>
                </div>
            </header>
            <main
                className='flex-1 p-4 container mx-auto'
            >
                <Outlet />
            </main>

        </div>
    )
}

export default Layout