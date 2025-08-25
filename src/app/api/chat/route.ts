import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const HEALTHCARE_CONTEXT = `
You are a professional AI healthcare assistant for At Door HealthCare, a licensed home health care service provider in Richmond, Virginia. You are specifically designed to provide information about home healthcare services and support families in making informed care decisions.

=== COMPANY INFORMATION ===
- Company: At Door HealthCare
- Location: 8501 Mayland Dr, Suite 103A, Richmond VA 23294
- Phone: (804) 302-4673
- Fax: (804) 348-2782
- Email: info@atdoorhc.com
- Service Area: Richmond, Virginia and surrounding areas
- Hours: 24/7 service availability with office hours Mon-Fri 8AM-6PM
- Website: Professional home healthcare services since [establishment]

=== SERVICES PROVIDED ===
1. Personal Care: Bathing, grooming, dressing, personal hygiene, mobility support, medication reminders
2. Respite Care: Temporary relief for family caregivers with flexible scheduling (hourly, daily, overnight)
3. Companion Care: Social interaction, emotional support, activity engagement, mental stimulation, transportation
4. Light Housekeeping: Cleaning services, laundry assistance, meal preparation, organization, grocery shopping

=== COMPANY VALUES (CARE) ===
- Compassion: Treating every client with empathy, kindness, and understanding
- Assistance: Providing comprehensive support for daily living activities
- Respect: Honoring dignity, individual preferences, and client autonomy
- Empowerment: Supporting independence, confidence, and quality of life

=== QUALIFICATIONS & CREDENTIALS ===
- Licensed and insured healthcare provider
- 5-star rated service with excellent client satisfaction
- 24/7 support availability and emergency response
- Professional trained and certified staff
- Background-checked and bonded caregivers
- Free initial assessments and care consultations
- Personalized care plans tailored to individual needs
- Wheelchair accessible facilities and transportation
- Free parking available at office location

=== CONVERSATION SCOPE & BOUNDARIES ===

ALLOWED TOPICS (Respond with expertise):
✓ At Door HealthCare services, pricing, scheduling, and policies
✓ Home healthcare topics: aging care, disability support, caregiver resources
✓ General wellness and safety in home environments
✓ Service area coverage and availability
✓ Staff qualifications and training
✓ Insurance and payment options
✓ Family caregiver support and respite care
✓ Transitioning from hospital to home care
✓ Professional greetings and healthcare-related small talk

RESTRICTED TOPICS (Redirect professionally):
✗ Medical advice, diagnosis, or treatment recommendations
✗ Specific medication guidance or dosage information
✗ Emergency medical situations (direct to 911)
✗ Unrelated business topics or personal matters
✗ Technical support for non-healthcare services
✗ Political, controversial, or inappropriate content
✗ Legal advice or insurance claim guidance
✗ Other healthcare providers or competitors

=== PROFESSIONAL REDIRECT STRATEGY ===
When users ask about restricted topics, use this approach:
1. Acknowledge their question politely and professionally
2. Explain your specialized focus on At Door HealthCare services
3. Redirect to appropriate resources (healthcare professionals, emergency services, office contact)
4. Offer to help with relevant home healthcare topics
5. Maintain a warm, supportive tone throughout

REDIRECT TEMPLATE:
"Thank you for your question about [topic]. I'm specifically designed to help with At Door HealthCare services and home healthcare topics. For [medical advice/emergency situations/specific topic], I recommend [consulting your healthcare provider/calling 911/contacting our office directly]. I'd be happy to answer questions about our personal care services, respite care options, or how we can support your family's home healthcare needs. How can I assist you with our services today?"

=== RESPONSE GUIDELINES ===
- Maintain a professional, empathetic, and caring tone
- Keep responses concise but informative (2-4 sentences typically)
- Always prioritize client safety and appropriate care referrals
- Use person-first language and respectful terminology
- Encourage direct contact for detailed consultations: (804) 302-4673
- For urgent matters, always direct to appropriate emergency services
- End responses with an offer to help with relevant healthcare topics
- Never provide medical advice or replace professional healthcare guidance

=== EMERGENCY PROTOCOLS ===
- Medical emergencies: "Please call 911 immediately for medical emergencies"
- Mental health crises: "Please contact the National Suicide Prevention Lifeline at 988 or call 911"
- Urgent care needs: "Please contact your healthcare provider or call our office at (804) 302-4673"

Remember: You are a healthcare service assistant, not a medical professional. Always maintain appropriate boundaries while providing excellent customer service.
`

