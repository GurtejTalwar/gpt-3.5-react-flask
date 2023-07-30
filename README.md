GPT-3.5 Turbo Flask API
=======================

This repository contains a Flask application that serves as an API for the GPT-3.5 Turbo language model provided by OpenAI. The API allows you to interact with the GPT-3.5 Turbo model by sending prompts and receiving text responses.

Getting Started
---------------

To use this API, follow the instructions below:

1.  Clone this repository to your local machine:

```bash
git clone https://github.com/GurtejTalwar/gpt-3.5-react-flask.git
cd gpt-3.5-turbo-flask-api`
```

1.  Install the required packages using pip:

```bash
pip install -r requirements.txt 
```
1.  Set up the necessary environment variables:

    -   Obtain your OpenAI API key from <https://openai.com/account/api/>

    -   Create a `.env` file in the `backend` folder and add your OpenAI API key as follows:
        ```makefile
        OPEN_API_KEY=your_openai_api_key_here`
2.  Run the Flask application:

```bash
cd backend
python app.py
```

The Flask app will be running at [http://localhost:5000](http://localhost:5000/).

Sending Requests to the API
---------------------------

You can send HTTP POST requests to the API to get responses from the GPT-3.5 Turbo model. The API endpoint is `/api/gpt`, and it expects JSON data with a `prompt` field.

Here's an example using curl:

```bash
curl -X POST -H "Content-Type: application/json" -d {"prompt": "What is the capital of France?"}' http://localhost:5000/api/gpt`
```

The response will be in JSON format, containing the GPT-3.5 Turbo model's completion for the given prompt.

Frontend Integration
--------------------

If you want to build a frontend application to interact with this API, you can use any frontend framework like React, Vue.js, or Angular. Simply make HTTP POST requests to the `/api/gpt` endpoint of this Flask API with the prompt data.

Contributions
-------------

Contributions to this project are welcome! If you find any issues or have improvements to suggest, feel free to submit a pull request.

License
-------

This project is licensed under the [MIT License](https://chat.openai.com/c/LICENSE). Feel free to use, modify, and distribute it according to the terms of the license.