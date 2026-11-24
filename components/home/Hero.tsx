import NextLink from "next/link";
import { differenceInCalendarYears } from "date-fns";
import { ArrowRightIcon, MapPinIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CAREER_START, EXPERIENCE } from "@/data/experience";
import { SOCIALS } from "@/data/socials";

const Hero = () => {
  const current = EXPERIENCE.find((job) => !job.end);

  return (
    <section className="relative pt-16 pb-20 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,var(--color-blue-500)_0%,transparent_65%)] opacity-15 blur-2xl dark:opacity-20"
      />
      <div className="flex flex-col gap-6">
        {current && (
          <Badge
            variant="outline"
            className="h-7 gap-2 self-start rounded-full px-3 text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {current.role} @ {current.company}
          </Badge>
        )}

        {/* Name and photo share a row so they stay vertically aligned */}
        <div className="flex max-w-2xl items-center justify-between gap-6">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Hi! I&apos;m{" "}
            <span className="bg-linear-to-r from-blue-500 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Bevan Tony Medrano.
            </span>
          </h1>

          <div className="relative shrink-0">
            <div
              aria-hidden
              className="absolute -inset-1 rounded-full bg-linear-to-br from-blue-500 to-emerald-400 opacity-60 blur-md dark:-inset-2 dark:opacity-25 dark:blur-xl"
            />
            <Avatar className="relative size-24 after:hidden sm:size-40">
              <AvatarImage
                src="/me.jpeg"
                alt="Bevan Tony"
                className="dark:grayscale"
              />
              <AvatarFallback className="text-2xl sm:text-4xl">
                BT
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <p className="max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
          A try-hard web developer from the Philippines. With{" "}
          {differenceInCalendarYears(new Date(), CAREER_START)} years experience
          in developing applications. I enjoy building applications from
          scratch, Willing to take on any challenge even with little knowledge
          about. And learning along the process.
        </p>

        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPinIcon className="size-4" /> Philippines
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Button asChild size="lg" className="h-10 rounded-full px-5">
            <NextLink href="/project">
              View my projects <ArrowRightIcon />
            </NextLink>
          </Button>
          {SOCIALS.map((social) => (
            <Button
              key={social.href}
              asChild
              variant="outline"
              size="icon-lg"
              className="size-10 rounded-full [&_svg]:size-5"
              aria-label={`${social.label} Link`}
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
