"use client"

import { useState } from "react";
import Text from "@/components/atoms/text";
import SectionLayout from "@/components/atoms/sectionLayout";
import styled from "styled-components";
import ReusableHeader from "@/components/atoms/reuseableHeader";
import Flex from "@/components/atoms/flex";

// Contact form styles
const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  padding: 5rem 0;
`;

const ContactForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputField = styled.input`
  padding: 1rem;
  font-size: 1.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  background-color: #f9f9f9;
  height: 5rem;
`;

const TextAreaField = styled.textarea`
  padding: 1rem;
  font-size: 1.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  background-color: #f9f9f9;
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

// Contact Info Section
// const ContactInfo = styled.div`
//   width: 35%;
//   background-color: #154c79;
//   border-radius: 25px;
//   padding: 2rem;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  i {
    font-size: 1.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 2rem;

  a {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #8f10b7;
    }
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    setIsLoading(false);
  
    if (res.ok) {
      setSuccessMessage('Your message was sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSuccessMessage('Something went wrong. Please try again.');
    }
  };
  

  return (
    <>
      <ReusableHeader text="Contact Us" />
      <SectionLayout>
        <ContactWrapper>
          <ContactForm onSubmit={handleSubmit}>
            <Text
              type="h3"
              text="Feel Free to contact us any time. We will get back to you as soon as we can!"
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

            {successMessage && <Text type="p" text={successMessage} color="#28a745" />}
          </ContactForm>

          <Flex direction="column" background="#154c79" gap="2rem" padding="2rem" borderRadius="1.5rem">
            <Text type="h4" text="Contact Info" size="1.5rem" />
            <InfoItem>
              <i className="fas fa-headset"></i>
              <span>+91 8009 054294</span>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-envelope-open-text"></i>
              <span>info@flightmantra.com</span>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-map-marked-alt"></i>
              <span>1000+ Travel partners and 65+ Service cities across India, USA, Canada & UAE</span>
            </InfoItem>

            <SocialIcons>
              <a href="#"><i className="fab fa-facebook-square"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </SocialIcons>
          </Flex>
        </ContactWrapper>
      </SectionLayout>
    </>
  );
};

export default ContactPage;
