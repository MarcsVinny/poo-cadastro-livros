export class InteracaoConsole {
    public solicitarTexto(mensagem: string): string {
        return prompt(mensagem) || "";
    }

    public solicitarNumero(mensagem: string): number {
        const valor = prompt(mensagem);
        return valor ? Number(valor) : 0;
    }

    public exibirMensagem(mensagem: string): void {
        alert(mensagem);
    }
}
