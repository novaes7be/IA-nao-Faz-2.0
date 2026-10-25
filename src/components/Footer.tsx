import { Logo } from './Navbar'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo size="sm" />
        <p className="footer-text">
          © {new Date().getFullYear()} O que a IA não faz. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