// Context validation patterns for topic detection
const OFF_TOPIC_PATTERNS = {
  medical_advice: /\b(diagnose|diagnosis|treatment|medication dosage|prescribe|medical condition|symptoms|disease|illness|pain relief|drug interaction)\b/i,
  emergency: /\b(emergency|urgent|911|ambulance|heart attack|stroke|bleeding|unconscious|can't breathe)\b/i,
  unrelated_business: /\b(restaurant|car|real estate|technology|software|computer|phone|internet|banking|finance)\b/i,
  inappropriate: /\b(politics|religion|dating|personal relationship|controversial|offensive)\b/i,
  legal_advice: /\b(lawsuit|legal advice|attorney|lawyer|sue|court|legal rights)\b/i,
  other_providers: /\b(other companies|competitors|different provider|another service|alternative)\b/i
}

function detectOffTopicContent(message: string): string | null {
  const lowerMessage = message.toLowerCase()

  // Check for emergency situations first
  if (OFF_TOPIC_PATTERNS.emergency.test(lowerMessage)) {
    return 'emergency'
  }

  // Check for medical advice requests
  if (OFF_TOPIC_PATTERNS.medical_advice.test(lowerMessage)) {
    return 'medical_advice'
  }

  // Check for unrelated business topics
  if (OFF_TOPIC_PATTERNS.unrelated_business.test(lowerMessage)) {
    return 'unrelated_business'
  }

  // Check for inappropriate content
  if (OFF_TOPIC_PATTERNS.inappropriate.test(lowerMessage)) {
    return 'inappropriate'
  }

  // Check for legal advice
  if (OFF_TOPIC_PATTERNS.legal_advice.test(lowerMessage)) {
    return 'legal_advice'
  }

  // Check for competitor inquiries
  if (OFF_TOPIC_PATTERNS.other_providers.test(lowerMessage)) {
    return 'other_providers'
  }

  return null
}

function generateRedirectResponse(offTopicType: string): string {
  const responses = {
    emergency: "I understand you may have an urgent situation. For medical emergencies, please call 911 immediately. For urgent healthcare needs, please contact your healthcare provider or call our office at (804) 302-4673. Our team is available 24/7 to help coordinate appropriate care. How can I assist you with our home healthcare services?",

    medical_advice: "Thank you for your question about medical matters. I'm designed to help with At Door HealthCare services rather than provide medical advice. For medical questions, diagnosis, or treatment guidance, please consult with your healthcare provider or physician. I'd be happy to discuss how our personal care services, respite care, or companion care might support your overall wellness plan. What home healthcare services can I help you learn about?",

    unrelated_business: "I appreciate your question! I'm specifically designed to help with At Door HealthCare services and home healthcare topics. While I can't assist with other business matters, I'd be happy to answer questions about our personal care services, respite care options, or how we can support your family's healthcare needs at home. For other inquiries, please feel free to call our office at (804) 302-4673. How can I help you with your home healthcare needs today?",

    inappropriate: "Thank you for reaching out. I'm here to help with At Door HealthCare services and home healthcare topics. I'd be happy to discuss our compassionate care services, answer questions about our CARE principles, or help you understand how we can support your family's healthcare needs. What would you like to know about our services?",

    legal_advice: "I understand you may have legal questions, but I'm specifically designed to help with At Door HealthCare services rather than provide legal guidance. For legal matters, I recommend consulting with a qualified attorney. I'd be happy to discuss our home healthcare services, insurance acceptance, or care policies. For detailed policy questions, please call our office at (804) 302-4673. How can I assist you with our healthcare services?",

    other_providers: "I'm here to help you learn about At Door HealthCare's services specifically. We're proud of our 5-star rated care, licensed professionals, and personalized approach to home healthcare. I'd be happy to discuss what makes our services unique, our CARE principles, or how we can meet your specific needs. What aspects of our home healthcare services would you like to explore?"
  }

  return responses[offTopicType as keyof typeof responses] || responses.unrelated_business
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Valid message is required' },
        { status: 400 }
      )
    }

    // Validate message length
    if (message.length > 1000) {
      return NextResponse.json(
        { message: "I appreciate your detailed message! For complex inquiries, please call our office at (804) 302-4673 where our team can provide personalized assistance. How can I help you with a specific question about our home healthcare services?" },
        { status: 200 }
      )
    }

    // Check for off-topic content
    const offTopicType = detectOffTopicContent(message)
    if (offTopicType) {
      return NextResponse.json({
        message: generateRedirectResponse(offTopicType)
      })
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { message: "I apologize, but the chat service is temporarily unavailable. Please call us directly at (804) 302-4673 for immediate assistance with your home healthcare needs." },
        { status: 200 }
      )
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: HEALTHCARE_CONTEXT
        },
        {
          role: "user",
          content: `User message: "${message}"\n\nPlease respond professionally and stay within your healthcare service expertise. If this question is outside your scope, use the redirect strategy provided in your instructions.`
        }
      ],
      max_tokens: 350,
      temperature: 0.6,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    })

    const assistantMessage = completion.choices[0]?.message?.content?.trim()

    if (!assistantMessage) {
      return NextResponse.json({
        message: "I apologize, but I'm having trouble generating a response right now. Please call us at (804) 302-4673 where our healthcare professionals can provide immediate assistance with your home healthcare needs."
      })
    }

    // Validate response length and quality
    if (assistantMessage.length < 10) {
      return NextResponse.json({
        message: "Thank you for your question! For detailed information about our home healthcare services, please call our office at (804) 302-4673. Our team is available Mon-Fri 8AM-6PM, with 24/7 support for urgent needs. How else can I help you learn about At Door HealthCare services?"
      })
    }

    return NextResponse.json({
      message: assistantMessage,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('OpenAI API error:', error)

    // Determine error type for appropriate response
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'

    if (errorMessage.includes('rate limit')) {
      return NextResponse.json({
        message: "I'm currently experiencing high demand. For immediate assistance with At Door HealthCare services, please call us at (804) 302-4673. Our healthcare professionals are available 24/7 to help with your home healthcare needs."
      })
    }

    if (errorMessage.includes('timeout')) {
      return NextResponse.json({
        message: "I'm taking longer than usual to respond. For prompt assistance with our home healthcare services, please call our office at (804) 302-4673 or email info@atdoorhc.com. How can our team help you today?"
      })
    }

    // Generic fallback with helpful information
    return NextResponse.json({
      message: "I apologize, but I'm experiencing technical difficulties. For immediate assistance with At Door HealthCare services, please call us at (804) 302-4673 or email info@atdoorhc.com. Our licensed healthcare professionals are available 24/7 to discuss personal care, respite care, companion care, and light housekeeping services. We're here to help!"
    })
  }
}
