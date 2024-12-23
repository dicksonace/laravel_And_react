import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head } from "@inertiajs/react";

const Users = ({ users }) => {
    console.log(users);
    return (
        <AuthenticatedLayout>
            <Head title="Users" />
        <div>
            <h1 className="text-center text-2xl font-medium ">
                User Management App
            </h1>
              
         <Table users={users} />
        </div>
        </AuthenticatedLayout>
    );
};

export default Users;
