import Logo from 'components/logo'
import Container from 'components/container'
import Social from './social'

export default function Footer() {
  return (
    <footer className="py-20 bg-gray-200">
      <Container>
        <div className="flex flex-col gap-4 items-center text-center md:flex-row md:justify-between">
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  )
}
