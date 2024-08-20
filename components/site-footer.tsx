import { Mail } from "lucide-react";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

const SiteFooter = () => {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a
            href="mailto:hello@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Mail</span>
            <Mail className="size-6" />
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Twitter</span>
            <Icons.twitter className="size-6" />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="size-6" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <a
            href={/*siteConfig.links.personalSite*/ "https://example.com"}
            target="_target"
            rel="noopener noreferrer"
          >
            {siteConfig.author}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
