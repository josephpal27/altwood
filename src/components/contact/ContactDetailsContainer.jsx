import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactDetailsContainer = () => {
    return (
        <section className="flex justify-between flex-wrap">
            <div className="w-full lg:w-[48%] bg-red-500">
                <ContactDetails />
            </div>
            <div className="w-full lg:w-[48%] bg-green-500">
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactDetailsContainer
