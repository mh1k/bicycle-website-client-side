import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState("")
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        e.preventDefault()
        const user = { email }
        // console.log(user.email);
        fetch("http://localhost:5000/users/admin", {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Made Admin Successfully")

                }
                if ((data.modifiedCount === 0) && (data.matchedCount > 0)) {
                    alert("This user Alrady Admin")

                }
                if (data.matchedCount === 0) {
                    alert("This user not found")

                }

                e.target.reset();

                // console.log(data);
            })

    }

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <div className="p-5 shadow-lg review-box">
                <h2 className="text-center mb-3">Make Admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <Form.Control onBlur={handleOnBlur} required className="mb-3" name="email" size="lg" type="email" placeholder="Your email" />
                    <button className=" btn btn-success" type="submit">make admin</button>
                </form>
            </div>
        </Container>
    );
};

export default MakeAdmin;

{/* <Container>
            <h2 className="text-center">Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <Form.Control onBlur={handleOnBlur} className="mb-3" name="email" size="lg" type="email" placeholder="Your email" />
                <button type="submit">make admin</button>
            </form>
        </Container> */}