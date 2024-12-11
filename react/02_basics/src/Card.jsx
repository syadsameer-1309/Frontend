import React from 'react'

const Card = ({title}) => {
    const body = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItem: "center",
        height: "100vh",
        backgroundColor: "blue"
    }

    const container = {
        width: "300px",
        backgroundColor: "black",
        padding: "10px",
        textAlign: "center"
    }

    const image = {
        width: "100%",
        height: "200px",
    }

    const title_h1 = {
        display: "block",
        margin: "5px",
        color: "white"
    }


    return (
        <div style={body}>
            {/* <h1>card</h1> */}

            <div style={container}>
                <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" 
                 style={image} />
                <div>
                    <h1 style={title_h1}>{title}</h1>
                    <p style={{ color: "white" }}>Lorem ipsum dolor sit amet uidem.</p>
                </div>
            </div>
        </div>
    )
}

export default Card
