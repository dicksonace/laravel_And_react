import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React from "react";

const EditForm = ({ userDetails }) => {
    console.log(userDetails.id);

    const { data, setData, post, processing, error } = useForm({
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
    });

    const submitHandler = (e) => {
        e.preventDefault();

        post(route("user.update"));
    };
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">
                    Edit {userDetails.name}`s Details 
                </h1>

               
            </div>

            <form
                onSubmit={submitHandler}
                className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
                <TextInput
                type="hidden"
                    className="w-full"
                    placeholder="Name "
                    value={userDetails.id}
                    onChange={(e) => setData("id", e.target.value)}
                />
                <div>
                    <label htmlFor="email" className="sr-only">
                        Name
                    </label>

                    <div>
                        <TextInput
                            className="w-full"
                            placeholder="Name "
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="sr-only">
                        Email
                    </label>

                    <div>
                        <TextInput
                            className="w-full"
                            placeholder="Email "
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        disabled={processing}
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditForm;
