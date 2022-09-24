import React from 'react';

function Form() {

    const handleSubmit = async () => {
        let form = new FormData(document.querySelector('#msg-form'));
        let req = await fetch('/messages', {
            method: "POST",
            body: form
        })
        if (req.ok) {
            alert('Thanks for your message!')
        }
        else alert('Please enter your name and your message!')
    }
    return (
        <section className="form-section">
            <h1>Send us a message !</h1>
            <hr className="form-hr"></hr>
            <form action="/messages" 
                method="POST" 
                id="msg-form" 
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
            }}>
                    <input name="[name]" type="text" placeholder="Enter your full name"></input>
                    <input name="[email]" type="text" placeholder="Enter your email address"></input>
                    <input name="[phone]" type="text" placeholder="Enter your phone number"></input>
                    <textarea name="[message]" type="text" placeholder="What's on your mind?"></textarea>
                    <button type="submit">Send</button>
            </form>
        </section>
    )
}

export default Form;