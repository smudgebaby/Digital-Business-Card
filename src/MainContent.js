import React from "react"
import Photo from "./Photo"
import Info from "./Info"
import Text from "./Text"
import Buttons from "./Buttons"
import Footer from "./Footer"

export default function MainContent() {
    return (
        <div className = "contents">
            <Photo />
            <Info />
            <Buttons />
            <Text />
            <Footer />
            
        </div>
    )
}