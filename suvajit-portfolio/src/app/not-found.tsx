import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container not-found">
      <div><span className="eyebrow">404 · PAGE NOT FOUND</span><h1>Lost in the stack.</h1><p>The page you are looking for does not exist or may have moved.</p><Link href="/" className="button button-primary"><ArrowLeft size={15} /> Back home</Link></div>
    </section>
  );
}
