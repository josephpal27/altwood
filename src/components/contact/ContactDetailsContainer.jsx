import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactDetailsContainer = () => {
    return (
        <section className="flex justify-between flex-wrap">
            <div className="w-full lg:w-[48%]">
                <ContactDetails />
            </div>
            <div className="w-full lg:w-[48%]">
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactDetailsContainer
