const progress=document.getElementById("progress");
window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h*100)+"%"});

document.getElementById("themeBtn").addEventListener("click",()=>{
  document.body.classList.toggle("darkmode");
  document.getElementById("themeBtn").textContent=document.body.classList.contains("darkmode")?"☀️":"🌙";
});

const aRange=document.getElementById("aRange"),bRange=document.getElementById("bRange");
function updateSim(){
  const a=+aRange.value,b=+bRange.value;
  document.getElementById("aOut").textContent=a;
  document.getElementById("bOut").textContent=b;
  document.getElementById("expression").textContent=`${a}² − ${b}² = ${a*a-b*b}`;
  document.getElementById("factorization").textContent=`(${a} − ${b})(${a} + ${b}) = ${a*a-b*b}`;
}
aRange.addEventListener("input",updateSim);bRange.addEventListener("input",updateSim);updateSim();

function checkQuiz(){
  const answers={q1:"a",q2:"b",q3:"a"};
  let score=0;
  for(const q in answers){
    const selected=document.querySelector(`input[name="${q}"]:checked`);
    if(selected && selected.value===answers[q]) score++;
  }
  const result=document.getElementById("quizResult");
  result.textContent=`Resultado: ${score}/3 respuestas correctas.`;
  result.style.color=score===3?"#16836f":"#b26a00";
}
