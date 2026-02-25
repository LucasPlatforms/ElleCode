"use client";

/*
  SmoothScrollLink — componente riutilizzabile per anchor link con smooth scroll via JS.
  
  Perché non usiamo <Link href="#id"> di Next.js o <a href="#id"> puri?
  - Next.js Link su anchor hash fa un router.push che può causare re-render e flash.
  - CSS scroll-behavior: smooth è stato rimosso per eliminare il white flash tra sezioni.
  - Questo componente usa scrollIntoView({ behavior: "smooth" }) che è il metodo
    più affidabile: opera sul main thread di layout senza creare layer separati.

  Uso:
    <SmoothScrollLink href="contatti" className="...">Testo</SmoothScrollLink>
    (href = solo l'id, senza #)
*/

export default function SmoothScrollLink({
  href,
  className,
  children,
  ...props
}) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a href={`#${href}`} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
