import styleHeader from '../styles/cabecalho.module.css'
import styleContainer from '../styles/container.module.css'
import styleRodape from '../styles/rodape.module.css'
import styleformNews from '../styles/form_newsletter.module.css'
import styleCursos from '../styles/cursos.module.css'
import styleVideos from '../styles/video.module.css'
import stylePlanos from '../styles/planos.module.css'
import styleBeneficios from '../styles/beneficios.module.css'
import styleChamadaYouTube from '../styles/chamadayoutube.module.css'
import styleChamadaApp from '../styles/chamada-app.module.css'
 


export default function MusicDot() {

	return (
		<>
			<header className={styleHeader.cabecalho + " " + styleContainer.container}>
				<a href="/">
					<img src="/musicdot-logo-light.svg" title="Ir para a página inicial da Musicdot" alt="logo MusicDot"></img>
				</a>

				<nav>
					<ul className={styleHeader.cabecalho__menu}>
						<li className={styleHeader.cabecalho__item_menu}><a href="sobre.php#contato"> Contato </a></li>
						<li className={styleHeader.cabecalho__item_menu}><a href="/"> Entrar </a></li>
						<li className={styleHeader.cabecalho__item_menu + " " + styleHeader.cabecalho__item_menu__matricular}><a href="#"> Cadastrar-se </a></li>
					</ul>
				</nav>

			</header>

			<main>
				<section className={styleCursos.cursos}>
					<article className={styleCursos.cursos__chamada + " " + styleCursos.largura_grande}>
						<h1 className={styleCursos.chamada__titulo}>Cursos online de <strong className={styleCursos.chamada__titulo__destaque}>música</strong></h1>
						<p>Comece agora e aprenda sua primeira música em 10 minutos!</p>
						<a href="cursos.html" className={styleCursos.chamada__cursos__matricula + " " + styleCursos.botao}>Matricule-se</a>
					</article>
					<nav>
						<ul className={styleCursos.cursos__lista}>
							<li className={styleCursos.curso__tecladopiano}>
								<a href="#">Teclado & Piano</a>
							</li>
							<li className={styleCursos.curso__violaoguitarra}>
								<a href="#">Violão & Guitarra</a>
							</li>
							<li className={styleCursos.curso__baixo}>
								<a href="#">Baixo</a>
							</li>
							<li className={styleCursos.curso__bateria + " " + styleCursos.curso__destaque}>
								<a href="#">Bateria</a>
							</li>
							<li className={styleCursos.curso__percussao}>
								<a href="#">Percussão</a>
							</li>
							<li className={styleCursos.curso__canto + " " + styleCursos.curso__destaque2}>
								<a href="#">Canto</a>
							</li>
							<li className={styleCursos.curso__audio}>
								<a href="#">Áudio</a>
							</li>
							<li className={styleCursos.curso__teoria}>
								<a href="#">Teoria</a>
							</li>
							<li className={styleCursos.curso__sopro}>
								<a href="#">Sopro</a>
							</li>
							<li className={styleCursos.curso__cordas}>
								<a href="#">Cordas</a>
							</li>
						</ul>
					</nav>
				</section>
				<section className={styleVideos.video}>
					<video controls className={styleVideos.video__mobile} src="/video-promocional.mp4" poster="/video-principal-mobile.png"></video>
					<video controls className={styleVideos.video__desktop} src="/video-promocional.mp4" poster="/video-principal2.png"></video>
					<article className={styleVideos.video__textos}>
						<h2 className={styleVideos.textos__titulo}>Estude com os melhores professores</h2>
						<p>Aprenda no seu ritmo, sem sair de casa</p>
					</article>
				</section>
				<section className={stylePlanos.planos}>
					<h2 className={stylePlanos.planos__titulo}>Acesso ilimitado a todos os cursos</h2>
					<article className={stylePlanos.cards__planoanual}>
						<span className={stylePlanos.plano__destaque}>+ Assinado</span>
						<div className={stylePlanos.planos__card + " " + stylePlanos.card__anual}>
							<h3 className={stylePlanos.plano__titulo}>Plano Anual</h3>
							<p>12x <span className={stylePlanos.valor__destaque}>R$ 50,00</span></p>
							<p>Valor total de R$ 600,00</p>
							<span>Acesso à Alura Língua</span>
							<a href="cursos.html" className={stylePlanos.cards__botao + " " + stylePlanos.botao}>Matricule-se</a>
						</div>
					</article>

					<article className={stylePlanos.planos__card + " " + stylePlanos.card__semestral}>
						<h3 className={stylePlanos.plano__titulo}>Plano Semestral</h3>
						<p>12x <span className={stylePlanos.valor__destaque}>R$ 60,00</span></p>
						<p>Valor total de R$ 360,00</p>
						<a href="cursos.html" className={stylePlanos.cards__botao + " " + stylePlanos.botao}>Matricule-se</a>
					</article>
					<article className={stylePlanos.planos__pagamentos}>
						<p>Pagamento seguro com PayPal</p>
						<p>Oferecemos boleto à vista, <a href="#">basta entrar em contato</a></p>
					</article>
				</section>

				<section className={styleBeneficios.beneficios}>
					<h2 className={styleBeneficios.beneficios__titulo}>Porque estudar na Musicdot?</h2>
					<ul className={styleBeneficios.beneficios__lista}>
						<li className={styleBeneficios.beneficio__paravoce}>
							<h3 className={styleBeneficios.beneficio__titulo}>Tudo para você realmente aprender</h3>
							<p className={styleBeneficios.beneficio__texto}>Você acessa todo o conteúdo! São aulas, exercícios, play
								backs, cifras, partituras e tira dúvidas. Estudem em qualquer lugar, qualquer dia, qualquer horári
								o, ilimitado. Matricule-se já</p>
						</li>
						<li className={styleBeneficios.beneficio__duvidas}>
							<h3 className={styleBeneficios.beneficio__titulo}>Nenhuma dúvida sem resposta</h3>
							<p className={styleBeneficios.beneficio__texto}>Dúvidas são importantes para o seu aprendizado, e as dif
								iculdades são normais. Na MusicDot você estuda com todo o suporte necessário. Além de todo conteúd
								o, você tira dúvidas.</p>
						</li>
						<li className={styleBeneficios.beneficio__didatica}>
							<h3 className={styleBeneficios.beneficio__titulo}>Didática cuidadosa que te faz aprender</h3>
							<p className={styleBeneficios.beneficio__texto}>Saber tocar não quer dizer saber ensinar. Na MusicDot vo
								cê encontra os dois! Nosso orgulho é justo o extremo cuidado didático que temo com as aulas. Inves
								timos muito tempo.</p>
						</li>
						<li className={styleBeneficios.beneficio__online}>
							<h3 className={styleBeneficios.beneficio__titulo}>Estudar online é a melhor opção</h3>
							<p className={styleBeneficios.beneficio__texto}>Aprender em DVD e revistinha de banca são coisas do passado!
								Estudar com um professor particular é bom, mas quem é o seu professor?
								A MusicDot te oferece a melhor aula, a qualquer hora.</p>
						</li>
					</ul>
				</section>

				<section className={styleChamadaYouTube.chamada__youtube}>
					<article className={styleChamadaYouTube.chamada__youtube__canal + " " + styleChamadaYouTube.youtube__informacao + " " + styleChamadaYouTube.icone__youtube + " " + styleChamadaYouTube.largura_grande}>
						<h2 className={styleChamadaYouTube.canal__titulo}>Nosso canal no YouTube</h2>
						<p className={styleChamadaYouTube.canal__texto}>Cursos online de Teclado, Piano, Canto, Violão, Guitarra, Teoria Musical e mais!</p>
						<a href="https://www.youtube.com/user/musicdotonline" className={styleChamadaYouTube.canal__button + " " + styleChamadaYouTube.botao}>VerCanal</a>
					</article>
					<article className={styleChamadaYouTube.chamada__youtube__canal + " " + styleChamadaYouTube.chamada__youtube__video1}>
						<a className={styleChamadaYouTube.video__descricao} href="#">
							<h2 className={styleChamadaYouTube.descricao__titulo}>Aula de Canto para Iniciantes (dicas básicas)</h2>
							<p className={styleChamadaYouTube.descricao__texto}>Nessa aula a professora Anny Cee dá as primeiras dicas
								para você começar o seu estudo do Canto.</p>
						</a>
					</article>
					<article className={styleChamadaYouTube.chamada__youtube__canal + " " + styleChamadaYouTube.chamada__youtube__video2}>
						<a className={styleChamadaYouTube.video__descricao} href="#">
							<h2 className={styleChamadaYouTube.descricao__titulo}>Toque teclado em 10 minutos! (Aula de teclado para iniciantes)</h2>
							<p className={styleChamadaYouTube.descricao__texto}>Essa é a primeira aula do curso de teclado da MusicDot.
								Aqui você aprenderá a nomear todas...</p>
						</a>
					</article>
				</section>

				<section className={styleChamadaApp.chamada__aplicativo}>
					<h2 className={styleChamadaApp.aplicativo__titulo}>Estude em qualquer lugar com o App</h2>
					<p className={styleChamadaApp.aplicativo__texto}>Com o aplicativo da MusicDot você baixa as aulas para estud
						ar offline e fazer os exercícios. Disponível para Android e iOS. Já é aluno? <strong className={styleChamadaApp.textodestaque}>Baixe já:</strong></p>
					<a href="https://play.google.com/store/apps/details?id=br.com.musicdot&hl=en"
						className={styleChamadaApp.aplicativo__button + " " + styleChamadaApp.app__download__android + " " + styleChamadaApp.botao}>Android</a>
					<a href="https://apps.apple.com/br/app/musicdot/id1333842849"
						className={styleChamadaApp.aplicativo__button + " " + styleChamadaApp.app__download__ios + " " + styleChamadaApp.botao}>iOS</a>
				</section>

			</main>
			<footer className={styleRodape.rodape + " " + styleContainer.container}>

				<section className={styleRodape.rodape__secao + " " + styleRodape.rodape__secao__sobre}>
					<img className={styleRodape.rodape_logo} src= "/logo.svg" alt="Logo da MusicDot" />

					<p className={styleRodape.rodape__infos_empresa}>
						AOVS Sistemas de Informática S.A.
						<br />
						05.555.382/0001-33
						<br />
						Rua Vergueiro - São Paulo/SP
						<br />
						Telefone (11) 4118-3319
					</p>

					<ul className={styleRodape.rodape__lista_midias_sociais}>
						<li className={styleRodape.rodape__item_midias_sociais}>
							<a href="https://www.facebook.com/musicdotonline">
								<img src="/footer-icone-facebook.svg" alt="MusicDot no Facebook" />
							</a>
						</li>

						<li className={styleRodape.rodape__item_midias_sociais}>
							<a href="https://www.youtube.com/user/musicdotonline">
								<img src="/footer-icone-youtube.svg" alt="MusicDot no YouTube" />
							</a>
						</li>

						<li className={styleRodape.rodape__item_midias_sociais}>
							<a href="https://www.instagram.com/musicdotonline">
								<img src="/footer-icone-instagram.svg" alt="Instagram" />
							</a>
						</li>
					</ul>
				</section>
				<section className={styleRodape.rodape__secao + " " + styleRodape.rodape__secao__cursos}>
					<h2 className={styleRodape.rodape__titulo}> Cursos da MusicDot </h2>
					<nav>
						<ul>
							<li className={styleRodape.rodape__item_lista}><a href="#">Cursos de Teclado & Piano</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Cursos de Violão/Guitarra</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Cursos de Baixo</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Cursos de Bateria</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Cursos de Percussão</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Cursos de Canto</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Cursos de Áudio</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Cursos de Teoria</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Cursos de Sopro</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Cursos de Cordas</a></li>
						</ul>
					</nav>
				</section>

				<section className={styleRodape.rodape__secao + " " + styleRodape.rodape__secao__links}>
					<h2 className={styleRodape.rodape__titulo}> MusicDot </h2>
					<nav>
						<ul className={styleRodape.rodape__lista_cursos}>
							<li className={styleRodape.rodape__item_lista}><a href="#">Apostila</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">E-book</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Login</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Matricule-se</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Perguntas frequentes</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Para Escolas</a></li>
							<li className={styleRodape.rodape__item_lista}><a href="#">Contato</a></li>
						</ul>
					</nav>
				</section>

				<section className={styleRodape.rodape__secao + " " + styleRodape.rodape__secao__newsletter}>
					<h2 className={styleRodape.rodape__titulo}> Receba novidades e lançamentos </h2>
					<form action="#" method="get" className={styleformNews.form_newsletter}>
						<label for="form_newsletter__label" className={styleformNews.form_newsletter__label}>
							Seu email pessoal
						</label>
						<input id="email-newsletter" name="email-newsletter" type="email" className={styleformNews.form_newsletter__campo} />
						<button type="submit" className={styleformNews.form_newsletter__botao}>
							OK
						</button>
					</form>
				</section>
			</footer>

		</>
	)
}