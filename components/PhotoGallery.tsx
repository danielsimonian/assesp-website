import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { ProjectPhoto } from "@/lib/projetos";

type PhotoGalleryProps = {
  photos: ProjectPhoto[];
  albumUrl?: string;
  className?: string;
};

export default function PhotoGallery({ photos, albumUrl, className }: PhotoGalleryProps) {
  if (photos.length === 0) return null;

  return (
    <div className={className}>
      {/* Linhas justificadas: cada linha ocupa toda a largura, sem buracos nem cortes.
          A base e o crescimento proporcionais à proporção da foto igualam as alturas na linha.
          O fator 10 evita flex-grow < 1, que deixaria foto vertical sozinha sem preencher a linha. */}
      <div className="flex flex-wrap gap-4 [--photo-row:11rem] md:[--photo-row:13rem]">
        {photos.map((photo) => {
          const ratio = photo.width / photo.height;
          return (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
              style={{ flexGrow: ratio * 10, flexBasis: `calc(var(--photo-row) * ${ratio})` }}
              className="min-w-0 h-auto rounded-2xl shadow-lg"
            />
          );
        })}
      </div>
      {albumUrl && (
        <div className="mt-6 text-center">
          <a
            href={albumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 font-semibold text-primary-blue hover:underline"
          >
            <span>Ver todas as fotos no Flickr</span>
            <ExternalLink size={16} />
          </a>
        </div>
      )}
    </div>
  );
}
