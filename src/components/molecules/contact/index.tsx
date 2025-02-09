// "use client";

// import { useState } from "react";
// import Text from "@/components/atoms/text";
// import SectionLayout from "@/components/atoms/sectionLayout";
// import styled from "styled-components";
// import ReusableHeader from "@/components/atoms/reuseableHeader";
// import Flex from "@/components/atoms/flex";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaEnvelopeOpenText } from "react-icons/fa6";
// import { IoLocationSharp } from "react-icons/io5";
// import { Grid } from "@/components/atoms/grid";
// import Link from "@/components/atoms/link";
// import { BsFacebook, BsTwitter } from "react-icons/bs";
// import { AiFillInstagram } from "react-icons/ai";
// import { ImLinkedin } from "react-icons/im";
// import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";


// const ContactWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 3rem;
//   flex-direction: row;
//   padding: 5rem 0;
//   height: 60vh;

//   @media screen and (max-width: 900px) {
//     flex-direction: column;
//     height: auto;
//   }
// `;

// const ContactForm = styled.form`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;

//   @media screen and (max-width: 900px) {
//     width: 100%;
//   }
// `;

// const InputField = styled.input`
//   padding: 1rem;
//   font-size: 1.8rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   width: 100%;
//   background-color: #f9f9f9;
//   height: 5rem;
//   color: #154c79;
//   font-weight: bold;
// `;

// const TextAreaField = styled.textarea`
//   padding: 1rem;
//   font-size: 1.8rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   width: 100%;
//   height: 150px;
//   background-color: #f9f9f9;
//   color: #154c79;
//   font-weight: bold;
// `;

// const SubmitButton = styled.button`
//   background: transparent;
//   border: 1px solid #154c79;
//   color: #154c79;
//   padding: 1rem;
//   font-size: 2rem;
//   border-radius: 1rem;
//   cursor: pointer;
//   text-align: center;

//   &:hover {
//     background: #154c79;
//     color: #fff;
//   }
// `;

// const footerIcons = [
//   {
//     id: 1,
//     icon: <BsFacebook size="2rem" color="#edfff7" />,
//     url: "https://www.facebook.com/AyooluwaAdekoya?mibextid=ZbWKwL",
//   },
//   {
//     id: 2,
//     icon: <BsTwitter size="2rem" color="#edfff7" />,
//     url: "https://x.com/AyooluwaAdekoya?t=CDCQZDAh4Iz3nnoVlZM6jg&s=08",
//   },
//   {
//     id: 3,
//     icon: <AiFillInstagram size="2rem" color="#edfff7" />,
//     url: "https://www.instagram.com/ayooluwaadekoya?utm_source=qr&igsh=MXZsZTh2ZXU3ODUxYw==",
//   },
//   {
//     id: 4,
//     icon: <ImLinkedin size="2rem" color="#edfff7" />,
//     url: "https://ng.linkedin.com/in/ayooluwa-adekoya-32b106193",
//   },
// ];

// const ContactPage = () => {
//   const { isMobile } = useScreenResolution();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     setIsLoading(false);

//     if (res.ok) {
//       setSuccessMessage("Your message was sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//     } else {
//       setSuccessMessage("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <>
//       <ReusableHeader text="Contact Us" />
//       <SectionLayout>
//         <ContactWrapper>
//           <ContactForm onSubmit={handleSubmit}>
//             <Text
//               type="h3"
//               text="Feel Free to contact us any time!"
//               size="2.5rem"
//               color="#666"
//               styles={{ marginBottom: "1.5rem" }}
//             />

//             <InputField
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <InputField
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <TextAreaField
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//             <SubmitButton type="submit" disabled={isLoading}>
//               {isLoading ? "Sending..." : "Send"}
//             </SubmitButton>

//             {successMessage && (
//               <Text type="p" text={successMessage} color="#28a745" />
//             )}
//           </ContactForm>

//           <Flex
//             direction="column"
//             background="#154c79"
//             gap="5rem"
//             padding="2rem"
//             borderRadius="1.5rem"
//           >
//             <Text type="h2" text="Contact Info" size="3.5rem" color="#edfff7" />

//             <Flex direction="column" gap="2rem">
//               <Flex
//                 direction="row"
//                 gap={isMobile ? "1rem" : "2rem"}
//                 align="center"
//               >
//                 <FaPhoneAlt size={isMobile ? 20 : 30} color="#edfff7" />
//                 <Text
//                   size={isMobile ? 14 : 18}
//                   color="#effff7"
//                   type="h3"
//                   text="+234 703 257 1208"
//                 />
//               </Flex>
//               <Flex
//                 direction="row"
//                 gap={isMobile ? "1rem" : "2rem"}
//                 align="center"
//               >
//                 <FaEnvelopeOpenText size={isMobile ? 20 : 30} color="#edfff7" />
//                 <Text
//                   size={isMobile ? 14 : 18}
//                   color="#effff7"
//                   type="h3"
//                   text="ayooluwaeadekoya@gmail.com"
//                 />
//               </Flex>
//               <Flex
//                 direction="row"
//                 gap={isMobile ? "1rem" : "2rem"}
//                 align="center"
//               >
//                 <IoLocationSharp size={isMobile ? 25 : 30} color="#edfff7" />
//                 <Text
//                   size={isMobile ? 14 : 18}
//                   color="#effff7"
//                   type="h3"
//                   text="12B, Bowen University Seminary Road Ogbomoso Oyo State."
//                 />
//               </Flex>
//             </Flex>

