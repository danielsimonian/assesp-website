import type { ProjectVideo } from "@/lib/projetos";
import { cn } from "@/lib/utils";

export default function VideoGallery({ videos, className }: { videos: ProjectVideo[]; className?: string }) {
  if (videos.length === 0) return null;

  return (
    <div className={cn("grid grid-cols-1 gap-8", videos.length > 1 && "lg:grid-cols-2", className)}>
      {videos.map((video) => (
        <div key={video.src} className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <video
            src={video.src}
            controls
            playsInline
            preload="metadata"
            className="w-full aspect-video bg-black"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary-navy mb-2">{video.title}</h3>
            <p className="text-gray-600 text-sm">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
