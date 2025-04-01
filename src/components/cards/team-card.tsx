import { Github, Linkedin } from "lucide-react";

type TeamCardProps = {
    name: string;
    position: string;
    image: string;
    gitHubLink: string;
    linkedInLink: string;
}
export default function TeamCard({
    name, position, image, gitHubLink, linkedInLink
}: TeamCardProps) {

    console.log(image);
    return (
        <div className="card w-full bg-gray-100 shadow-md">
            {/* <figure className="px-10 pt-10"> */}
            {/* <img src={image} alt={name} className="rounded-full w-24 h-24" /> */}
            {/* </figure> */}
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-gray-500">{position}</p>
                <div className="card-actions">
                    {gitHubLink.length > 0 ?
                        <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary">
                            <Github/>
                        </a> : null
                    }
                    <a href={linkedInLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline bg-white hover:bg-blue-600 border border-blue-600 text-blue-500 hover:text-white">
                        <Linkedin/>
                    </a>
                </div>
            </div>
        </div>
    );
}
