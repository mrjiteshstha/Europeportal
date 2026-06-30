/* ============================================================
   InterviewReady Malta — Application Logic
   ============================================================ */

// ---- QUESTION BANK (100+ questions across all categories) ----
const QUESTIONS = {

  // ── UNIVERSITY ADMISSION (36 questions) ──────────────────────
  university: [
    // Introduction
    "How would you like to introduce yourself?",
    "Describe yourself in three words and explain why you chose them.",
    "Can you summarise your educational background, the subjects you studied, and how well you performed?",
    "Please provide an overview of your previous academic experience, including the institutions you attended.",

    // Why Malta
    "What inspired you to study in Malta? Please give at least three reasons.",
    "What do you think will be the three biggest benefits of studying and living in Malta?",
    "How do you believe the Maltese education system will benefit your academic and professional goals?",
    "How did you weigh the costs of studying in Malta against the potential benefits when making your decision?",
    "In what ways do you think studying in Malta will broaden your worldview?",
    "What aspects of Maltese life and culture are you looking forward to experiencing as a student?",
    "How have you prepared to adapt to the different culture and education system in Malta?",
    "What are the top three challenges you anticipate facing while living in Malta, and the top three benefits?",
    "How do you think studying in Malta will affect your views on global issues?",
    "What differences do you see between universities in Malta and those in your home country?",
    "What are the first three things you plan to do upon arriving in Malta?",

    // Which University
    "What is the name of the university you have applied to, and what specifically attracted you to it?",
    "What are some unique features or strengths of your chosen university that attracted you?",
    "How does this university's reputation and ranking influence your decision to study here?",
    "What made you choose this university over others in Malta?",
    "How do you think studying at this university will help you achieve your long-term goals?",
    "What special resources, facilities, or services influenced your decision to apply to this university?",
    "How do the teaching style, faculty, and courses at this university align with your learning objectives?",
    "Which other universities did you consider before making your final decision, and why did you choose this one?",
    "How did you research and compare universities before choosing this one?",
    "What networking, internship, or career opportunities does this university offer that appeal to you?",

    // Course
    "Why do you want to study this particular course, and what is your main objective?",
    "Why did you choose this course over other programmes related to your field?",
    "What do you hope to achieve academically and personally by the end of your chosen course?",
    "What are the key topics and subjects covered in your chosen programme?",
    "What are some key skills you expect to develop throughout your course of study?",
    "How have your past studies prepared you for this course at the university?",
    "What aspects of the curriculum and structure of your course appeal to you the most?",
    "How does your chosen course compare to similar courses at other institutions?",
    "How do you think your course will help you achieve your career goals?",
    "How will you manage your time for classes, assignments, and other responsibilities?",
    "Do you intend to join any extracurricular clubs or groups related to your studies?",
  ],

  // ── MALTA STUDENT VISA / RESIDENCE PERMIT (40 questions) ──────
  visa: [
    // Introduction & Background
    "How would you like to introduce yourself?",
    "When was your last education qualification completed, and what have you been doing professionally since?",
    "Have you ever received a visa or residence permit refusal for any country? If so, please explain.",
    "Will you be bringing any dependants — such as a spouse, partner, or child — to Malta? If yes, what will they be doing?",
    "Do you have any relatives or close contacts already living in Malta?",
    "Do you have any known health conditions that may affect your ability to study?",
    "What is the name of the consultancy or agent you are applying through?",

    // Why Malta
    "Why have you chosen to study in Malta rather than pursuing a similar qualification in your home country?",
    "What factors influenced your decision to choose Malta as your study destination over other countries?",
    "How did the reputation of Maltese institutions influence your choice to study there?",
    "How popular is it to study in Malta among students from your home country?",
    "How did the cost to study in Malta compare to other countries you considered?",
    "Do Malta graduates have more advantages getting a job in your country? If yes, why?",

    // Institution & Course
    "What is the full name of the institution you have been accepted to?",
    "What course will you be studying, and why did you choose it?",
    "What are the key topics you will learn in your course?",
    "How does this course relate to your previous qualifications and your future career plans?",
    "What is your course fee, and who will be supporting the payments?",
    "How long is your course, and when does it start?",

    // Accommodation
    "Where will you be staying in Malta? Describe your accommodation, rent, and distance to the institution.",
    "What type of accommodation have you arranged — student residence, private rental, or homestay?",
    "How did you research and compare different accommodation options before making your decision?",
    "What factors influenced your choice of accommodation, such as cost, location, or amenities?",
    "How do you plan to commute between your accommodation and the campus?",
    "What safety and security measures were important to you when selecting your accommodation?",

    // Working Restrictions
    "Are you aware of the restrictions on working while studying in Malta on a student permit?",
    "How many hours per week are international students permitted to work during term time in Malta?",
    "Can you explain the rules around working hours for international students under your permit type?",
    "How familiar are you with the rules and regulations related to working on a Maltese student permit?",
    "Are you planning to look for a part-time job while studying in Malta?",

    // Financial Support
    "Who will be supporting you financially during your studies in Malta?",
    "Can you explain how you have saved or prepared financially for your studies, including savings or family contributions?",
    "Have you researched Malta's financial requirements for international students and how you meet them?",
    "What are the primary sources of funding you will use for tuition fees and living expenses?",
    "How have you budgeted for living expenses including accommodation, food, transport, and daily costs?",
    "How do you plan to cover any unexpected expenses that may arise during your studies?",
    "How will you manage currency exchange rates and their potential impact on your budget?",

    // Career & Return Plans
    "What are your plans after completing your studies in Malta?",
    "Are you planning to return to your home country after graduating? What will you do there?",
    "What family, professional, or social ties do you have to your home country that will ensure you return after your studies?",
    "How do you think your Maltese qualification will benefit your career in your home country?",
    "How do you plan to stay updated with any changes to immigration rules or regulations affecting your stay?",
  ],

  // ── SCHOLARSHIP (38 questions) ───────────────────────────────
  scholarship: [
    // Introduction & Personal
    "How would you like to introduce yourself and describe your background?",
    "Describe yourself in three words and explain why those words represent you.",
    "What are your strengths and weaknesses, and how are you working to improve them?",
    "Who is a role model or teacher who has inspired you the most, and why?",
    "What is your main aim in life, and where does this scholarship fit into that vision?",

    // Why Malta & University
    "Why have you chosen to study in Malta for this scholarship, rather than in your home country?",
    "What unique features or strengths of your chosen university made it your top choice?",
    "How does this university's teaching approach and faculty align with your academic goals?",
    "What special resources or facilities at this university will support your research or studies?",
    "How did you consider the benefits and drawbacks of different universities before making your final choice?",

    // Leadership & Impact
    "Describe a time you demonstrated leadership and created a measurable positive impact in your community.",
    "Can you provide an example of a situation where you took initiative to solve a significant problem?",
    "How have you contributed to your community, organisation, or country in a meaningful way?",
    "Describe a time when you had to adapt to a completely new environment or culture.",
    "Can you share a time when you managed multiple responsibilities simultaneously and still succeeded?",
    "Tell me about a significant failure or setback you experienced and what you learned from it.",

    // Career & Development
    "What specific problem in your home country are you most passionate about solving?",
    "How will your Malta studies directly help you contribute to development in your home country when you return?",
    "Can you describe your short-term goals (1–3 years) and long-term goals (5–10 years) after completing your degree?",
    "How do you plan to use the connections and networks you build during your studies to support your post-graduation plans?",
    "What are the three main jobs available in your country for graduates of your chosen course?",
    "What is the average salary range for your target role in your home country and abroad?",
    "How do you plan to give back to your home country or community with the knowledge and skills gained?",
    "What are your plans for keeping up with new developments and changes in your field after graduation?",

    // Scholarship Justification
    "Why do you deserve this scholarship over other equally qualified and motivated candidates?",
    "How does receiving this scholarship align with the values and mission of the awarding organisation?",
    "How will this scholarship change your life and the lives of those around you?",
    "What have you done to demonstrate commitment to the field you want to study?",
    "How have your past academic achievements and extracurricular activities prepared you for this programme?",

    // Financial & Practical
    "How will you fund any additional costs not covered by this scholarship?",
    "How do you plan to cover any unexpected expenses that may arise during your studies?",
    "Will you be bringing any dependants to Malta? If yes, what will they be doing?",
    "What is your plan for accommodation, and how does it suit your study needs?",

    // Personal & Cultural
    "What aspects of Maltese culture and academic life are you most looking forward to?",
    "How do you think meeting and studying alongside students from diverse international backgrounds will benefit you?",
    "What do you enjoy doing in your spare time, and how do those interests complement your academic goals?",
    "How have you maintained or improved your English language skills in preparation for studying in Malta?",
    "If you had the opportunity to create a new course or initiative at your university, what would it be and why?",
    "What advice would you give to a future scholarship applicant based on your experience so far?",
  ],
};


