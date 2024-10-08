import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { register } from "@/action/user";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/getSession";


const Register = async ()  => {
    const session = await getSession();
    const user = session?.user;
    if (user) redirect("/");
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex flex-col gap-6 p-8 shadow-lg rounded-lg max-w-lg w-full border-r-8">

                <h1 className="text-3xl font-bold text-center text-gray-800">Welcome To MyShop</h1>
                <p className="text-gray-600 text-center">Please provide all the necessary information</p>

                <form className="space-y-4" action={register}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="firstname">First Name</Label>
                            <Input id="firstname" placeholder="Serkan" name="firstname" type="text" />
                        </div>
                        <div>
                            <Label htmlFor="lastname">Last Name</Label>
                            <Input id="lastname" placeholder="Kaplan" name="lastname" type="text" />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="example@gmail.com" name="email" type="email" />
                    </div>

                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="********" name="password" type="password" />
                    </div>

                    <Button className="w-full">
                        Sign Up &rarr;
                    </Button>

                    <p>Already have an account? <Link href="/login" className="text-blue-500">Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register