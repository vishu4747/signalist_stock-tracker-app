import Link from "next/link";

const FooterLink = ({ text, linkText, href }: FooterLinkProps) => {
  return (
    <div className="text-sm text-gray-500">
      {text}
      {` `}
      <Link href={href} className="footer-link">
        {linkText}
      </Link>
    </div>
  );
};

export default FooterLink;