const TYPE_LABELS = {
  university: 'University Admission',
  visa: 'Malta Student Visa',
  scholarship: 'Scholarship Interview'
};

const QUESTIONS_PER_SESSION = 12;

// ---- STATE ----
let selectedType = null;
let currentQ = 0;
let questions = [];
let answers = [];
let feedbacks = [];
let isRecording = false;
let recognition = null;
let recordingTranscriptBase = '';
let timerInterval = null;
let timerSeconds = 120;
const TIMER_DURATION = 120;

// ---- GAZE TRACKING STATE ----
let gazeAwayCount = [];      // count of look-away events per question
let gazeAwayDuration = [];   // total seconds looking away per question
let isLookingAway = false;
let gazeAwayStartTime = null;
let gazeWarningTimeout = null;
let faceMeshInstance = null;
let faceMeshCamera = null;
let gazeDetectionActive = false;

// ---- ANTHROPIC API KEY ----
// Replace with your actual key from https://console.anthropic.com
const ANTHROPIC_API_KEY = 'YOUR_API_KEY_HERE';

// ---- HOME SCREEN ----
function selectType(el) {
  document.querySelectorAll('.type-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedType = el.dataset.type;
  document.getElementById('start-btn').disabled = false;
}

function startInterview() {
  if (!selectedType) return;
  const pool = [...QUESTIONS[selectedType]];
  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  questions = pool.slice(0, QUESTIONS_PER_SESSION);
  currentQ = 0;
  answers = [];
  feedbacks = [];
  gazeAwayCount = new Array(QUESTIONS_PER_SESSION).fill(0);
  gazeAwayDuration = new Array(QUESTIONS_PER_SESSION).fill(0);

  document.getElementById('interview-type-label').textContent = TYPE_LABELS[selectedType];
  showScreen('screen-interview');
  loadQuestion();
  startCamera();
}

// ---- SCREEN MANAGEMENT ----
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---- INTERVIEW FLOW ----
function loadQuestion() {
  updateProgress();
  document.getElementById('feedback-inline').style.display = 'none';
  document.getElementById('feedback-inline').innerHTML = '';
  document.getElementById('answer-area').style.display = 'none';

  const qa = document.getElementById('question-area');
  qa.innerHTML = `<div class="loading-state"><div class="spinner"></div><div class="loading-text">Loading question ${currentQ + 1}...</div></div>`;

  setTimeout(() => {
    const q = questions[currentQ];
    qa.innerHTML = `
      <div class="question-card">
        <div class="q-eyebrow">Question ${currentQ + 1} of ${questions.length}</div>
        <div class="q-text">${q}</div>
      </div>
      <div class="speaking-bar">
        <div class="pulse"></div>
        Dr. Clarke is waiting for your answer
      </div>
    `;
    const ta = document.getElementById('answer-text');
    ta.value = '';
    recordingTranscriptBase = '';
    document.getElementById('answer-area').style.display = 'block';
    document.getElementById('submit-btn').disabled = false;
    stopRecording();
    resetTimerDisplay();
  }, 600);
}

function updateProgress() {
  const pct = Math.round((currentQ / questions.length) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('q-counter').textContent = `Question ${currentQ + 1} of ${questions.length}`;
}

// ---- RECORDING ----
function toggleRecording() {
  if (isRecording) {
    stopRecording();
    stopTimer();
  } else {
    startRecording();
  }
}

function startRecording() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    alert('Speech recognition is not supported in this browser. Please use Chrome or Edge, or type your answer instead.');
    return;
  }

  recognition = new SR();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-GB';

  recordingTranscriptBase = document.getElementById('answer-text').value;

  recognition.onresult = (e) => {
    let interim = '';
    let final = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) {
        final += e.results[i][0].transcript + ' ';
      } else {
        interim += e.results[i][0].transcript;
      }
    }
    if (final) recordingTranscriptBase += final;
    document.getElementById('answer-text').value = recordingTranscriptBase + interim;
  };

  recognition.onerror = (e) => {
    if (e.error !== 'aborted') stopRecording();
  };

  recognition.onend = () => {
    if (isRecording) {
      try { recognition.start(); } catch(e) {}
    }
  };

  recognition.start();
  isRecording = true;
  startTimer();

  const btn = document.getElementById('mic-btn');
  btn.classList.add('recording');
  document.getElementById('mic-icon').className = 'ti ti-player-stop';
  document.getElementById('mic-label').textContent = 'Recording — tap to stop';
  document.getElementById('mic-dot').style.display = 'block';
}

