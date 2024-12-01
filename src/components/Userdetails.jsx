import { useLoaderData } from "react-router-dom";

const Userdetails = () => {
    const user = useLoaderData();
    console.log(user);
    const {name, email, phone, website, username} = user; 
    return (
        <div className="w-6/12 mx-auto p-6 border border-red-500 rounded-lg mt-10">
            <h1>Name: {name}</h1>
            <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2>
            <h2>Website: {website}</h2>
            <h2>Username: {username}</h2>
        </div>
    );
};

export default Userdetails;