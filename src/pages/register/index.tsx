import SignupForm from "../../components/forms/Signup";

const Register = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-24 lg:my-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-[90%] hidden md:flex items-center">
                    <img src="/images/signup.png" alt="Signup" className="max-w-full" />
                </div>
                <div className="md:pl-6">
                    <SignupForm />
                </div>
            </div>
        </div>
    )
}

export default Register;