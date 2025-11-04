import { Livro } from "./livro";

export class Biblioteca {
    private livros: Livro[] = [];

    public adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
        alert(" Livro cadastrado com sucesso!");
    }

    public listarLivros(): void {
        if (this.livros.length === 0) {
            alert("Nenhum livro cadastrado.");
            return;
        }

        let lista = " Livros cadastrados:\n\n";
        this.livros.forEach((livro, i) => {
            lista += `${i + 1}. ${livro.getTitulo()} - ${livro.getAutor()} (${livro.getAno()})\n`;
        });

        alert(lista);
    }

    public buscarLivro(titulo: string): Livro | null {
        for (let livro of this.livros) {
            if (livro.getTitulo().toLowerCase() === titulo.toLowerCase()) {
                return livro;
            }
        }
        return null;
    }

    public removerLivro(titulo: string): void {
        const index = this.livros.findIndex(l => l.getTitulo().toLowerCase() === titulo.toLowerCase());

        if (index !== -1) {
            this.livros.splice(index, 1);
            alert(" Livro removido com sucesso!");
        } else {
            alert("Livro não encontrado.");
        }
    }
}
