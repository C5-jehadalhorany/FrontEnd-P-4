import './style.css';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import image from "./logo.jpg"
import { useState, useEffect, useContext } from 'react'
import { tokenContext } from '../../App'
import axios from 'axios'
import { useParams } from "react-router-dom";

export const Navbar = () => {


    const navigate = useNavigate();

    const [searchs, setSearchs] = useState("");
    const [search, setSearch] = useState("");
    const [drop, setDrop] = useState("")

    // const [carname,setCarname]=useState("")

    const { isLoggedIn, setIsLoggedIn, token, setToken, carname, setCarname, newSearch, setNewSearch, dropdown, setDropdown } = useContext(tokenContext)

    const logout = () => {
        localStorage.removeItem('token')
        setToken("")
        setIsLoggedIn(false)
        localStorage.setItem("setIsLoggedIn", false)

    }



    const searchcar = () => {
        console.log(carname);

        axios.get((`http://localhost:5000/cars/c/${carname}`), {
        }).then((result) => {
            //    console.log(result);

            setNewSearch(result.data.result)
            setSearchs(result.data.result)
            console.log(result.data.result);
        }).catch((err) => {
            console.log(err);
        })

    }
    useEffect(() => {
        searchcar()
    }, [carname])


    const dorpdowns = () => {
        axios.get((`http://localhost:5000/cars/category/${drop}`)).then((result) => {
            console.log(result);
            setDropdown(result.data.result)
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        dorpdowns()
    }, [drop])


    return (

        <div className='Navbardiv'>
            <div >
                <img src={image} className="Logo" ></img>
            </div>
            <div className='DivSearchAndDrop'>
                <input type="text" placeholder='Search' onChange={(e) => {
                    if (e.target.value === "") {
                        setCarname("z")
                    } else {
                        setCarname(e.target.value)
                        // console.log(searchs);
                        const list = searchs && searchs.map((element, index) => {
                            return <div>
                            </div>
                        })
                        setSearch(list)
                    }
                }} />
                <select onChange={(e) => {
                    if (e.target.value === "") {
                        setDrop("z")
                    }
                    setDrop(e.target.value)
                }}>
                    <option value=""></option>
                    <option value="diesel">diesel</option>
                    <option value="petrol">petrol</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
            </div >
            {token === "" ? <div className='AllLink'>
                <Link to="/">HomePage</Link>
                <Link to="/Register">Register</Link>
                <Link to="/Login">Login</Link>
                {/* <Link to="/Dashboard">Dashboard</Link>
                <Link to="/Dashboard/:id">details</Link> */}


            </div> : <div className='AllLink'>

                <Link to="/">HomePage</Link>
                <Link to="/Dashboard">Dashboard</Link>
                <Link to="/Dashboard/:id">details</Link>
                <Link to="/" onClick={logout}>LogOut</Link>
            </div>}
            {/* <div className='AllLink'>
            <Link to="/Dashboard">Dashboard</Link>
                <Link to="/Dashboard/:id">details</Link>
                <Link to="/">HomePage</Link>
                
                
            </div> */}
        </div>
    )
}
export default Navbar


{/* <Route path="/profile/:id" element={<Profile />} /> */ } // بدي أستخدم هاض الأشي عشان أنتقل من صفحة ل صفحه ثانيه عن طريق الأي دي الي رح يجيني من المعرف