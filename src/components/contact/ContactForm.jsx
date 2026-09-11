import Button from "../Button";

const ContactForm = () => {
    return (
        <div className="bg-white rounded-lg p-[2rem]">
            <h3>
                Talk to Us Today
            </h3>
            <p className="mt-[1rem] lg:mt-[1.3rem]">
                Reach out to our team for product inquiries, project consultations, or custom plywood solutions tailored to your needs.
            </p>

            <form action="" className="contact_form mt-[2rem] flex justify-between flex-wrap gap-y-[1.4rem]">
                <input type="text" name="First Name" placeholder="First Name" required />
                <input type="text" name="Last Name" placeholder="Last Name" required />
                <input type="number" name="Phone No." placeholder="Phone" required />
                <input type="email" name="Email" placeholder="Email" />
                <textarea name="Message" placeholder="Message"></textarea>
                <Button label="Send Message" type="submit" />
            </form>
        </div>
    )
}

export default ContactForm
