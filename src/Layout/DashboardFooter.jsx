import { Link } from "react-router";

const DashboardFooter = () => {
    return (
        <footer className="bg-white  border-t py-4">
            <div className="w-[90%] m-auto flex justify-between">
                <div>
                <div className='md:flex hidden'>
            </div>
                   
                </div>
                
                <div>
                    <ul className="flex gap-2">
                        <Link className="hover:underline" to="/about">About</Link>
                        {/* <Link className="hover:underline" to="/contact">Contact</Link> */}
                    </ul>
                </div>
            </div>
            
        </footer>
    );
};

export default DashboardFooter;