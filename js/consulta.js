document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.querySelector("#tabela-consultas tbody");
  const mensagem = document.getElementById("mensagem");

  // Busca os dados salvos no navegador (se houver)
  const consultas = JSON.parse(localStorage.getItem("consultas")) || [];

  if (consultas.length === 0) {
    mensagem.textContent = "Você ainda não tem consultas agendadas.";
    return;
  }

  consultas.forEach(consulta => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${consulta.data}</td>
      <td>${consulta.hora}</td>
      <td>${consulta.medico}</td>
      <td>${consulta.paciente}</td>
    `;

    tabela.appendChild(tr);
  });
});
