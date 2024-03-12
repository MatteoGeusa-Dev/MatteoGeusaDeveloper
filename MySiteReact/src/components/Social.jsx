import "./Social.css"
import SocialElement from "./SocialElement"
function Social() {
    return (
        <>
            <div class="projects">
                <div class="text">
                    <h1>Check out my socials:</h1>
                    <hr class="sep" />
                    <p class="centered">
                        Here you can find some of my projects and more information about me.
                    </p>
                    <div class="socialbox">
                        <SocialElement link="https://www.instagram.com/_matteogeusa_/" type="instagram"></SocialElement>
                        <SocialElement link="https://github.com/MatteoGeusa-Dev" type="github"></SocialElement>
                        <SocialElement link="https://www.linkedin.com/in/matteo-geusa-3033a822b/" type="linkedin"></SocialElement>
                    </div>
                    <div class="down">
                        <p>Developed by Matteo Geusa</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Social