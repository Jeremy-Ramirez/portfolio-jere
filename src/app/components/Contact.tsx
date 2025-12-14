import { FaEnvelope } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "jeremyramirezgaleotti@gmail.com",
      href: "mailto:jeremyramirezgaleotti@gmail.com",
    },
    // {
    //   icon: FaEnvelope,
    //   title: "Teléfono",
    //   value: "+45 50 14 85 36",
    //   href: "tel:+4550148536",
    // },
    {
      icon: RiMapPinLine,
      title: "Location",
      value: "Odense, Denmark",
      href: "#",
    },
  ];

  return (
    <>
      <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              {"Let's connect!"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {
                "Do you need a hero? My superpower is to make your project a reality."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 ">
            <div className="space-y-6">
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="p-4 hover:shadow-md transition-shadow"
                  >
                    <a
                      href={info.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.title}
                        </p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6  rounded-md  cursor-pointer w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
