export const AboutMe = () => {
    return (
        <div className="grid grid-cols-2 h-full">
            <div className="flex flex-col flex-wrap justify-center content-center m-20">
                <h1 className="text-blue-100">Hi, I am Sergio, Sr. Software Engineer</h1>
                <p className="text-blue-100">I am a Sr. Software Engineer, currently working at Capital One.</p>                
            </div>

            <div className="flex justify-center items-center w-full h-full">
                <img src="/MePhoto.png" className="w-full max-w-[300px] h-auto" alt="logo" />
            </div>
        </div>
    );
};