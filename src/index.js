import "./styles.css";

let turma = 0;
let media_turma = 0;
let x = 0;
function menu() {
  x = prompt(`Digite sua opção:
  1-Cadrastrar nota do aluno.
  2-Mostrar a média da Turma.
  3-Sair.`);
}
while (x != 3) {
  menu();
  switch (x) {
    case "1":
      let aluno = prompt("digite o nome do aluno");
      let nota1 = parseFloat(prompt("Digite a Nota 1"));
      let nota2 = parseFloat(prompt("Digite a Nota 2"));
      let nota3 = parseFloat(prompt("Digite a Nota 3"));
      let media_aluno = parseFloat((nota1 + nota2 + nota3) / 3).toFixed(2);
      media_turma = media_turma + media_aluno;
      turma++;
      if (media_aluno >= 8) {
        document.write(
          `${turma} - ${aluno} teve media: ${media_aluno}. (Esta Aprovado)<br>`
        );
      } else if (media_aluno >= 6) {
        document.write(
          `${turma} - ${aluno} teve media: ${media_aluno}. (Esta em Recuperação)<br>`
        );
        let nota_recuperação1 = parseFloat(prompt("Digite a Nota 1"));
        let nota_recuperação2 = parseFloat(prompt("Digite a Nota 2"));
        let nota_recuperação3 = parseFloat(prompt("Digite a Nota 3"));
        let media_aluno_recuperação = parseFloat(
          (nota_recuperação1 + nota_recuperação2 + nota_recuperação3) / 3
        ).toFixed(2);
        if (media_aluno_recuperação >= 7) {
          document.write(
            `${turma} - ${aluno} teve media: ${media_aluno}.(Aprovado na Recuperação)<br>`
          );
        } else
          document.write(
            `${turma} - ${aluno} teve media: ${media_aluno}. (Reprovado na Recuperação)<br>`
          );
      } else {
        document.write(
          `${turma} - ${aluno} teve media: ${media_aluno}. (Esta Reprovado)<br>`
        );
      }
      break;

    case "2":
      alert(`A media da truma é: ${(media_turma / turma).toFixed(2)}`);
      break;
  }
}

Document.write(`A media da turma é: ${(media_turma / turma).toFixed(2)}.<br>`);