//             <Grid
//               columns="repeat(4, 1fr)"
//               gap="2.5rem"
//               width="fit-content"
//               align="unset"
//               justify="flex-start"
//               margin="0"
//             >
//               {footerIcons.map((icon) => (
//                 <Link href={icon.url} key={icon.id} target="_blank">
//                   {icon.icon}
//                 </Link>
//               ))}
//             </Grid>
//           </Flex>
//         </ContactWrapper>
//       </SectionLayout>
//     </>
//   );
// };

// export default ContactPage;


"use client";

import { useState } from "react";
import Text from "@/components/atoms/text";
import SectionLayout from "@/components/atoms/sectionLayout";
import styled from "styled-components";
import ReusableHeader from "@/components/atoms/reuseableHeader";
import Flex from "@/components/atoms/flex";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Grid } from "@/components/atoms/grid";
import Link from "@/components/atoms/link";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";

// Contact form styles
const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  flex-direction: row;
  padding: 5rem 0;
  height: 60vh;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: auto;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const InputField = styled.input`
  padding: 1rem;
  font-size: 1.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  background-color: #f9f9f9;
  height: 5rem;
  color: #154c79;
  font-weight: bold;
`;

const TextAreaField = styled.textarea`
  padding: 1rem;
  font-size: 1.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  background-color: #f9f9f9;
  color: #154c79;
  font-weight: bold;
`;

const SubmitButton = styled.button`
  background: transparent;
  border: 1px solid #154c79;
  color: #154c79;
  padding: 1rem;
  font-size: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #154c79;
    color: #fff;
  }
`;

const footerIcons = [
  {
    id: 1,
    icon: <BsFacebook size="2rem" color="#edfff7" />,
    url: "https://www.facebook.com/AyooluwaAdekoya?mibextid=ZbWKwL",
  },
  {
    id: 2,
    icon: <BsTwitter size="2rem" color="#edfff7" />,
    url: "https://x.com/AyooluwaAdekoya?t=CDCQZDAh4Iz3nnoVlZM6jg&s=08",
  },
  {
    id: 3,
    icon: <AiFillInstagram size="2rem" color="#edfff7" />,
    url: "https://www.instagram.com/ayooluwaadekoya?utm_source=qr&igsh=MXZsZTh2ZXU3ODUxYw==",
  },
  {
    id: 4,
    icon: <ImLinkedin size="2rem" color="#edfff7" />,
    url: "https://ng.linkedin.com/in/ayooluwa-adekoya-32b106193",
  },
];

const ContactPage = () => {
  const { isMobile } = useScreenResolution();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const { name, email, message } = formData;
  
    if (!name || !email || !message) {
      setErrorMessage("Please fill out all fields.");
      return;
    }
  
    setErrorMessage("");
    setIsLoading(true);
  
    // Construct the WhatsApp message
    const whatsappMessage = `Hello, my name is ${name}.%0A%0A${message}%0A%0AEmail: ${email}`;
    const whatsappURL = `https://wa.me/2347032571208?text=${whatsappMessage}`;
  
    // Open the WhatsApp link
    window.open(whatsappURL, "_blank");
  
    setIsLoading(false);
    setFormData({ name: "", email: "", message: "" });
  };
  

  return (
    <>
      <ReusableHeader text="Contact Us" />
      <SectionLayout>
        <ContactWrapper>
          <ContactForm onSubmit={handleSubmit}>
            <Text
              type="h3"
              text="Feel Free to contact us any time!"
              size="2.5rem"
              color="#666"
              styles={{ marginBottom: "1.5rem" }}
            />

            <InputField
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <InputField
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextAreaField
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send"}
            </SubmitButton>

            {errorMessage && (
              <Text type="p" text={errorMessage} color="#d9534f" />
            )}
          </ContactForm>

          <Flex
            direction="column"
            background="#154c79"
            gap="5rem"
            padding="2rem"
            borderRadius="1.5rem"
          >
            <Text type="h2" text="Contact Info" size="3.5rem" color="#edfff7" />

            <Flex direction="column" gap="2rem">
              <Flex
                direction="row"
                gap={isMobile ? "1rem" : "2rem"}
                align="center"
              >
                <FaPhoneAlt size={isMobile ? 20 : 30} color="#edfff7" />
                <Text
                  size={isMobile ? 14 : 18}
                  color="#effff7"
                  type="h3"
                  text="+234 703 257 1208"
                />
              </Flex>
              <Flex
                direction="row"
                gap={isMobile ? "1rem" : "2rem"}
                align="center"
              >
                <FaEnvelopeOpenText size={isMobile ? 20 : 30} color="#edfff7" />
                <Text
                  size={isMobile ? 14 : 18}
                  color="#effff7"
                  type="h3"
                  text="ayooluwaeadekoya@gmail.com"
                />
              </Flex>
              <Flex
                direction="row"
                gap={isMobile ? "1rem" : "2rem"}
                align="center"
              >
                <IoLocationSharp size={isMobile ? 25 : 30} color="#edfff7" />
                <Text
                  size={isMobile ? 14 : 18}
                  color="#effff7"
                  type="h3"
                  text="12B, Bowen University Seminary Road Ogbomoso Oyo State."
                />
              </Flex>
            </Flex>

            <Grid
              columns="repeat(4, 1fr)"
              gap="2.5rem"
              width="fit-content"
              align="unset"
              justify="flex-start"
              margin="0"
            >
              {footerIcons.map((icon) => (
                <Link href={icon.url} key={icon.id} target="_blank">
                  {icon.icon}
                </Link>
              ))}
            </Grid>
          </Flex>
        </ContactWrapper>
      </SectionLayout>
    </>
  );
};

export default ContactPage;
