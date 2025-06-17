---
layout: post
title: "Cleaning and Labelling Data with LLMs"
date: 2025-06-03 09:50:00 +0000
author: Jacob Dichter
categories: [blog]
description: "My method of using GPT-4 to clean 1,229 sometimes awkward, abbreviated HS-4 commodity descriptions into clear, natural language descriptions."
---
<span class="date" style="padding-top: 0px; margin-top: 0px;">{{ page.date | date: "%B %-d, %Y" }}</span>

A simple Python script to batch your descriptions and send them to ChatGPT via the OpenAI API.

```python
import openai
import time

openai.api_key = "YOUR_API_KEY_HERE"

def batch_list(lst, n):
    """Yield successive n-sized chunks from lst."""
    for i in range(0, len(lst), n):
        yield lst[i:i + n]

def create_prompt(batch):
    prompt = "Please rewrite each of the following commodity descriptions to be concise, natural, and easy to understand. Keep the meaning but simplify wording.\n\n"
    for i, desc in enumerate(batch, 1):
        prompt += f"{i}. {desc}\n"
    prompt += "\nReturn your response as a numbered list with each simplified description."
    return prompt

def call_openai_api(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.5,
        max_tokens=500,
    )
    return response.choices[0].message.content

def main():
    batch_size = 10
    simplified_descriptions = []

    for batch in batch_list(hs4_descriptions, batch_size):
        prompt = create_prompt(batch)
        print("Sending batch to API...")
        simplified = call_openai_api(prompt)
        print("Received response:")
        print(simplified)
        simplified_descriptions.append(simplified)
        time.sleep(1)  # Be polite and avoid hitting rate limits

    # Optional: save results to a file
    with open("simplified_descriptions.txt", "w") as f:
        for batch_text in simplified_descriptions:
            f.write(batch_text + "\n\n")

if __name__ == "__main__":
    main()
```

What this does:
Splits your 1229 descriptions into groups of 10.

Sends each batch to ChatGPT with a clear prompt.

Prints and saves the simplified responses.
