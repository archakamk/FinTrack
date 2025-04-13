import google.generativeai as genai

genai.configure(api_key="AIzaSyAF1EVzv6w35sDE6mj0KBUyd0ojUUx38EE")  # ✅ Replace with your working API key

# ✅ Use the model exactly like this
model = genai.GenerativeModel("models/gemini-2.0-flash")  # 🔥 FULL NAME!

def generate_answer(prompt: str) -> str:
    try:
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        return f"Error: {str(e)}"