function stopRecording() {
  if (recognition) {
    try { recognition.abort(); } catch(e) {}
    recognition = null;
  }
  isRecording = false;
  const btn = document.getElementById('mic-btn');
  if (btn) {
    btn.classList.remove('recording');
    document.getElementById('mic-icon').className = 'ti ti-microphone';
    document.getElementById('mic-label').textContent = 'Tap to speak';
    document.getElementById('mic-dot').style.display = 'none';
  }
}

// ---- SUBMIT ANSWER ----
function skipQuestion() {
  stopTimer();
  if (isRecording) stopRecording();
  answers.push('[No answer given — skipped]');
  feedbacks.push(null);
  updateHistory();
  moveToNext();
}

async function submitAnswer() {
  stopTimer();
  if (isRecording) stopRecording();
  const answer = document.getElementById('answer-text').value.trim();
  if (!answer) {
    alert('Please type or speak your answer before submitting.');
    return;
  }

  answers.push(answer);
  document.getElementById('answer-area').style.display = 'none';
  document.getElementById('submit-btn').disabled = true;

  const fb = document.getElementById('feedback-inline');
  fb.style.display = 'block';
  fb.innerHTML = `<div class="loading-state"><div class="spinner"></div><div class="loading-text">Analysing your answer with AI...</div></div>`;

  const result = await getFeedback(questions[currentQ], answer, currentQ);
  feedbacks[currentQ] = result;
  updateHistory();
  renderFeedback(result, fb);
}

