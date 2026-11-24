import Image from "next/image";
import useSWR from "swr";
import { SiSpotify } from "react-icons/si";
import { Card } from "@/components/ui/card";
import Section from "@/components/Section";

const NowPlaying = () => {
  const { data } = useSWR("/api/spotify");
  const isPlaying = data && data.isPlaying !== false;

  const content = (
    <Card className="flex-row items-center gap-4 p-4 transition-colors hover:bg-muted/50">
      {isPlaying ? (
        <div className="shrink-0">
          <Image
            src={data.albumImageUrl}
            alt="Spotify"
            height={150}
            width={150}
            className="size-16 rounded-md object-cover shadow-md sm:size-20"
          />
        </div>
      ) : (
        <div className="flex size-16 items-center justify-center rounded-md bg-muted sm:size-20">
          <SiSpotify className="size-8 text-[#1DB954]" />
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="flex items-center gap-2 text-xs font-medium text-[#1DB954]">
          {isPlaying && (
            <span className="flex h-3 items-end gap-0.5" aria-hidden>
              <span className="w-0.5 animate-[pulse_1s_ease-in-out_infinite] bg-current [height:60%]" />
              <span className="w-0.5 animate-[pulse_1s_ease-in-out_infinite_200ms] bg-current [height:100%]" />
              <span className="w-0.5 animate-[pulse_1s_ease-in-out_infinite_400ms] bg-current [height:40%]" />
            </span>
          )}
          {isPlaying ? "Now playing" : "Spotify"}
        </span>
        {isPlaying ? (
          <>
            <p className="truncate font-semibold">{data.title}</p>
            <p className="truncate text-sm text-muted-foreground">
              {data.artist} · {data.album}
            </p>
          </>
        ) : (
          <p className="font-medium text-muted-foreground">Not Playing...</p>
        )}
      </div>
    </Card>
  );

  return (
    <Section
      id="now-playing"
      eyebrow="On repeat"
      title="Listening to..."
      className="p-4"
      description="Can't code without my Jam."
    >
      {isPlaying && data.songUrl ? (
        <a
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </Section>
  );
};
export default NowPlaying;
