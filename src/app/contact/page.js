import ContactBanner from "@/components/contact/ContactBanner";
import ContactDetailsContainer from "@/components/contact/ContactDetailsContainer";

export const metadata = {
  title: "Contact Us - Altwood",
  description: "",
};

export default function Contact() {
  return (
    <>
      <ContactBanner />
      <ContactDetailsContainer />
    </>
  );
}