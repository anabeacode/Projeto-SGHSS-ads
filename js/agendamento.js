const formAgendamento = document.getElementById("form-agendamento");

if (formAgendamento) {
  formAgendamento.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const paciente = document.getElementById("paciente").value.trim();
    const medico = document.getElementById("medico").value.trim();
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const msg = document.getElementById("mensagem-agendamento");

    if (paciente && medico && data && hora) {
      const consultas = JSON.parse(localStorage.getItem("consultas")) || [];
      consultas.push(consulta);
      localStorage.setItem("consultas", JSON.stringify(consultas));
      msg.style.color = "green";
      msg.textContent = "Consulta agendada com sucesso!";
      formAgendamento.reset();
     
      setTimeout(() => {
        msg.textContent = "";
      }, 3000);
    } else {
      msg.style.color = "red";
      msg.textContent = "Preencha todos os campos!";
    }
  });
}

const horaInput = document.getElementById("hora");
if (horaInput) {
  horaInput.addEventListener("input", function () {
    const horaSelecionada = event.target.value;
    if (horaSelecionada < "08:00" || horaSelecionada > "18:00") {
      alert("⚠️ O horário deve ser entre 08:00 e 18:00.");
      event.target.value = "";
    }
  });
}

const dataInput = document.getElementById("data");
if (dataInput) {
  const hoje = new Date().toISOString().split("T")[0];
  dataInput.setAttribute("min", hoje);
}

const consultasSalvas = JSON.parse(localStorage.getItem("consultasPaciente")) || [];

consultasSalvas.push({
  data: data,
  hora: hora,
  medico: medico,
  especialidade: medico, 
  paciente: paciente
});

localStorage.setItem("consultasPaciente", JSON.stringify(consultasSalvas));
