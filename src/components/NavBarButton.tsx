import { ContactForm } from "./ContactForm";

export const NavBarButton = (props: any) => {

    return (
        props.type !== "Dropdown" ?
            <button id="navBarButton"
                className="btn btn-outline-light rounded-pill px-4">
                {props.text}
            </button> :
            <div>
                <ContactForm text={"Contact"} />
            </div>
    );
};