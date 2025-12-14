import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { RiMapPinLine } from "react-icons/ri";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full p-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full p-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full p-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border rounded-md border-green-600 p-2 cursor-pointer"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
