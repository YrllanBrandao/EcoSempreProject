import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { ButtonToTop } from '../ButtonToTop'

import styles from './Footer.module.css'
import { ecoIcon } from '../../assets/icons'

export function Footer() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY * 2 >= document.body.offsetHeight / 2)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <footer className={styles.wrapper}>
      <div className={styles.wrapper_main_content}>
        <div className={`${styles.container_main_content} container`}>
          <article className={styles.main_content}>
            <section className={styles.intro}>
              <Logo />
              <p className={styles.paragraph}>
                Compromisso com a sustentabilidade e a Logística Reversa.
                Juntos, transformamos o descarte correto de eletroeletrônicos em
                ações que beneficiam o meio ambiente e a sociedade.
              </p>

              <Link to="/contato" className={styles.talk_with_us}>
                <Icon
                  icon="material-symbols:arrow-circle-right-rounded"
                  className={styles.arrow_circle_icon}
                  alt="Seta preenchida com um círculo"
                />
                <span className={styles.text_talk_with_us}>Fale Conosco</span>
              </Link>
            </section>

            <section className={styles.contact}>
              <div className={styles.subtitle}>Nosso Contato</div>
              <address className={styles.address_content}>
                <p className={styles.paragraph}>
                  Possui alguma dúvida ou precisa de ajuda, entre em contato com
                  a nossa equipe.
                </p>
                <div className={styles.tel_address}>
                  <Icon
                    icon="ant-design:phone-filled"
                    className={styles.tel_img}
                  />
                  <a className={styles.tel} href="tel:+(61) 98378-1438">
                    (61) 98378-1438
                  </a>
                </div>
                <p
                  aria-label="Endereço da EcoSempre"
                  className={styles.paragraph}
                >
                  71939-540, Alfa Mix Loja 11 e 12, Águas Claras, Brasília - DF.
                </p>
              </address>
            </section>

            <section className={styles.company}>
              <div className={styles.subtitle}>Empresa</div>
              <ul className={styles.list_links_company}>
                <li>
                  <Link to="/sobre">Quem Somos</Link>
                </li>
                <li>
                  <Link to="/coletas">Pontos de Coleta</Link>
                </li>
                <li>
                  <Link to="/blog">Nosso Blog</Link>
                </li>
                <li>
                  <Link to="/contato">Fale Conosco</Link>
                </li>
                <li>
                  <Link to="/parceiros">Parceiros</Link>
                </li>
              </ul>
            </section>
          </article>

          <Newsletter />
        </div>
      </div>

      <div className={styles.wrapper_second_content}>
        <ScheduleCard />
        <div className={styles.second_content}>
          <div className={styles.copyright}>
            @2023 EcoSempre. Todos Direitos Reservados. Love by{' '}
            <a
              target="_blank"
              className={styles.copyright_author}
              href="https://togyrogroupvictory.com/"
              rel="noreferrer"
            >
              Togyro Group Victory
            </a>
          </div>
        </div>

        {showButton && <ButtonToTop />}
      </div>
    </footer>
  )
}

function Logo() {
  return (
    <div className={styles.logo}>
      <img loading="lazy" src={ecoIcon} alt="" aria-hidden={true} />
      <div className={styles.logo_title}>
        EcoSempre
        <span className={styles.logo_subtitle}>Logística Reversa</span>
      </div>
    </div>
  )
}

function Newsletter() {
  return (
    <div className={styles.newsletter_wrapper}>
      <section className={styles.newsletter_content}>
        <p className={styles.paragraph_newsletter}>
          Inscreva-se para receber alertas, nossas últimas notícias e novidades
          da EcoSempre. Caso queira,você pode retirar sua inscrição a qualquer
          momento.
        </p>

        <form className={styles.wrapper_form}>
          <input
            className={styles.input}
            type="email"
            placeholder="Digite seu email"
            aria-label="Digite seu email"
          />
          <button
            aria-label="Inscrever-se"
            className={styles.btn_newsletter}
            type="submit"
          >
            <Icon
              icon="material-symbols:arrow-circle-right-rounded"
              className={styles.arrow_circle_icon}
              aria-hidden={true}
            />
          </button>
        </form>
      </section>

      <div className={styles.wrapper_social_medias}>
        <p className={styles.paragraph_social_medias}>
          Siga-nos nas redes sociais
        </p>
        <div className={styles.social_medias}>
          <a
            target="_blank"
            aria-label="Instagram"
            className={styles.link_social_medias}
            href="www.instagram.com"
          >
            <Icon
              icon="entypo-social:instagram-with-circle"
              aria-hidden={true}
            />
          </a>
          <a
            target="_blank"
            aria-label="Facebook"
            className={styles.link_social_medias}
            href="www.facebook.com"
          >
            <Icon icon="ic:baseline-facebook" aria-hidden={true} />
          </a>
          <a
            target="_blank"
            aria-label="WhatsApp"
            className={styles.link_social_medias}
            href="www.whatsapp.com"
          >
            <Icon icon="ri:whatsapp-fill" aria-hidden={true} />
          </a>
        </div>
      </div>
    </div>
  )
}

function ScheduleCard() {
  return (
    <div className={styles.schedule_card}>
      <div className={styles.box_schedule}>
        <Icon icon="ant-design:phone-filled" className={styles.tel_img} />
        <address className={styles.address}>
          Telefone: <strong>(61) 98378-1438</strong>
        </address>
      </div>
      <div className={styles.box_schedule}>
        <Icon icon="material-symbols:mail-rounded" />
        <address className={styles.address}>
          Email: <strong>ecosempre@gmail.com</strong>
        </address>
      </div>
      <div className={styles.box_schedule}>
        <Icon icon="mdi:clock-time-four" />
        <div className={styles.address}>
          Horário de Atendimento: <strong>Seg-Sex: 8h às 18h</strong>
        </div>
      </div>
      <div className={styles.box_schedule}>
        <Link
          role="button"
          className={`${styles.btn_schedule} btn btn-link`}
          to="/agendar"
        >
          Agende uma Coleta
        </Link>
      </div>
    </div>
  )
}
