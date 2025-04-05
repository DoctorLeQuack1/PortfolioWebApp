import { ProjectCard } from "../components/ProjectCard";

const card_struct: any = {

    vehicle: {
        img_: "/vehicle.jpg",
        title_: "Vehicle Manager",
        description_: "Inquierer app that allows creation and management of car inventory DB."
    },
    tracker: {
        img_: "/tracker.jpg",
        title_: "Employee Tracker",
        description_: "Inquierer app that allows creation and management of employee DB."
    },
    readMe: {
        img_: "/readme.jpg",
        title_: "README Gen",
        description_: "Inquirer app that allows generation of a README file base on questions."
    },
    weather: {
        img_: "/weather.jpg",
        title_: "Weather API",
        description_: "Web page that allows to check weather of a city of user's choice."
    },
    ecommerce: {
        img_: "/commerce.jpg",
        title_: "Yardify",
        description_: "Page that allows users to put unused stuff to sale."
    },
    digital: {
        img_: "/digital.jpg",
        title_: "Fox Quest",
        description_: "Digital Twin Tracker that allows an industry manager to live check its production."
    },
};

export const Portfolio = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <ProjectCard project={card_struct.vehicle} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <ProjectCard project={card_struct.tracker} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <ProjectCard project={card_struct.readMe} />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <ProjectCard project={card_struct.weather} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <ProjectCard project={card_struct.ecommerce} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <ProjectCard project={card_struct.digital} />
                </div>
            </div>
        </div>

    );
};