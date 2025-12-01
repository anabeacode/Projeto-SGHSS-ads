const nomeEl = document.getElementById("nome"); 

const nascimentoEl = document.getElementById("nascimento"); 

const historicoEl = document.getElementById("historico"); 

const listaConsultas = document.getElementById("lista-consultas"); 

const btnEditar = document.getElementById("btnEditar"); 

 

      listaConsultas.innerHTML = "<li>Nenhuma consulta registrada.</li>"; 

    } 

  } 

} 

 

function editarProntuario() { 

  const novoNome = prompt("Nome do paciente:", nomeEl.textContent); 

  const novoNascimento = prompt("Data de nascimento:", nascimentoEl.textContent); 

  const novoHistorico = prompt(" Histórico médico:", historicoEl.textContent); 

 

  nomeEl.textContent = novoNome || nomeEl.textContent; 

  nascimentoEl.textContent = novoNascimento || nascimentoEl.textContent; 

  historicoEl.textContent = novoHistorico || historicoEl.textContent; 

 

  const dados = { 

    nome: nomeEl.textContent, 

    nascimento: nascimentoEl.textContent, 

    historico: historicoEl.textContent, 

    consultas: JSON.parse(localStorage.getItem("consultasPaciente")) || [], 

  }; 

 

  localStorage.setItem("prontuarioPaciente", JSON.stringify(dados)); 

  alert(" Prontuário atualizado com sucesso!"); 

} 

 

if (btnEditar) { 

  btnEditar.addEventListener("click", editarProntuario); 

} 

 

window.addEventListener("load", carregarProntuario); 

function carregarProntuario() {
  const dados = JSON.parse(localStorage.getItem("prontuarioPaciente"));
  if (dados) {
    nomeEl.textContent = dados.nome;
    nascimentoEl.textContent = dados.nascimento;
    historicoEl.textContent = dados.historico;

    listaConsultas.innerHTML = "";
    if (dados.consultas.length > 0) {
      dados.consultas.forEach(consulta => {
        const li = document.createElement("li");
        li.textContent = `${consulta.data} às ${consulta.hora} - ${consulta.medico}`;
        listaConsultas.appendChild(li);
      });
    } else {
      listaConsultas.innerHTML = "<li>Nenhuma consulta registrada.</li>";
    }
  }
}