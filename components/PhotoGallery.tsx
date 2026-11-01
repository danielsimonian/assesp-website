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
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {photos.map((photo) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="w-full h-auto mb-4 rounded-2xl shadow-lg break-inside-avoid"
          />
        ))}
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
