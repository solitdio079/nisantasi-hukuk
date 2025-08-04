import logo from "./logo.png"

export default function SplashScreen(){
    return (
    <div className="flex bg-base-200 w-full flex-col h-screen gap-3 justify-center items-center">
        <img src={logo} className="w-24" alt="" />
        <span className="loading loading-ball"></span>

    </div>
    )
}