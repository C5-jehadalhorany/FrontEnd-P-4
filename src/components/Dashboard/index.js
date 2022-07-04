import { tokenContext } from "../../App"
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";



const Dashboard = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const img = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "g8h8bvh3")
        data.append("cloud_name", "jehadforcars")
        fetch("  https://api.cloudinary.com/v1_1/jehadforcars/image/upload", {
            method: "post",
            body: data
        }).then(resp => resp.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => console.log(err))
    }

    // const details = () => {
    // `useParams` returns an object that contains the URL parameters
    //     const { id } = useParams();
    //     return <div>cars id: {id}</div>;
    // };


    return <div>
        <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
        <button onClick={img}>Upload</button>
        <div>
            <h4>Uploaded image </h4>
            <img src={url} />


        </div>
        <button
            onClick={() => {
                navigate(-1);
            }}>
            Back
        </button>
    </div>
}















export default Dashboard