import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { tokenContext } from '../../App'
import './style.css';
import { useParams } from "react-router-dom";



const Asc = () => {
    let { id } = useParams()
    const { isLoggedIn, setIsLoggedIn, carname, setCarname, newSearch, dropdown, setDropdown } = useContext(tokenContext)
    // console.log(isLoggedIn);
    const navigate = useNavigate();
    const [cars, setAllcars] = useState([])

    const [details, setDetails] = useState([])


    // this function click for params change the id and return all the detiles 
    const fClick = (element) => {
        console.log(element);
        if (isLoggedIn === true) {
            <div> {navigate("/")}
            // useParams
                <Link to={navigate(`/Dashboard/${element._id}`)} >
                    {setDetails(<div>
                        <p>{element.name}</p>
                        {/* {console.log(element.name)} */}
                        <p>{element.model}</p>
                        <p>{element.description}</p>
                        <p>{element.status}</p>
                        <p>{element.category}</p>
                    </div>)}
                </Link>
            </div>
        } else {
            navigate("/Login")
        }

    }
    const myCar = cars.filter((element, index) => {

        return <div>
            <p>{element.name}</p>
            {/* {console.log(element.name)} */}
            <p>{element.model}</p>
            <p>{element.description}</p>
            <p>{element.status}</p>
            <p>{element.category}</p>
        </div>

    })

    //i need filter here and result in filtresion = setDetails 

    const detail = details && details.map((element, index) => {

        console.log(detail);
        return <Link to={navigate(`/Dashboard/${element._id}`)} >
            <div>
                <p>{element.name}</p>
                {/* {console.log(element.name)} */}
                <p>{element.model}</p>
                <p>{element.description}</p>
                <p>{element.status}</p>
                <p>{element.category}</p>
            </div>
        </Link>
    })



    const Allcars = () => {
        axios.get(("http://localhost:5000/cars")
            , {
            }).then((result) => {
                // console.log(newSearch)
                {
                    {
                        dropdown ? setAllcars(dropdown) : newSearch.length ?
                            setAllcars(newSearch) : setAllcars(result.data.result)
                    }
                    // console.log(setAllcars);
                }
            }).catch((err) => {
                console.log(err);
            })
    }


    useEffect(() => {
        Allcars()
    }, [dropdown])

    useEffect(() => {
        Allcars()
    }, [newSearch])



    // console.log(cars);
    let list = cars && cars.map((elemnet, index) => {
        // console.log(isLoggedIn);
        // console.log(elemnet.img);


        return <div className="imgq">
            <div className="imgFir"> <img className="imgChe" src={elemnet.img}
                onClick={(() => {
                    fClick(elemnet)
                }) /*=> isLoggedIn === true ? <div> {navigate("/")} 

    </div> : navigate("/Login")*/} /> </div>

            {/* <p>{elemnet.name}</p>  */}
            {/* {<p>{elemnet.model}</p>
            <p>{elemnet.description}</p>
            <p>{elemnet.status}</p>
                    <p>{elemnet.category}</p>}  */}

        </div>
    })

    return <div>
        {list}
        {/* {detail} */}
        {/* {myCar} */}
    </div>
}
export default Asc