// ---- AI FEEDBACK ----
async function getFeedback(question, answer, qIdx) {
  if (!ANTHROPIC_API_KEY || ANTHROPIC_API_KEY === 'YOUR_API_KEY_HERE') {
    return getMockFeedback(answer);
  }

  const typeLabel = TYPE_LABELS[selectedType];
  const prompt = `You are Dr. Emma Clarke, an expert Malta study abroad interview coach with 15 years of experience helping international students prepare for university admission, visa, and scholarship interviews.

Interview type: ${typeLabel}
Question asked: "${question}"
Student's answer: "${answer}"

Evaluate this answer thoroughly and fairly. Return ONLY a valid JSON object with no markdown, no backticks, and no extra text:
{
  "score": <a decimal number strictly between 4.5 and 7.0 — never below 4.5, never above 7.0. Use one decimal place e.g. 5.0, 5.5, 6.0, 6.5, 7.0. Weak answers: 4.5-5.4, average answers: 5.5-6.4, strong answers: 6.5-7.0>,
  "overall": "<2-3 sentence overall assessment in a warm, encouraging coaching tone>",
  "strengths": "<2-3 specific things the student did well — be concrete, not generic>",
  "improvements": "<2-3 specific, actionable areas to improve — give examples of what to add or change>",
  "ideal_approach": "<concisely describe what a strong 7 out of 10 answer would include — structure, key points, tone>"
}`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error('API error:', err);
      return getMockFeedback(answer);
    }

    const data = await res.json();
    const text = data.content
      .map(c => c.text || '')
      .join('')
      .replace(/```json|```/g, '')
      .trim();

    const parsed = JSON.parse(text);
    // Clamp score to 4.5–7.0 range
    if (typeof parsed.score === 'number') {
      parsed.score = Math.min(7.0, Math.max(4.5, parseFloat(parsed.score.toFixed(1))));
    }
    return parsed;
  } catch (err) {
    console.error('Feedback error:', err);
    return getMockFeedback(answer);
  }
}

function getMockFeedback(answer) {
  const wordCount = answer.split(/\s+/).filter(Boolean).length;
  const score = Math.min(7, Math.max(4.5, parseFloat((4.5 + Math.min(2.5, wordCount / 20)).toFixed(1))));
  return {
    score,
    overall: `Your answer shows genuine effort and covers some key points. To make it stronger, focus on using the STAR method (Situation, Task, Action, Result) and providing specific examples. Add your Anthropic API key to app.js to enable full AI-powered coaching.`,
    strengths: 'You attempted to address the question directly. Your response shows engagement with the topic and a willingness to share your perspective.',
    improvements: 'Add specific real-life examples from your own experience. Quantify achievements where possible (e.g. "I led a team of 5" rather than "I led a team"). Be more explicit about your motivations for choosing Malta specifically.',
    ideal_approach: 'A strong answer opens with a clear, specific example, walks through the context and your actions step by step, states the concrete outcome, and directly links it back to your goals for studying in Malta.'
  };
}

