import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import Link from "next/link";

const Login = async () => {

    const session = await getSession();
    const user = session?.user;
    if (user) redirect("/");

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex flex-col gap-6 p-8 shadow-lg rounded-lg max-w-lg w-full border-r-8">
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Login to MyShop
                </h1>
                <p className="text-gray-600 text-center">
                    Please enter your login credentials
                </p>

                {/* Login Form */}
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="example@gmail.com" name="email" type="email" />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="********" name="password" type="password" />
                    </div>
                    <Button className="w-full">Login &rarr;</Button>

                    <p>
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-blue-500">
                            Register
                        </Link>
                    </p>

                </form>
                <div className="h-px w-full bg-gray-300"></div>
                <section className="flex justify-center items-center gap-4">
                    <form action={async () => {
                        "use server";
                        await signIn("github");
                    }}>
                        <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition duration-200 ease-in-out transform hover:scale-105">
                            <IconBrandGithub size={25} />
                            <span>Github</span>
                        </button>
                    </form>
                    <form action={async () => {
                        "use server";
                        await signIn("google");
                    }}>
                        <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-500 transition duration-200 ease-in-out transform hover:scale-105">
                            <IconBrandGoogle size={25} />
                            <span>Google</span>
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Login;
