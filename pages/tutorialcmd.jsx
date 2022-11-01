export function Tutorialcmd() {
    return (
        <div>
            <h2>type nul &gt; "nomedoarquivo.txt"</h2>
            <h2>Cria um arquivo txt vazio.</h2>

            <h2>copy con "nomedoarquivo".txt</h2>
            <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h2>
            <h2>Cria um arquivo txt com o texto inserido na sequência.</h2>

            <h2>"digite seu texto aqui" &gt; "nomedoarquivo".txt</h2>
            <h2>Cria um arquivo txt com o texto declarado.</h2>

            <h2>fsutil file createnew "nomedoarquivo".txt 1000.</h2>
            <h2>Cria um arquivo vazio com tamanho expecificado. Ex: 1000, é o número de bytes que ele deve ter.</h2>

        </div>
    )
}