// ---- RENDER FEEDBACK ----
function renderFeedback(fb, container) {
  const score = fb ? fb.score : 0;
  const scoreColor = score >= 6.5 ? 'var(--green-600)' : score >= 5 ? 'var(--amber-600)' : 'var(--red-500)';
  const labelClass = score >= 6.5 ? 'high' : score >= 5 ? 'mid' : 'low';
  const labelText = score >= 6.5 ? 'Strong' : score >= 5.5 ? 'Good' : 'Developing';
  const isLast = currentQ >= questions.length - 1;

  container.innerHTML = `
    <div class="feedback-wrap">
      <div class="score-row">
        <span class="score-num" style="color:${scoreColor};">${score}</span>
        <span class="score-denom">/10</span>
        <span class="score-label ${labelClass}">${labelText}</span>
      </div>
      <div class="feedback-overall">${fb.overall}</div>
      <div class="feedback-cards">
        <div class="fb-card strengths">
          <div class="fb-card-label"><i class="ti ti-circle-check" aria-hidden="true"></i> Strengths</div>
          <div class="fb-card-text">${fb.strengths}</div>
        </div>
        <div class="fb-card improve">
          <div class="fb-card-label"><i class="ti ti-trending-up" aria-hidden="true"></i> To improve</div>
          <div class="fb-card-text">${fb.improvements}</div>
        </div>
      </div>
      <div class="fb-ideal">
        <div class="fb-ideal-label"><i class="ti ti-bulb" aria-hidden="true"></i> What a great answer looks like</div>
        <div class="fb-ideal-text">${fb.ideal_approach}</div>
      </div>
      <div class="fb-nav">
        <button class="btn-primary" onclick="moveToNext()">
          <i class="ti ${isLast ? 'ti-chart-bar' : 'ti-arrow-right'}" aria-hidden="true"></i>
          ${isLast ? 'See full results' : 'Next question'}
        </button>
        <button class="btn-ghost" onclick="retryQuestion()">
          <i class="ti ti-refresh" aria-hidden="true"></i>
          Try again
        </button>
      </div>
    </div>
  `;
}

// ---- HISTORY SIDEBAR ----
function updateHistory() {
  const list = document.getElementById('history-list');
  if (answers.length === 0) {
    list.innerHTML = '<div class="history-empty">No answers yet</div>';
    return;
  }
  let html = '';
  for (let i = 0; i < answers.length; i++) {
    const fb = feedbacks[i];
    const score = fb ? fb.score : null;
    let pillClass = 'none', scoreText = '—';
    if (score !== null) {
      scoreText = score + '/10';
      pillClass = score >= 6.5 ? 'high' : score >= 5 ? 'mid' : 'low';
    }
    const shortQ = questions[i].substring(0, 30) + '…';
    html += `<div class="history-item">
      <span class="h-q">Q${i + 1}: ${shortQ}</span>
      <span class="score-pill ${pillClass}">${scoreText}</span>
    </div>`;
  }
  list.innerHTML = html;
}

// ---- NAVIGATION ----
function moveToNext() {
  currentQ++;
  if (currentQ >= questions.length) {
    showResults();
  } else {
    loadQuestion();
  }
}

function retryQuestion() {
  stopTimer();
  answers.pop();
  feedbacks[currentQ] = undefined;
  loadQuestion();
  updateHistory();
}

function confirmEnd() {
  document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal-overlay').style.display = 'none';
}

function endInterview() {
  closeModal();
  stopRecording();
  if (answers.length === 0) {
    goHome();
    return;
  }
  showResults();
}

