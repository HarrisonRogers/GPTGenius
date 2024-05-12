'use server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const generateChatResponse = async (chatMessage) => {
  try {
    const res = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'you are a helpful assistant' },
        ...chatMessage,
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0,
    })
    console.log(res.choices[0].message)
    console.log(res)
    return res.choices[0].message
  } catch (error) {
    return null
  }
}
