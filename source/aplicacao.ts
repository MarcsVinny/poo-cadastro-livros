import { Biblioteca } from "./biblioteca";
import { Livro } from "./livro";
import { InteracaoConsole } from "./interacaoConsole";

export class Aplicacao {
    private biblioteca: Biblioteca;
    private interacao: InteracaoConsole;

    constructor() {
        this.biblioteca = new Biblioteca();
        this.interacao = new InteracaoConsole();
    }

    public iniciar(): void {
        let opcao: string;

        do {
            opcao = this.interacao.solicitarTexto(
                "=== MENU ===\n" +
                "1 - Cadastrar livro\n" +
                "2 - Listar livros\n" +
                "3 - Buscar livro\n" +
                "4 - Remover livro\n" +
                "0 - Sair\n\n" +
                "Escolha uma opção:"
            );

            switch (opcao) {
                case "1":
                    this.cadastrarLivro();
                    break;
                case "2":
                    this.biblioteca.listarLivros();
                    break;
                case "3":
                    this.buscarLivro();
                    break;
                case "4":
                    this.removerLivro();
                    break;
                case "0":
                    alert("Encerrando o sistema...");
                    break;
                default:
                    alert("Opção inválida. Tente novamente.");
            }
        } while (opcao !== "0");
    }

    private cadastrarLivro(): void {
        const titulo = this.interacao.solicitarTexto("Informe o título do livro:");
        const autor = this.interacao.solicitarTexto("Informe o autor:");
        const ano = this.interacao.solicitarNumero("Informe o ano de publicação:");
        const paginas = this.interacao.solicitarNumero("Informe o número de páginas:");

        const livro = new Livro(titulo, autor, ano, paginas);
        this.biblioteca.adicionarLivro(livro);
    }

    private buscarLivro(): void {
        const titulo = this.interacao.solicitarTexto("Informe o título do livro que deseja buscar:");
        const livro = this.biblioteca.buscarLivro(titulo);

        if (livro) {
            alert("Livro encontrado:\n\n" + livro.exibirDetalhes());
        } else {
            alert("Livro não encontrado.");
        }
    }

    private removerLivro(): void {
        const titulo = this.interacao.solicitarTexto("Informe o título do livro que deseja remover:");
        this.biblioteca.removerLivro(titulo);
    }
}
