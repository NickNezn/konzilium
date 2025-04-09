import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Konzílium – Neurologické a Rehabilitačné Centrum</p>
      <p>Tel: 042 4426 231 | Email: konzilium.med@gmail.com</p>
    </footer>
  );
}

export default Footer;
