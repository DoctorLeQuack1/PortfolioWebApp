import { NavBarButton } from "./NavBarButton";

export const NavBar = () => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="p-10">
                    <img src="/astronaut.png" className="w-full max-w-[50px] h-auto" alt="logo"/>
                </div>
                <div className="hidden md:flex flex-wrap justify-end content-center gap-4 pr-10">
                    <NavBarButton text={"About Me"} />
                    <NavBarButton text={"Portfolio"} />
                    <NavBarButton text={"Contact"} />
                    <NavBarButton text={"Resume"} />
                </div>
                <div className="flex flex-wrap justify-end content-center gap-4 pr-10 md:hidden">
                    <h1 className="text-amber-50">Learn More</h1>
                </div>
            </div>
        </div>
    );
}