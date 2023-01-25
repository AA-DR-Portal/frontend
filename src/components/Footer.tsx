import branding from "../assets/branding.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faCalendar } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faDiscord,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    link: "https://twitter.com/castlepointcon",
    icon: faTwitter,
    type: "Twitter",
  },
  {
    link: "https://discord.com/invite/castlepointanime",
    icon: faDiscord,
    type: "Discord",
  },
  {
    link: "https://www.facebook.com/castlepointanime",
    icon: faFacebook,
    type: "Facebook",
  },
];

const Footer = () => {
  return (
    <footer className="bg-cpac-black w-screen p-6">
      <div className="px-6">
        <div className="flex flex-row">
          <div className="basis-1/3 block text-left">
            <img src={branding} className="mb-4" />
            <p className="my-2">
              A student run Japaense animation and media convention founded in
              2008.
            </p>
            <p className="my-2">
              Design and Development done by CPあC Webmasters.
            </p>
            <p className="mt-2">
              Built with ❤️ @ Stevens Institute of Technology.
            </p>
          </div>
          <div className="basis-1/3 self-end">
            <div className="flex justify-around my-4">
              {socials.map((social) => {
                return (
                  <a href={social.link} key={social.type}>
                    <FontAwesomeIcon icon={social.icon} size="xl" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm">
              Castle Point Anime Convention is a 501(c)(3) Organization
            </p>
          </div>
          <div className="mx-auto basis-1/3 self-center">
            <div className="inline-block">
              <p className="text-left mb-4">
                <FontAwesomeIcon
                  className="mr-4"
                  icon={faLocationPin}
                  size="xl"
                />
                Meadowlands Exposition Center (Secaucus, NJ)
              </p>
              <p className="text-left">
                <FontAwesomeIcon className="mr-4" icon={faCalendar} size="xl" />
                April 30th - May 1st, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
