export const AboutMe = () => {
    return (
        <div className="container vh-100 d-flex flex-wrap">
            <div className="row align-items-center w-100">
                {/* Columna de texto */}
                <div className="col-md-6 text-center text-md-start px-5">
                    <h1 className="text-light">Hi, I am Sergio, Sr. Software Engineer</h1>
                    <p className="text-light">I am learning enthusiast, always thrilled for facing new challenges and growing professionally.</p>
                    <div className="d-flex justify-content-center justify-content-md-start">
                        <p className="text-light">Check My Hobby On:</p>
                        <a
                            href="https://github.com/DoctorLeQuack1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ms-1"
                            style={{marginTop: "-5px"}}
                        >
                            <img
                                src="/github-mark-white.png"
                                alt="GitHub Logo"
                                style={{ width: "20px", height: "20px"}}
                            />
                        </a>
                    </div>
                </div>

                {/* Columna de imagen */}
                <div className="col-md-6 d-flex justify-content-center justify-content-md-end px-4">
                    <img src="/MePhoto.png" className="img-fluid rounded-circle" style={{ maxWidth: "300px" }} alt="Me" />
                </div>
            </div>
        </div>
    );
};