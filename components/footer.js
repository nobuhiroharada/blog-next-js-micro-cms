import Logo from 'components/logo'
import Container from 'components/container'
import SocialFooter from 'components/social-footer'

export default function Footer() {
  return (
    <footer className="py-20 bg-slate-50 text-slate-800">
      <Container>
        <div className="flex flex-col gap-4 items-center text-center md:flex-row md:justify-between">
          <Logo />
          <SocialFooter />
        </div>
      </Container>
    </footer>
  )
}
