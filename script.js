document.addEventListener('DOMContentLoaded', function () {
    const questions = [
      ["You enjoy vibrant social events with lots of people.", 'E', 'I', "Yes", "No"],
      ["You often spend time exploring unrealistic yet intriguing ideas.", 'N', 'S', "Yes", "No"],
      ["You rely more on logic than feelings when making decisions.", 'T', 'F', "Yes", "No"],
      ["You prefer to have a to-do list than go with the flow.", 'J', 'P', "Yes", "No"],
      ["Being around people energizes you.", 'E', 'I', "Yes", "No"],
      ["You prefer facts over theories.", 'S', 'N', "Yes", "No"],
      ["You follow your heart when making choices.", 'F', 'T', "Yes", "No"],
      ["You like to plan everything ahead of time.", 'J', 'P', "Yes", "No"],
      ["You are the life of the party.", 'E', 'I', "Yes", "No"],
      ["You prefer hands-on experience over book knowledge.", 'S', 'N', "Yes", "No"],
      ["You prioritize emotional responses over cold logic.", 'F', 'T', "Yes", "No"],
      ["You work best with a clear structure.", 'J', 'P', "Yes", "No"],
      ["You make new friends easily.", 'E', 'I', "Yes", "No"],
      ["You focus on present realities more than future possibilities.", 'S', 'N', "Yes", "No"],
      ["You dislike making decisions based only on facts.", 'F', 'T', "Yes", "No"]
    ];
  
    const professions = {
      ISTJ: ["Accountant", "Auditor", "Logistician"],
      ISFJ: ["Nurse", "Librarian", "Elementary School Teacher"],
      INFJ: ["Psychologist", "Writer", "Professor"],
      INTJ: ["Scientist", "Engineer", "Strategist"],
      ISTP: ["Mechanic", "Pilot", "Software Developer"],
      ISFP: ["Artist", "Chef", "Designer"],
      INFP: ["Counselor", "Author", "Linguist"],
      INTP: ["Philosopher", "Programmer", "Architect"],
      ESTP: ["Sales Representative", "Paramedic", "Entrepreneur"],
      ESFP: ["Actor", "Musician", "Event Planner"],
      ENFP: ["Journalist", "Public Relations", "Creative Director"],
      ENTP: ["Inventor", "Consultant", "Startup Founder"],
      ESTJ: ["Manager", "Military Officer", "Police Officer"],
      ESFJ: ["Social Worker", "Nurse", "HR Specialist"],
      ENFJ: ["Teacher", "Life Coach", "Politician"],
      ENTJ: ["CEO", "Lawyer", "Project Manager"]
    };
  
    const questionContainer = document.getElementById('questions');
  
    questions.forEach((q, index) => {
      questionContainer.innerHTML += `
        <div class="question">
          <p>${index + 1}. ${q[0]}</p>
          <label><input type="radio" name="q${index}" value="${q[1]}" required> ${q[3]}</label>
          <label><input type="radio" name="q${index}" value="${q[2]}"> ${q[4]}</label>
        </div>
      `;
    });
  
    document.getElementById('mbtiQuiz').addEventListener('submit', function (e) {
      e.preventDefault();
  
      let counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
      questions.forEach((_, i) => {
        const val = document.querySelector(`input[name=q${i}]:checked`).value;
        counts[val]++;
      });
  
      const mbti = [
        counts.E >= counts.I ? 'E' : 'I',
        counts.S >= counts.N ? 'S' : 'N',
        counts.T >= counts.F ? 'T' : 'F',
        counts.J >= counts.P ? 'J' : 'P'
      ].join('');
  
      const professionList = professions[mbti] || ["Profession not found"];
      const resultContainer = document.getElementById('result');
  
      resultContainer.innerHTML = `
        Your MBTI Type: <b>${mbti}</b><br>
        Suggested Professions:
        <ul>${professionList.map(job => `<li>${job}</li>`).join('')}</ul>
      `;
    });
  });
  