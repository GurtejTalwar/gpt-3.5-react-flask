from flask import Flask, request, jsonify
import requests
import os
import openai
from dotenv import load_dotenv

app = Flask(__name__)

# Create an OpenAI openai
openai.api_key = load_dotenv("OPEN_API_KEY")

@app.route('/api/gpt', methods=['POST'])
def get_response():
    prompt = request.json['prompt']
    print(prompt)
    # Get the response from GPT-3.5 Turbo
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": f"{prompt}"}
        ]
    )
    
    completion = response['choices'][0]['message']['content']
    print(completion)
    return jsonify({'response': completion})

if __name__ == '__main__':
    app.run(debug=True)