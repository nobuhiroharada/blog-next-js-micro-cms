import Logo from 'components/logo'
import Container from 'components/container'
import styles from 'styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  )
}