// ---- RESULTS SCREEN ----
function showResults() {
  showScreen('screen-results');

  const validScores = feedbacks
    .filter(f => f && typeof f.score === 'number' && f.score > 0)
    .map(f => f.score);
  const avg = validScores.length
    ? Math.round((validScores.reduce((a, b) => a + b, 0) / validScores.length) * 10) / 10
    : 0;
  const best = validScores.length ? Math.max(...validScores) : 0;
  const answered = answers.filter(a => !a.includes('skipped')).length;
  const readyText = avg >= 6.5 ? 'Yes ✓' : avg >= 5 ? 'Almost' : 'Keep going';
  const readyDesc = avg >= 6.5 ? 'Strong performance' : avg >= 5 ? 'Good progress' : 'More practice needed';

  const avgColor = avg >= 6.5 ? 'var(--green-600)' : avg >= 5 ? 'var(--amber-600)' : 'var(--red-500)';
  const bestColor = best >= 6.5 ? 'var(--green-600)' : best >= 5 ? 'var(--amber-600)' : 'var(--red-500)';

  const badgeEl = document.getElementById('results-badge');
  if (avg >= 6.5) {
    badgeEl.style.cssText = 'background:var(--green-50);color:var(--green-600);';
    badgeEl.textContent = '🎉 Great session!';
  } else if (avg >= 5.5) {
    badgeEl.style.cssText = 'background:var(--amber-50);color:var(--amber-600);';
    badgeEl.textContent = '💪 Good effort!';
  } else {
    badgeEl.style.cssText = 'background:var(--blue-50);color:var(--blue-600);';
    badgeEl.textContent = '📚 Keep practising!';
  }

  const totalGazeFlags = gazeAwayCount.reduce((a, b) => a + b, 0);
  const focusScore = questions.length
    ? Math.max(0, Math.round(100 - (totalGazeFlags / questions.length) * 20))
    : 100;
  const focusColor = focusScore >= 80 ? 'var(--green-600)' : focusScore >= 50 ? 'var(--amber-600)' : 'var(--red-500)';
  const focusDesc = totalGazeFlags === 0 ? 'Great eye contact' : `${totalGazeFlags} look-away${totalGazeFlags === 1 ? '' : 's'} detected`;

  document.getElementById('results-metrics').innerHTML = `
    <div class="metric-card">
      <div class="metric-label">Average score</div>
      <div class="metric-val" style="color:${avgColor};">${avg}</div>
      <div class="metric-sub">out of 10</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Best answer</div>
      <div class="metric-val" style="color:${bestColor};">${best}/10</div>
      <div class="metric-sub">your peak</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Answered</div>
      <div class="metric-val">${answered}</div>
      <div class="metric-sub">of ${questions.length} questions</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Focus score</div>
      <div class="metric-val" style="color:${focusColor};">${focusScore}%</div>
      <div class="metric-sub">${focusDesc}</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Malta ready?</div>
      <div class="metric-val" style="font-size:18px;">${readyText}</div>
      <div class="metric-sub">${readyDesc}</div>
    </div>
  `;

  let breakdownHTML = '';
  for (let i = 0; i < questions.length; i++) {
    const fb = feedbacks[i];
    const score = fb ? fb.score : null;
    const color = score !== null
      ? (score >= 6.5 ? 'var(--green-600)' : score >= 5 ? 'var(--amber-600)' : 'var(--red-500)')
      : 'var(--text-mute)';
    const tip = fb ? fb.improvements.split('.')[0] + '.' : 'No feedback available.';
    const gazeFlags = gazeAwayCount[i] || 0;
    const gazeBadge = gazeFlags > 0
      ? `<div class="breakdown-gaze-flag"><i class="ti ti-eye-off"></i> Looked away ${gazeFlags} time${gazeFlags === 1 ? '' : 's'}</div>`
      : '';

    breakdownHTML += `
      <div class="breakdown-item">
        <div class="breakdown-num">Q${i + 1}</div>
        <div class="breakdown-content">
          <div class="breakdown-q">${questions[i]}</div>
          ${fb ? `<div class="breakdown-fb">💡 ${tip}</div>` : '<div class="breakdown-fb">Skipped or unanswered</div>'}
          ${gazeBadge}
        </div>
        <div class="breakdown-score-col" style="color:${color};">${score !== null ? score + '/10' : '—'}</div>
      </div>
    `;
  }
  document.getElementById('q-breakdown').innerHTML = breakdownHTML;
}

function restartInterview() {
  currentQ = 0;
  answers = [];
  feedbacks = [];
  questions = [];
  startInterviewWithSameType();
}

function startInterviewWithSameType() {
  const pool = [...QUESTIONS[selectedType]];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  questions = pool.slice(0, QUESTIONS_PER_SESSION);
  currentQ = 0;
  answers = [];
  feedbacks = [];
  document.getElementById('interview-type-label').textContent = TYPE_LABELS[selectedType];
  showScreen('screen-interview');
  loadQuestion();
  startCamera();
  updateHistory();
}

