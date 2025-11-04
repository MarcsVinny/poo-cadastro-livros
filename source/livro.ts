export class Livro {
    private titulo: string;
    private autor: string;
    private ano: number;
    private paginas: number;

    constructor(titulo: string, autor: string, ano: number, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.paginas = paginas;
    }

    // Getters e Setters
    public getTitulo(): string {
        return this.titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public getAno(): number {
        return this.ano;
    }

    public getPaginas(): number {
        return this.paginas;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public setAno(ano: number): void {
        this.ano = ano;
    }

    public setPaginas(paginas: number): void {
        this.paginas = paginas;
    }

    public exibirDetalhes(): string {
        return `Título: ${this.titulo}\nAutor: ${this.autor}\nAno: ${this.ano}\nPáginas: ${this.paginas}`;
    }
}