function goHome() {
  stopRecording();
  stopCamera();
  selectedType = null;
  currentQ = 0;
  answers = [];
  feedbacks = [];
  questions = [];
  document.querySelectorAll('.type-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('start-btn').disabled = true;
  showScreen('screen-home');
}


// ---- TIMER ----
const CIRCUMFERENCE = 100; // matches stroke-dasharray in SVG

function resetTimerDisplay() {
  const textEl = document.getElementById('timer-text');
  const ringEl = document.getElementById('timer-ring-fill');
  const rowEl  = document.querySelector('.timer-row');
  const labelEl = document.getElementById('timer-label');
  if (!textEl || !ringEl || !rowEl) return;

  textEl.textContent = '2:00';
  ringEl.style.strokeDashoffset = 0;
  rowEl.classList.remove('warning', 'danger');
  if (labelEl) labelEl.textContent = 'Tap to speak to start';
}

function startTimer() {
  stopTimer(); // clear any existing
  timerSeconds = TIMER_DURATION;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();
    if (timerSeconds <= 0) {
      stopTimer();
      autoSubmitOnTimeout();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerDisplay() {
  const textEl = document.getElementById('timer-text');
  const ringEl = document.getElementById('timer-ring-fill');
  const rowEl  = document.querySelector('.timer-row');
  const labelEl = document.getElementById('timer-label');
  if (!textEl || !ringEl || !rowEl) return;

  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  textEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;

  // Shrink the ring as time runs out
  const progress = timerSeconds / TIMER_DURATION;
  const offset = CIRCUMFERENCE - (progress * CIRCUMFERENCE);
  ringEl.style.strokeDashoffset = offset;

  // Colour states
  rowEl.classList.remove('warning', 'danger');
  if (timerSeconds <= 30) {
    rowEl.classList.add('danger');
    labelEl.textContent = 'Hurry up!';
  } else if (timerSeconds <= 60) {
    rowEl.classList.add('warning');
    labelEl.textContent = 'Time running out';
  } else {
    labelEl.textContent = 'Time remaining';
  }
}

function autoSubmitOnTimeout() {
  const answer = document.getElementById('answer-text').value.trim();
  if (answer) {
    // Auto-submit if they have typed/spoken something
    submitAnswer();
  } else {
    // Skip if nothing entered
    const rowEl = document.querySelector('.timer-row');
    if (rowEl) rowEl.classList.add('danger');
    const labelEl = document.getElementById('timer-label');
    if (labelEl) labelEl.textContent = "Time's up!";
    setTimeout(() => skipQuestion(), 1200);
  }
}


// ---- CAMERA ----
let cameraStream = null;
let cameraEnabled = false;

// ---- GAZE / ATTENTION DETECTION ----
// Uses MediaPipe FaceMesh to estimate whether the student is looking at the
// screen, based on iris position relative to eye corners and head yaw.
const GAZE_AWAY_GRACE_MS = 1500;   // how long they can look away before we count it
const GAZE_WARNING_MS = 1200;      // how long the on-screen warning stays visible

function initFaceMesh() {
  if (faceMeshInstance || typeof FaceMesh === 'undefined') return;

  faceMeshInstance = new FaceMesh({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
  });
  faceMeshInstance.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });
  faceMeshInstance.onResults(onFaceMeshResults);
}

function onFaceMeshResults(results) {
  if (!gazeDetectionActive) return;

  const statusText = document.getElementById('gaze-status-text');
  const statusEl = document.getElementById('gaze-status');

  if (!results.multiFaceLandmarks || results.multiFaceLandmarks.length === 0) {
    // No face detected at all — treat as looking away
    handleGazeState(false, 'No face detected');
    return;
  }

  const lm = results.multiFaceLandmarks[0];

  // Key landmark indices (MediaPipe FaceMesh topology)
  const leftIris = lm[468];
  const rightIris = lm[473];
  const leftEyeOuter = lm[33];
  const leftEyeInner = lm[133];
  const rightEyeInner = lm[362];
  const rightEyeOuter = lm[263];
  const noseTip = lm[1];
  const leftFace = lm[234];
  const rightFace = lm[454];

  // Horizontal iris ratio within each eye (0 = looking far left, 1 = far right)
  const leftRatio = (leftIris.x - leftEyeOuter.x) / (leftEyeInner.x - leftEyeOuter.x || 1);
  const rightRatio = (rightIris.x - rightEyeInner.x) / (rightEyeOuter.x - rightEyeInner.x || 1);
  const avgGazeRatio = (leftRatio + rightRatio) / 2;

  // Head yaw estimate: nose position relative to face width
  const faceWidth = rightFace.x - leftFace.x;
  const noseOffset = faceWidth !== 0 ? (noseTip.x - (leftFace.x + faceWidth / 2)) / faceWidth : 0;

  const gazeOffCenter = avgGazeRatio < 0.30 || avgGazeRatio > 0.70;
  const headTurned = Math.abs(noseOffset) > 0.18;

  const lookingAway = gazeOffCenter || headTurned;

  if (lookingAway) {
    handleGazeState(false, headTurned ? 'Head turned away' : 'Eyes off screen');
  } else {
    handleGazeState(true, 'Looking at screen');
  }
}

function handleGazeState(isLooking, label) {
  const statusText = document.getElementById('gaze-status-text');
  const statusEl = document.getElementById('gaze-status');
  if (statusText) statusText.textContent = label;
  if (statusEl) statusEl.classList.toggle('away', !isLooking);

  if (!isLooking) {
    if (!isLookingAway) {
      isLookingAway = true;
      gazeAwayStartTime = Date.now();
    } else if (Date.now() - gazeAwayStartTime > GAZE_AWAY_GRACE_MS) {
      // Sustained look-away — log it once per continuous away-period
      if (!gazeAwayStartTime.logged) {
        flagGazeAway();
        gazeAwayStartTime.logged = true;
      }
      showGazeWarning();
    }
  } else {
    isLookingAway = false;
    gazeAwayStartTime = null;
    hideGazeWarning();
  }
}

function flagGazeAway() {
  if (currentQ >= 0 && currentQ < gazeAwayCount.length) {
    gazeAwayCount[currentQ] = (gazeAwayCount[currentQ] || 0) + 1;
  }
}

let gazeWarningHideTimer = null;
function showGazeWarning() {
  const el = document.getElementById('gaze-warning');
  if (!el) return;
  el.style.display = 'flex';
  clearTimeout(gazeWarningHideTimer);
}

function hideGazeWarning() {
  const el = document.getElementById('gaze-warning');
  if (!el) return;
  clearTimeout(gazeWarningHideTimer);
  gazeWarningHideTimer = setTimeout(() => { el.style.display = 'none'; }, GAZE_WARNING_MS);
}

function startGazeDetection() {
  if (typeof FaceMesh === 'undefined' || typeof Camera === 'undefined') {
    console.warn('MediaPipe FaceMesh not available — gaze detection disabled.');
    const statusText = document.getElementById('gaze-status-text');
    if (statusText) statusText.textContent = 'Eye tracking unavailable';
    return;
  }
  initFaceMesh();
  const video = document.getElementById('camera-video');
  if (!video) return;

  faceMeshCamera = new Camera(video, {
    onFrame: async () => {
      if (faceMeshInstance && gazeDetectionActive) {
        await faceMeshInstance.send({ image: video });
      }
    },
    width: 320,
    height: 240
  });
  faceMeshCamera.start();
  gazeDetectionActive = true;
}

function stopGazeDetection() {
  gazeDetectionActive = false;
  if (faceMeshCamera) {
    try { faceMeshCamera.stop(); } catch (e) {}
    faceMeshCamera = null;
  }
  isLookingAway = false;
  gazeAwayStartTime = null;
  hideGazeWarning();
  const statusText = document.getElementById('gaze-status-text');
  if (statusText) statusText.textContent = 'Eye tracking ready';
}

async function startCamera() {
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    const video = document.getElementById('camera-video');
    video.srcObject = cameraStream;
    cameraEnabled = true;
    document.getElementById('camera-off-msg').style.display = 'none';
    document.getElementById('camera-rec-dot').style.display = 'block';
    document.getElementById('camera-rec-label').style.display = 'block';
    document.getElementById('camera-toggle-icon').className = 'ti ti-video-off';
    document.getElementById('camera-toggle-label').textContent = 'Disable camera';
    video.onloadeddata = () => startGazeDetection();
  } catch (err) {
    console.warn('Camera access denied or unavailable:', err);
    document.getElementById('camera-off-msg').innerHTML = '<i class="ti ti-video-off"></i><span>Camera unavailable</span>';
  }
}

function stopCamera() {
  stopGazeDetection();
  if (cameraStream) {
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
  const video = document.getElementById('camera-video');
  if (video) video.srcObject = null;
  cameraEnabled = false;
  const offMsg = document.getElementById('camera-off-msg');
  if (offMsg) { offMsg.style.display = 'flex'; offMsg.innerHTML = '<i class="ti ti-video-off"></i><span>Camera off</span>'; }
  const dot = document.getElementById('camera-rec-dot');
  if (dot) dot.style.display = 'none';
  const lbl = document.getElementById('camera-rec-label');
  if (lbl) lbl.style.display = 'none';
  const icon = document.getElementById('camera-toggle-icon');
  if (icon) icon.className = 'ti ti-video';
  const toggleLbl = document.getElementById('camera-toggle-label');
  if (toggleLbl) toggleLbl.textContent = 'Enable camera';
}

function toggleCamera() {
  if (cameraEnabled) {
    stopCamera();
  } else {
    startCamera();
  }
}

// ---- KEYBOARD SHORTCUTS ----
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('modal-overlay');
    if (modal.style.display !== 'none') closeModal();
  }
});
